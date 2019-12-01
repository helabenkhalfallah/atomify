"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var renderSubViews = function renderSubViews(children) {
  if (children) {
    if (Array.isArray(children)) {
      return children;
    }

    return [children];
  }

  return null;
};

var ViewUtils = {
  renderSubViews: renderSubViews
};
var _default = ViewUtils;
exports.default = _default;