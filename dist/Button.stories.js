"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Primary = void 0;
var _react = _interopRequireDefault(require("react"));
var _Button = require("./Button");
var _solid = require("@heroicons/react/24/solid");
require("./tailwind.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//import results from '../../.jest-test-results.json';

const meta = {
  title: 'Components/Button',
  component: _Button.Button,
  //decorators: [withTests({ results:results })],
  parameters: {
    layout: 'centered',
    jest: ['Button.test.tsx']
  },
  tags: ['autodocs']
};
var _default = exports.default = meta;
const Primary = exports.Primary = {
  args: {
    label: /*#__PURE__*/_react.default.createElement(_solid.XMarkIcon, {
      className: "w-6 h-6 stroke-2"
    }),
    backgroundColor: "bg-[linear-gradient(170deg,_#FBFBFD,_#607d8b0d_27%,_#FBFBFD)]",
    className: "flex items-center text-primary text-sm font-bold shadow rounded border-brdrbtn1 h-11 px-3 outline-none"
  }
};