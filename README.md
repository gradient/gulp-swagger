# Gulp Swagger Bundle

| | |
| ----------- | ------------ |
| Package   | gulp-swagger-bundle |
| Description | [Gulp][gulp] plugin that bundles [Swagger][swagger]. |
| Node Version | >= 0.8 |

> This is a fork of (gulp-swagger)[https://github.com/gersongoulart/gulp-swagger], it has been stripped down to run a super efficient bundle process for a smaller output file. If you'd like more validation features, see the original.

## Install

```bash
npm install @gradient/gulp-swagger-bundle
```

## Usage

Output fully parsed schema:

```js
var gulp = require('gulp');
var swagger = require('gulp-swagger');

gulp.task('schema', function() {
  gulp.src('./src/api/index.yaml')
    .pipe(swagger('schema.json'))
    .pipe(gulp.dest('./build'));
});

gulp.task('default', ['schema']);
```

## See Also

- [Gulp][gulp]
- [Swagger][swagger]
- [Swagger-Parser][swagger-parser]
- [Swagger to JS Codegen][swagger-js-codegen]

## Contributing

We welcome contributions, make any changes you like an submit a pull request!