// This loader will simply replace all $something sass-variable with @something less-variables
module.exports = function (source) {
  return source.replace(/\$/ig, '@');
};