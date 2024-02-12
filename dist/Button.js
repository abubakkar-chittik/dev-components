"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;
var _react = _interopRequireDefault(require("react"));
require("./tailwind.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Button = _ref => {
  let {
    onClick,
    backgroundColor,
    label,
    textColor,
    hoverBg,
    disabled,
    style,
    autoFocus,
    className,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("button", _extends({
    type: "button",
    className: ["inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:w-auto sm:text-sm", "".concat(backgroundColor), "".concat(hoverBg), "".concat(textColor), "".concat(className)].join(' ')
  }, props, {
    disabled: disabled,
    onClick: onClick,
    style: style,
    autoFocus: autoFocus,
    role: "button"
  }), label);
};
exports.Button = Button;