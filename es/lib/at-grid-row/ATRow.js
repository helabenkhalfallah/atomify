"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _row = _interopRequireDefault(require("antd/es/row"));

require("antd/es/grid/style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ATRow = function ATRow(props) {
  return _react.default.createElement(_row.default, props);
};

var _default = ATRow;
exports.default = _default;