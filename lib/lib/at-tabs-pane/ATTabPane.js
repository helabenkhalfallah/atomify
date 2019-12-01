"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _tabs = _interopRequireDefault(require("antd/es/tabs"));

require("antd/es/tabs/style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabPane = _tabs.default.TabPane;

var ATTabPane = function ATTabPane(props) {
  return _react.default.createElement(TabPane, props);
};

var _default = ATTabPane;
exports.default = _default;