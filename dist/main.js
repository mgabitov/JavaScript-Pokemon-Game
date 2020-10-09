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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\nmodule.exports = _assertThisInitialized;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/assertThisInitialized.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nmodule.exports = _defineProperty;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/defineProperty.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _getPrototypeOf(o) {\n  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\nmodule.exports = _getPrototypeOf;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/getPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ \"./node_modules/@babel/runtime/helpers/setPrototypeOf.js\");\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) setPrototypeOf(subClass, superClass);\n}\n\nmodule.exports = _inherits;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/inherits.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _typeof = __webpack_require__(/*! ../helpers/typeof */ \"./node_modules/@babel/runtime/helpers/typeof.js\");\n\nvar assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  }\n\n  return assertThisInitialized(self);\n}\n\nmodule.exports = _possibleConstructorReturn;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _setPrototypeOf(o, p) {\n  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\nmodule.exports = _setPrototypeOf;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/setPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {\n    module.exports = _typeof = function _typeof(obj) {\n      return typeof obj;\n    };\n  } else {\n    module.exports = _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n    };\n  }\n\n  return _typeof(obj);\n}\n\nmodule.exports = _typeof;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/typeof.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: resetGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resetGame\", function() { return resetGame; });\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ \"./src/main.js\");\n\n\nfunction resetGame() {\n  var allButtons = document.querySelectorAll('.control .button');\n  allButtons.forEach(function ($item) {\n    return $item.remove();\n  });\n  var $control = document.querySelector('.control');\n  var $resetBtn = document.createElement('button');\n  $resetBtn.classList.add('button');\n  $resetBtn.innerText = 'Reset';\n  $control.appendChild($resetBtn);\n  $resetBtn.addEventListener(\"click\", function () {\n    var $divLogs = document.querySelector('#logs');\n    $divLogs.innerHTML = '';\n    Object(_main_js__WEBPACK_IMPORTED_MODULE_0__[\"showButtons\"])();\n    $resetBtn.remove();\n  });\n}\n\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: showButtons, $getElById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showButtons\", function() { return showButtons; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$getElById\", function() { return $getElById; });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pokemon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pokemon.js */ \"./src/pokemon.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n/* harmony import */ var _pokemons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pokemons.js */ \"./src/pokemons.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nfunction $getElById(id) {\n  return document.getElementById(id);\n}\n\nfunction play2() {\n  var audio = new Audio('./assets/mk3-00225.mp3');\n  audio.play();\n}\n\nvar $control = document.querySelector('.control');\nvar $startBtn = document.createElement('button');\n$startBtn.classList.add('button');\n$startBtn.innerText = 'Start the Game!';\n$control.appendChild($startBtn);\n$startBtn.addEventListener(\"click\", function () {\n  showButtons();\n  $startBtn.remove();\n});\n\nfunction showButtons() {\n  var i = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"random\"])(_pokemons_js__WEBPACK_IMPORTED_MODULE_3__[\"pokemons\"].length - 1);\n  var firstPokemon = _pokemons_js__WEBPACK_IMPORTED_MODULE_3__[\"pokemons\"][i];\n  var $elImgPlayer1 = $getElById('img-player1');\n  $elImgPlayer1.src = firstPokemon.img;\n  var player1 = new _pokemon_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_objectSpread(_objectSpread({}, firstPokemon), {}, {\n    selectors: 'player1'\n  }));\n  $getElById('name-player1').innerText = player1.name;\n  var j = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"random\"])(_pokemons_js__WEBPACK_IMPORTED_MODULE_3__[\"pokemons\"].length - 1);\n  var secondPokemon = _pokemons_js__WEBPACK_IMPORTED_MODULE_3__[\"pokemons\"][j];\n  var player2 = new _pokemon_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_objectSpread(_objectSpread({}, secondPokemon), {}, {\n    selectors: 'player2'\n  }));\n  $getElById('name-player2').innerText = player2.name;\n  var $elImgPlayer2 = $getElById('img-player2');\n  $elImgPlayer2.src = secondPokemon.img;\n  player1.attacks.forEach(function (item) {\n    var $btn = document.createElement('button');\n    $btn.classList.add('button');\n    $btn.innerText = item.name;\n    var btnCount = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"countBtn\"])(item.maxCount, $btn);\n    $btn.addEventListener('click', function () {\n      btnCount();\n      play2();\n      player1.changeHP($btn, Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"random\"])(item.maxDamage, item.minDamage), function (count) {\n        console.log('Some change after change HP', count);\n        Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"generateLog\"])(player1, player2, count);\n      });\n      player2.changeHP($btn, Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"random\"])(player2.attacks[0].maxDamage, player2.attacks[0].minDamage), function (count) {\n        console.log('Some change after change HP', count);\n        Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"generateLog\"])(player2, player1, count);\n      });\n    });\n    $control.appendChild($btn);\n  });\n}\n\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/pokemon.js":
/*!************************!*\
  !*** ./src/pokemon.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar Selectors = function Selectors(name) {\n  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, Selectors);\n\n  this.elHP = document.getElementById(\"health-\".concat(name));\n  this.elProgressbar = document.getElementById(\"progressbar-\".concat(name));\n};\n\nvar Pokemon = /*#__PURE__*/function (_Selectors) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default()(Pokemon, _Selectors);\n\n  var _super = _createSuper(Pokemon);\n\n  function Pokemon(_ref) {\n    var _this;\n\n    var name = _ref.name,\n        hp = _ref.hp,\n        type = _ref.type,\n        selectors = _ref.selectors,\n        _ref$attacks = _ref.attacks,\n        attacks = _ref$attacks === void 0 ? [] : _ref$attacks;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, Pokemon);\n\n    _this = _super.call(this, selectors);\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), \"changeHP\", function ($btn, count, cb) {\n      _this.hp.current -= count;\n\n      if (_this.hp.current <= 0) {\n        _this.hp.current = 0;\n        alert('Бедный ' + _this.name + ' проиграл бой');\n        Object(_game_js__WEBPACK_IMPORTED_MODULE_6__[\"resetGame\"])();\n      }\n\n      _this.renderHP();\n\n      cb && cb(count);\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), \"renderHP\", function () {\n      _this.renderHPLife();\n\n      _this.renderProgressbarHP();\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), \"renderHPLife\", function () {\n      var _assertThisInitialize = _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this),\n          elHP = _assertThisInitialize.elHP,\n          _assertThisInitialize2 = _assertThisInitialize.hp,\n          current = _assertThisInitialize2.current,\n          total = _assertThisInitialize2.total;\n\n      elHP.innerText = current + ' / ' + total;\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), \"renderProgressbarHP\", function () {\n      _this.elProgressbar.style.width = _this.hp.current / _this.hp.total * 100 + '%';\n\n      if (_this.hp.current > 20 && _this.hp.current <= 60) {\n        _this.elProgressbar.className = 'health low';\n      } else if (_this.hp.current <= 20) {\n        _this.elProgressbar.className = 'health critical';\n      } else _this.elProgressbar.className = 'health';\n    });\n\n    _this.name = name;\n    _this.hp = {\n      current: hp,\n      total: hp\n    };\n    _this.type = type;\n    _this.attacks = attacks;\n\n    _this.renderHP();\n\n    return _this;\n  }\n\n  return Pokemon;\n}(Selectors);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pokemon);\n\n//# sourceURL=webpack:///./src/pokemon.js?");

/***/ }),

/***/ "./src/pokemons.js":
/*!*************************!*\
  !*** ./src/pokemons.js ***!
  \*************************/
/*! exports provided: pokemons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pokemons\", function() { return pokemons; });\nvar pokemons = [{\n  name: 'Pikachu',\n  type: 'electric',\n  hp: 274,\n  img: 'http://sify4321.000webhostapp.com/pikachu.png',\n  attacks: [{\n    name: \"thunder jolt\",\n    maxDamage: 40,\n    minDamage: 20,\n    maxCount: 100\n  }, {\n    name: \"electro ball\",\n    maxDamage: 60,\n    minDamage: 45,\n    maxCount: 6\n  }, {\n    name: \"volt tackle\",\n    maxDamage: 75,\n    minDamage: 60,\n    maxCount: 4\n  }, {\n    name: \"thunder crack\",\n    maxDamage: 160,\n    minDamage: 130,\n    maxCount: 2\n  }]\n}, {\n  img: 'http://sify4321.000webhostapp.com/charmander.png',\n  name: 'Charmander',\n  type: 'fire',\n  hp: 282,\n  attacks: [{\n    name: \"ember\",\n    maxDamage: 40,\n    minDamage: 20,\n    maxCount: 100\n  }, {\n    name: \"flamethrower\",\n    maxDamage: 60,\n    minDamage: 45,\n    maxCount: 6\n  }, {\n    name: \"burning tail\",\n    maxDamage: 75,\n    minDamage: 60,\n    maxCount: 4\n  }, {\n    name: \"fire spin\",\n    maxDamage: 130,\n    minDamage: 110,\n    maxCount: 2\n  }]\n}, {\n  img: 'http://sify4321.000webhostapp.com/bulbasaur.png',\n  name: 'Bulbasaur',\n  type: 'fire',\n  hp: 294,\n  attacks: [{\n    name: \"tackle\",\n    maxDamage: 40,\n    minDamage: 20,\n    maxCount: 100\n  }, {\n    name: \"vine whip\",\n    maxDamage: 60,\n    minDamage: 45,\n    maxCount: 6\n  }, {\n    name: \"razor leaf\",\n    maxDamage: 75,\n    minDamage: 60,\n    maxCount: 4\n  }, {\n    name: \"solar beam\",\n    maxDamage: 130,\n    minDamage: 110,\n    maxCount: 2\n  }]\n}, {\n  img: 'http://sify4321.000webhostapp.com/squirtle.png',\n  name: 'Squirtle',\n  type: 'water',\n  hp: 292,\n  attacks: [{\n    name: \"bubble\",\n    maxDamage: 40,\n    minDamage: 20,\n    maxCount: 100\n  }, {\n    name: \"water gun\",\n    maxDamage: 60,\n    minDamage: 45,\n    maxCount: 6\n  }, {\n    name: \"shell attack\",\n    maxDamage: 75,\n    minDamage: 60,\n    maxCount: 4\n  }, {\n    name: \"hydro pump\",\n    maxDamage: 130,\n    minDamage: 110,\n    maxCount: 2\n  }]\n}, {\n  img: 'http://sify4321.000webhostapp.com/pidgey.png',\n  name: 'Pidgey',\n  type: 'air',\n  hp: 284,\n  attacks: [{\n    name: \"Air Slash\",\n    maxDamage: 40,\n    minDamage: 20,\n    maxCount: 100\n  }, {\n    name: \"Razor Wind\",\n    maxDamage: 60,\n    minDamage: 45,\n    maxCount: 6\n  }, {\n    name: \"Heat Wave\",\n    maxDamage: 75,\n    minDamage: 60,\n    maxCount: 4\n  }, {\n    name: \"Sky Attack\",\n    maxDamage: 130,\n    minDamage: 110,\n    maxCount: 2\n  }]\n}, {\n  img: 'http://sify4321.000webhostapp.com/mew.png',\n  name: 'Mew',\n  type: 'air',\n  hp: 404,\n  attacks: [{\n    name: \"Pound\",\n    maxDamage: 40,\n    minDamage: 20,\n    maxCount: 100\n  }, {\n    name: \"Ancient Power\",\n    maxDamage: 60,\n    minDamage: 45,\n    maxCount: 6\n  }, {\n    name: \"Aura Sphere\",\n    maxDamage: 75,\n    minDamage: 60,\n    maxCount: 4\n  }, {\n    name: \"Psychic\",\n    maxDamage: 130,\n    minDamage: 110,\n    maxCount: 2\n  }]\n}];\n\n//# sourceURL=webpack:///./src/pokemons.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: random, generateLog, countBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"random\", function() { return random; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateLog\", function() { return generateLog; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"countBtn\", function() { return countBtn; });\nfunction random(max) {\n  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  var num = max - min;\n  return Math.ceil(Math.random() * num);\n}\n\nfunction generateLog(player1, player2, count) {\n  var name = player1.name,\n      _player1$hp = player1.hp,\n      current = _player1$hp.current,\n      total = _player1$hp.total;\n  var enemyName = player2.name;\n  var logs = [\"\".concat(name, \" \\u0432\\u0441\\u043F\\u043E\\u043C\\u043D\\u0438\\u043B \\u0447\\u0442\\u043E-\\u0442\\u043E \\u0432\\u0430\\u0436\\u043D\\u043E\\u0435, \\u043D\\u043E \\u043D\\u0435\\u043E\\u0436\\u0438\\u0434\\u0430\\u043D\\u043D\\u043E \").concat(enemyName, \", \\u043D\\u0435 \\u043F\\u043E\\u043C\\u043D\\u044F \\u0441\\u0435\\u0431\\u044F \\u043E\\u0442 \\u0438\\u0441\\u043F\\u0443\\u0433\\u0430, \\u0443\\u0434\\u0430\\u0440\\u0438\\u043B \\u0432 \\u043F\\u0440\\u0435\\u0434\\u043F\\u043B\\u0435\\u0447\\u044C\\u0435 \\u0432\\u0440\\u0430\\u0433\\u0430. \\u0423\\u0440\\u043E\\u043D \\u0441\\u043E\\u0441\\u0442\\u0430\\u0432\\u0438\\u043B -\").concat(count, \", [ \").concat(current, \" / \").concat(total, \" ]\"), \"\".concat(name, \" \\u043F\\u043E\\u043F\\u0435\\u0440\\u0445\\u043D\\u0443\\u043B\\u0441\\u044F, \\u0438 \\u0437\\u0430 \\u044D\\u0442\\u043E \").concat(enemyName, \" \\u0441 \\u0438\\u0441\\u043F\\u0443\\u0433\\u0443 \\u043F\\u0440\\u0438\\u043B\\u043E\\u0436\\u0438\\u043B \\u043F\\u0440\\u044F\\u043C\\u043E\\u0439 \\u0443\\u0434\\u0430\\u0440 \\u043A\\u043E\\u043B\\u0435\\u043D\\u043E\\u043C \\u0432 \\u043B\\u043E\\u0431 \\u0432\\u0440\\u0430\\u0433\\u0430. \\u0423\\u0440\\u043E\\u043D \\u0441\\u043E\\u0441\\u0442\\u0430\\u0432\\u0438\\u043B -\").concat(count, \", [ \").concat(current, \" / \").concat(total, \" ]\"), \"\".concat(name, \" \\u0437\\u0430\\u0431\\u044B\\u043B\\u0441\\u044F, \\u043D\\u043E \\u0432 \\u044D\\u0442\\u043E \\u0432\\u0440\\u0435\\u043C\\u044F \\u043D\\u0430\\u0433\\u043B\\u044B\\u0439 \").concat(enemyName, \", \\u043F\\u0440\\u0438\\u043D\\u044F\\u0432 \\u0432\\u043E\\u043B\\u0435\\u0432\\u043E\\u0435 \\u0440\\u0435\\u0448\\u0435\\u043D\\u0438\\u0435, \\u043D\\u0435\\u0441\\u043B\\u044B\\u0448\\u043D\\u043E \\u043F\\u043E\\u0434\\u043E\\u0439\\u0434\\u044F \\u0441\\u0437\\u0430\\u0434\\u0438, \\u0443\\u0434\\u0430\\u0440\\u0438\\u043B. \\u0423\\u0440\\u043E\\u043D \\u0441\\u043E\\u0441\\u0442\\u0430\\u0432\\u0438\\u043B -\").concat(count, \", [ \").concat(current, \" / \").concat(total, \" ]\"), \"\".concat(name, \" \\u043F\\u0440\\u0438\\u0448\\u0435\\u043B \\u0432 \\u0441\\u0435\\u0431\\u044F, \\u043D\\u043E \\u043D\\u0435\\u043E\\u0436\\u0438\\u0434\\u0430\\u043D\\u043D\\u043E \").concat(enemyName, \" \\u0441\\u043B\\u0443\\u0447\\u0430\\u0439\\u043D\\u043E \\u043D\\u0430\\u043D\\u0435\\u0441 \\u043C\\u043E\\u0449\\u043D\\u0435\\u0439\\u0448\\u0438\\u0439 \\u0443\\u0434\\u0430\\u0440. \\u0423\\u0440\\u043E\\u043D \\u0441\\u043E\\u0441\\u0442\\u0430\\u0432\\u0438\\u043B -\").concat(count, \", [ \").concat(current, \" / \").concat(total, \" ]\"), \"\".concat(name, \" \\u043F\\u043E\\u043F\\u0435\\u0440\\u0445\\u043D\\u0443\\u043B\\u0441\\u044F, \\u043D\\u043E \\u0432 \\u044D\\u0442\\u043E \\u0432\\u0440\\u0435\\u043C\\u044F \").concat(enemyName, \" \\u043D\\u0435\\u0445\\u043E\\u0442\\u044F \\u0440\\u0430\\u0437\\u0434\\u0440\\u043E\\u0431\\u0438\\u043B \\u043A\\u0443\\u043B\\u0430\\u043A\\u043E\\u043C <\\u0432\\u044B\\u0440\\u0435\\u0437\\u0430\\u043D\\u043D\\u043E \\u0446\\u0435\\u043D\\u0437\\u0443\\u0440\\u043E\\u0439> \\u043F\\u0440\\u043E\\u0442\\u0438\\u0432\\u043D\\u0438\\u043A\\u0430. \\u0423\\u0440\\u043E\\u043D \\u0441\\u043E\\u0441\\u0442\\u0430\\u0432\\u0438\\u043B -\").concat(count, \", [ \").concat(current, \" / \").concat(total, \" ]\"), \"\".concat(name, \" \\u0443\\u0434\\u0438\\u0432\\u0438\\u043B\\u0441\\u044F, \\u0430 \").concat(enemyName, \" \\u043F\\u043E\\u0448\\u0430\\u0442\\u043D\\u0443\\u0432\\u0448\\u0438\\u0441\\u044C \\u0432\\u043B\\u0435\\u043F\\u0438\\u043B \\u043F\\u043E\\u0434\\u043B\\u044B\\u0439 \\u0443\\u0434\\u0430\\u0440. \\u0423\\u0440\\u043E\\u043D \\u0441\\u043E\\u0441\\u0442\\u0430\\u0432\\u0438\\u043B -\").concat(count, \", [ \").concat(current, \" / \").concat(total, \" ]\"), \"\".concat(name, \" \\u0432\\u044B\\u0441\\u043C\\u043E\\u0440\\u043A\\u0430\\u043B\\u0441\\u044F, \\u043D\\u043E \\u043D\\u0435\\u043E\\u0436\\u0438\\u0434\\u0430\\u043D\\u043D\\u043E \").concat(enemyName, \" \\u043F\\u0440\\u043E\\u0432\\u0435\\u043B \\u0434\\u0440\\u043E\\u0431\\u044F\\u0449\\u0438\\u0439 \\u0443\\u0434\\u0430\\u0440. \\u0423\\u0440\\u043E\\u043D \\u0441\\u043E\\u0441\\u0442\\u0430\\u0432\\u0438\\u043B -\").concat(count, \", [ \").concat(current, \" / \").concat(total, \" ]\"), \"\".concat(name, \" \\u043F\\u043E\\u0448\\u0430\\u0442\\u043D\\u0443\\u043B\\u0441\\u044F, \\u0438 \\u0432\\u043D\\u0435\\u0437\\u0430\\u043F\\u043D\\u043E \\u043D\\u0430\\u0433\\u043B\\u044B\\u0439 \").concat(enemyName, \" \\u0431\\u0435\\u0441\\u043F\\u0440\\u0438\\u0447\\u0438\\u043D\\u043D\\u043E \\u0443\\u0434\\u0430\\u0440\\u0438\\u043B \\u0432 \\u043D\\u043E\\u0433\\u0443 \\u043F\\u0440\\u043E\\u0442\\u0438\\u0432\\u043D\\u0438\\u043A\\u0430. \\u0423\\u0440\\u043E\\u043D \\u0441\\u043E\\u0441\\u0442\\u0430\\u0432\\u0438\\u043B -\").concat(count, \", [ \").concat(current, \" / \").concat(total, \" ]\"), \"\".concat(name, \" \\u0440\\u0430\\u0441\\u0441\\u0442\\u0440\\u043E\\u0438\\u043B\\u0441\\u044F, \\u043A\\u0430\\u043A \\u0432\\u0434\\u0440\\u0443\\u0433, \\u043D\\u0435\\u043E\\u0436\\u0438\\u0434\\u0430\\u043D\\u043D\\u043E \").concat(enemyName, \" \\u0441\\u043B\\u0443\\u0447\\u0430\\u0439\\u043D\\u043E \\u0432\\u043B\\u0435\\u043F\\u0438\\u043B \\u0441\\u0442\\u043E\\u043F\\u043E\\u0439 \\u0432 \\u0436\\u0438\\u0432\\u043E\\u0442 \\u0441\\u043E\\u043F\\u0435\\u0440\\u043D\\u0438\\u043A\\u0430. \\u0423\\u0440\\u043E\\u043D \\u0441\\u043E\\u0441\\u0442\\u0430\\u0432\\u0438\\u043B -\").concat(count, \", [ \").concat(current, \" / \").concat(total, \" ]\"), \"\".concat(name, \" \\u043F\\u044B\\u0442\\u0430\\u043B\\u0441\\u044F \\u0447\\u0442\\u043E-\\u0442\\u043E \\u0441\\u043A\\u0430\\u0437\\u0430\\u0442\\u044C, \\u043D\\u043E \\u0432\\u0434\\u0440\\u0443\\u0433, \\u043D\\u0435\\u043E\\u0436\\u0438\\u0434\\u0430\\u043D\\u043D\\u043E \").concat(enemyName, \" \\u0441\\u043E \\u0441\\u043A\\u0443\\u043A\\u0438, \\u0440\\u0430\\u0437\\u0431\\u0438\\u043B \\u0431\\u0440\\u043E\\u0432\\u044C \\u0441\\u043E\\u043F\\u0435\\u0440\\u043D\\u0438\\u043A\\u0443. \\u0423\\u0440\\u043E\\u043D \\u0441\\u043E\\u0441\\u0442\\u0430\\u0432\\u0438\\u043B -\").concat(count, \", [ \").concat(current, \" / \").concat(total, \" ]\")];\n  var $divLogs = document.querySelector('#logs');\n  var $p = document.createElement('p');\n  $p.innerText = logs[random(logs.length) - 1];\n  $divLogs.insertBefore($p, $divLogs.children[0]);\n}\n\nfunction countBtn() {\n  var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;\n  var el = arguments.length > 1 ? arguments[1] : undefined;\n  var innerText = el.innerText;\n  el.innerText = \"\".concat(innerText, \" [\").concat(count, \"]\");\n  return function () {\n    count--;\n\n    if (count === 0) {\n      el.disabled = true;\n    }\n\n    el.innerText = \"\".concat(innerText, \" [\").concat(count, \"]\");\n    return count;\n  };\n}\n\n\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });