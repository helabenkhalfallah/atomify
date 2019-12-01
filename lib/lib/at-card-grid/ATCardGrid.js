"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _card = _interopRequireDefault(require("antd/es/card"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Grid = _card.default.Grid;

var ATCardGrid = function ATCardGrid(props) {
  return _react.default.createElement(Grid, props);
};

var _default = ATCardGrid;
exports.default = _default;