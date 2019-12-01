"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _list = _interopRequireDefault(require("antd/es/list"));

require("antd/es/list/style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ATListItemMeta = function ATListItemMeta(props) {
  return _react.default.createElement(_list.default.Item.Meta, props);
};

var _default = ATListItemMeta;
exports.default = _default;