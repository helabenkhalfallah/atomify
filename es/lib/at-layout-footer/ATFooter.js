"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _layout = _interopRequireDefault(require("antd/es/layout"));

require("antd/es/layout/style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = _layout.default.Footer;

var ATFooter = function ATFooter(props) {
  return _react.default.createElement(Footer, props);
};

var _default = ATFooter;
exports.default = _default;