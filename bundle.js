(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('the-answer')) :
  typeof define === 'function' && define.amd ? define(['the-answer'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.test = factory(global.answer));
}(this, (function (answer) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var answer__default = /*#__PURE__*/_interopDefaultLegacy(answer);

  var version = "1.0.0";

  var a = 1;
  console.log(a);
  var main = (function () {
    console.log("the answer is ".concat(answer__default['default']));
    console.log("version:".concat(version));
  });

  return main;

})));
