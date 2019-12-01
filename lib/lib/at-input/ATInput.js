"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _input = _interopRequireDefault(require("antd/es/input"));

require("antd/es/input/style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ATInput = function ATInput(props) {
  return _react.default.createElement(_input.default, props);
};

var _default = ATInput;
exports.default = _default;