"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _shortcut = _interopRequireDefault(require("./shortcut"));

var _secondShortcutWithWeirdFilename = _interopRequireDefault(require("./secondShortcut.with-weird.filename.js"));

var _notShortcut = _interopRequireDefault(require("./notShortcut.js"));

var _myNpmModule = _interopRequireDefault(require("@vendor/my-npm-module"));

console.log(_shortcut.default);
console.log(_secondShortcutWithWeirdFilename.default);
console.log(_notShortcut.default);
console.log(_myNpmModule.default);