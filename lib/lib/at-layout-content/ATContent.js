"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _layout = _interopRequireDefault(require("antd/es/layout"));

require("antd/es/layout/style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Content = _layout.default.Content;

var ATContent = function ATContent(props) {
  return _react.default.createElement(Content, props);
};

var _default = ATContent;
exports.default = _default;