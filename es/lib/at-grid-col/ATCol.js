"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _col = _interopRequireDefault(require("antd/es/col"));

require("antd/es/grid/style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ATCol = function ATCol(props) {
  return _react.default.createElement(_col.default, props);
};

var _default = ATCol;
exports.default = _default;