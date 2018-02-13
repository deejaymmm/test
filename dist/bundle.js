/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _forms = __webpack_require__(1);

var _forms2 = _interopRequireDefault(_forms);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_forms2.default.init();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _login = __webpack_require__(2);

var _login2 = _interopRequireDefault(_login);

var _registration = __webpack_require__(3);

var _registration2 = _interopRequireDefault(_registration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Forms = function () {
    function Forms() {
        _classCallCheck(this, Forms);

        this.flag = 0;
    }

    _createClass(Forms, [{
        key: "init",
        value: function init() {
            document.getElementById('main').innerHTML = _login2.default;
            document.getElementsByClassName('btn-link')[0].onclick = function () {
                if (this.flag == 0) {
                    console.log(this.flag);
                    document.getElementById('main').innerHTML = _login2.default;
                } else {
                    console.log(this.flag);
                    document.getElementById('main').innerHTML = _registration2.default;
                }
            };
        }
    }]);

    return Forms;
}();

exports.default = new Forms();

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "<div id=\"Auth\" class=\"col-md-4\">\r\n   <h2>Authorisation</h2>\r\n   <form role=\"form\">\r\n      <div class=\"form-group\">\r\n        <label for=\"InputLogin\">Login</label>\r\n        <input type=\"login\" class=\"form-control\" id=\"InputLogin\" placeholder=\"Login\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"InputPassword1\">Password</label>\r\n        <input type=\"password\" class=\"form-control\" id=\"InputPassword1\" placeholder=\"Password\">\r\n      </div>\r\n      <div class=\"checkbox\">\r\n        <label>\r\n           <input type=\"checkbox\"> Remember Me\r\n        </label>\r\n      </div>\r\n      <button type=\"button\" class=\"btn btn-success\">Enter</button>\r\n      <button id=\"regLink\" type=\"button\" class=\"btn btn-link\">Registration</button>\r\n    </form>\r\n</div>";

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "<div id=\"Reg\" class=\"col-md-4\">\r\n   <h2>Registration</h2>\r\n   <form role=\"form\">\r\n      <div class=\"form-group\">\r\n        <label for=\"InputUsername\">Username</label>\r\n        <input type=\"login\" class=\"form-control\" id=\"InputUsername\" placeholder=\"Username\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"InputLogin\">Login</label>\r\n        <input type=\"login\" class=\"form-control\" id=\"InputLogin\" placeholder=\"Login\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"InputEmail\">Email</label>\r\n        <input type=\"email\" class=\"form-control\" id=\"InputEmail\" placeholder=\"Email\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"InputPassword1\">Password</label>\r\n        <input type=\"password\" class=\"form-control\" id=\"InputPassword1\" placeholder=\"Password\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"InputPassword2\">Password again</label>\r\n        <input type=\"password\" class=\"form-control\" id=\"InputPassword2\" placeholder=\"Password\">\r\n      </div>\r\n      <div class=\"checkbox\">\r\n        <label>\r\n           <input type=\"checkbox\"> Remember Me\r\n        </label>\r\n      </div>\r\n      <button type=\"button\" class=\"btn btn-success\">Submit</button>\r\n      <button id=\"authLink\" type=\"button\" class=\"btn btn-link\">Authorisation</button>\r\n    </form>\r\n</div>";

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map