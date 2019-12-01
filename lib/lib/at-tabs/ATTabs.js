"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _tabs = _interopRequireDefault(require("antd/es/tabs"));

require("antd/es/tabs/style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ATTabs = function ATTabs(props) {
  return _react.default.createElement(_tabs.default, props);
};

var _default = ATTabs;
exports.default = _default;