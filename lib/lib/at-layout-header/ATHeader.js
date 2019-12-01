"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _layout = _interopRequireDefault(require("antd/es/layout"));

require("antd/es/layout/style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = _layout.default.Header;

var ATHeader = function ATHeader(props) {
  return _react.default.createElement(Header, props);
};

var _default = ATHeader;
exports.default = _default;