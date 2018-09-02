(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("react-match-breakpoints", ["react"], factory);
	else if(typeof exports === 'object')
		exports["react-match-breakpoints"] = factory(require("react"));
	else
		root["react-match-breakpoints"] = factory(root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/michalklim1/projects/open-source/react-connected-breakpoints/node_modules/prop-types/index.js'");

/***/ }),

/***/ "./src/Breakpoints/index.js":
/*!**********************************!*\
  !*** ./src/Breakpoints/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Context = __webpack_require__(/*! ../Context */ "./src/Context/index.js");

var _Context2 = _interopRequireDefault(_Context);

var _utils = __webpack_require__(/*! ../utils */ "./src/utils/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Breakpoints = function Breakpoints() {
    return _react2.default.createElement(
        _Context2.default.Consumer,
        null,
        function (breakpoints, componentRenameFn) {
            return _extends({}, Object.keys(breakpoints).reduce(function (parentComponent, breakpoint) {
                var componentName = componentRenameFn ? componentRenameFn(breakpoint) : (0, _utils.capitalizeFirstLetter)(breakpoint);
                parentComponent[componentName] = function (_ref) {
                    var children = _ref.children;
                    return breakpoints[breakpoint] && children;
                };
                parentComponent[componentName].displayName = 'Breakpoints.' + componentName;
                return parentComponent;
            }, {}));
        }
    );
};

var breakpointsPropTypes = {
    children: _propTypes2.default.node
};

Object.keys(Breakpoints).forEach(function (item) {
    Breakpoints[item].propTypes = breakpointsPropTypes;
});

exports.default = Breakpoints;
module.exports = exports['default'];

/***/ }),

/***/ "./src/Context/index.js":
/*!******************************!*\
  !*** ./src/Context/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "react");

var Context = (0, _react.createContext)();

exports.default = Context;
module.exports = exports['default'];

/***/ }),

/***/ "./src/Provider/index.js":
/*!*******************************!*\
  !*** ./src/Provider/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.matchMediaBreakpoints = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Context = __webpack_require__(/*! ../Context */ "./src/Context/index.js");

var _Context2 = _interopRequireDefault(_Context);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var matchMediaBreakpoints = exports.matchMediaBreakpoints = {};

var Provider = function (_Component) {
    _inherits(Provider, _Component);

    function Provider(props) {
        _classCallCheck(this, Provider);

        var _this = _possibleConstructorReturn(this, (Provider.__proto__ || Object.getPrototypeOf(Provider)).call(this, props));

        _this.state = {
            breakpoints: {},
            componentRenameFn: undefined
        };

        _this.buildMatchMediaBreakpoints = function () {};

        _this.addBreakpointsListeners = function () {
            Object.keys(matchMediaBreakpoints).forEach(function (breakpoint) {
                matchMediaBreakpoints[breakpoint].addListener(function (mq) {
                    mq.matches ? _this.setActiveBreakpoint(breakpoint) : _this.unsetActiveBreakpoint(breakpoint);
                });
            });
        };

        _this.setActiveBreakpoint = function (breakpoint) {
            _this.setState(_defineProperty({}, breakpoint, true));
        };

        _this.unsetActiveBreakpoint = function (breakpoint) {
            _this.setState(_defineProperty({}, breakpoint, false));
        };

        var breakpoints = props.breakpoints,
            componentRenameFn = props.componentRenameFn;


        exports.matchMediaBreakpoints = matchMediaBreakpoints = _this.buildMatchMediaBreakpoints(breakpoints, componentRenameFn);

        _this.state = _extends({}, Object.keys(matchMediaBreakpoints).reduce(function (acc, breakpoint) {
            acc[breakpoint] = matchMediaBreakpoints[breakpoint].matches;
            return acc;
        }, {}));
        return _this;
    }

    _createClass(Provider, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _Context2.default.Provider,
                { value: this.state },
                this.props.children
            );
        }
    }]);

    return Provider;
}(_react.Component);

Provider.propTypes = {
    breakpoints: _propTypes2.default.object.isRequired
};

exports.default = Provider;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Breakpoints = exports.withBreakpoints = exports.Provider = undefined;

var _Provider = __webpack_require__(/*! ./Provider */ "./src/Provider/index.js");

var _Provider2 = _interopRequireDefault(_Provider);

var _withBreakpoints = __webpack_require__(/*! ./withBreakpoints */ "./src/withBreakpoints/index.js");

var _withBreakpoints2 = _interopRequireDefault(_withBreakpoints);

var _Breakpoints = __webpack_require__(/*! ./Breakpoints */ "./src/Breakpoints/index.js");

var _Breakpoints2 = _interopRequireDefault(_Breakpoints);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Provider = _Provider2.default;
exports.withBreakpoints = _withBreakpoints2.default;
exports.Breakpoints = _Breakpoints2.default;

/***/ }),

/***/ "./src/utils/capitalizeFirstLetter/index.js":
/*!**************************************************!*\
  !*** ./src/utils/capitalizeFirstLetter/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var capitalizeFirstLetter = function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

exports.default = capitalizeFirstLetter;
module.exports = exports["default"];

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _capitalizeFirstLetter = __webpack_require__(/*! ./capitalizeFirstLetter */ "./src/utils/capitalizeFirstLetter/index.js");

Object.defineProperty(exports, 'capitalizeFirstLetter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_capitalizeFirstLetter).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./src/withBreakpoints/index.js":
/*!**************************************!*\
  !*** ./src/withBreakpoints/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _Context = __webpack_require__(/*! ../Context */ "./src/Context/index.js");

var _Context2 = _interopRequireDefault(_Context);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var withBreakpoints = function withBreakpoints(ChildComponent) {
    var WithBreakpoints = function (_Component) {
        _inherits(WithBreakpoints, _Component);

        function WithBreakpoints() {
            _classCallCheck(this, WithBreakpoints);

            return _possibleConstructorReturn(this, (WithBreakpoints.__proto__ || Object.getPrototypeOf(WithBreakpoints)).apply(this, arguments));
        }

        _createClass(WithBreakpoints, [{
            key: 'render',
            value: function render() {
                var _this2 = this;

                return _react2.default.createElement(
                    _Context2.default.Consumer,
                    null,
                    function (breakpoints) {
                        return _react2.default.createElement(ChildComponent, _extends({}, _this2.props, { breakpoints: breakpoints }));
                    }
                );
            }
        }]);

        return WithBreakpoints;
    }(_react.Component);

    var getDisplayName = function getDisplayName(WrappedComponent) {
        return WrappedComponent.displayName || WrappedComponent.name || 'Component';
    };

    WithBreakpoints.displayName = 'withBreakpoints(' + getDisplayName(WithBreakpoints) + ')';

    return WithBreakpoints;
};

exports.default = withBreakpoints;
module.exports = exports['default'];

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});
//# sourceMappingURL=react-match-breakpoints.js.map