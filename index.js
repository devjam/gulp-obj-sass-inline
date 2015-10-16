var through = require('through');
var objSass = require('obj-sass');

module.exports = function(opt) {
  var isFirstFile = true;
  return through(function(file) {
    if (!isFirstFile) return;
    isFirstFile = false;
    var sass = objSass(opt);
    file.contents = Buffer.concat([Buffer(sass), file.contents]);
    this.push(file);
  });
}
