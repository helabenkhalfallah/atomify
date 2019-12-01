"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _button = _interopRequireDefault(require("antd/es/button"));

var _ViewUtils = _interopRequireDefault(require("../utils/ViewUtils"));

require("antd/es/button/style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderSubViews = _ViewUtils.default.renderSubViews;

var ATButton = function ATButton(props) {
  var _ref = props || {},
      children = _ref.children;

  var buttonSubViews = renderSubViews(children);
  return _react.default.createElement(_button.default, props, buttonSubViews && buttonSubViews.map(function (view) {
    return view;
  }));
};

var _default = ATButton;
exports.default = _default;