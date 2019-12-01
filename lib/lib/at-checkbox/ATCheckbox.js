"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _checkbox = _interopRequireDefault(require("antd/es/checkbox"));

var _ViewUtils = _interopRequireDefault(require("../utils/ViewUtils"));

require("antd/es/checkbox/style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderSubViews = _ViewUtils.default.renderSubViews;

var ATCheckbox = function ATCheckbox(props) {
  var _ref = props || {},
      children = _ref.children;

  var checkBoxSubViews = renderSubViews(children);
  return _react.default.createElement(_checkbox.default, props, checkBoxSubViews && checkBoxSubViews.map(function (view) {
    return view;
  }));
};

var _default = ATCheckbox;
exports.default = _default;