"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _card = _interopRequireDefault(require("antd/es/card"));

require("antd/es/card/style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ATCard = function ATCard(props) {
  return _react.default.createElement(_card.default, props);
};

var _default = ATCard;
exports.default = _default;