"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _input = _interopRequireDefault(require("antd/es/input"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ATInputPassword = function ATInputPassword(props) {
  return _react.default.createElement(_input.default.Password, props);
};

var _default = ATInputPassword;
exports.default = _default;