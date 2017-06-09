var fs = require('fs');
var path = require('path');
var through = require('through2');
var gutil = require('gulp-util');
var swaggerParser = require('swagger-parser'); // Swagger 2.0
var CircularJSON = require('circular-json');
var PLUGIN_NAME = 'gulp-swagger';

module.exports = function gulpSwagger (filename, options) {
	options = options || {};

	// expose options from swagger-parser
	// https://github.com/BigstickCarpet/swagger-parser/blob/master/docs/options.md
	var parserSettings = options.parser || {};

	return through.obj(function throughObj (file, encoding, callback) {
		var _this = this;

		swaggerParser.bundle(file.history[0], function parseSchema (error, swaggerObject) {
			if ( error ) {
				callback(new gutil.PluginError(PLUGIN_NAME, error));
				return;
			}

			var fileBuffer;
			try {
				fileBuffer = JSON.stringify(swaggerObject, null, 2);
			}
			catch (error) {
				fileBuffer = CircularJSON.stringify(swaggerObject, null, 2);
			}

			// Return processed file to gulp
			_this.push(new gutil.File({
				cwd: file.cwd,
				base: file.base,
				path: path.join(file.base, filename),
				contents: new Buffer(fileBuffer)
			}));

			callback();
		});
	});
};
