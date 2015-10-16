# gulp-obj-sass-inline

> gulp plugin for converting Object to scss/sass variable String with gulp-sass (gulp-ruby-sass).

## Install

```bash
$ npm install gulp-obj-sass-inline
```

## Usage

```js
var objSassInline = require('gulp-obj-sass-inline'),
    gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp
    .src(['example.scss'])
    .pipe(objSassInline({
      obj: {
        key: 'value',
        obj: {
            key: 0
        },
        array: [1, 2, 3]
      }
    }))
    .pipe(sass())
    .pipe(gulp.dest('build/'));
});

// below variables will be inserted before the example.scss.
// so you can use the variables in the example.scss.
//
// $key: value;
// $obj-key: 0;
// $array-0: 1;
// $array-1: 2;
// $array-2: 3;
//
```

### options
same options with `obj-sass`.

see [obj-sass](https://github.com/devjam/obj-sass#options).


## License
[MIT](http://opensource.org/licenses/MIT)
