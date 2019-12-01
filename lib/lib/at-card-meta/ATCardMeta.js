"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _card = _interopRequireDefault(require("antd/es/card"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Meta = _card.default.Meta;

var ATCardMeta = function ATCardMeta(props) {
  return _react.default.createElement(Meta, props);
};

var _default = ATCardMeta;
exports.default = _default;