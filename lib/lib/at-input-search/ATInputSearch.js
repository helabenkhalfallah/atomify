"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _input = _interopRequireDefault(require("antd/es/input"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Search = _input.default.Search;

var ATInputSearch = function ATInputSearch(props) {
  return _react.default.createElement(Search, props);
};

var _default = ATInputSearch;
exports.default = _default;