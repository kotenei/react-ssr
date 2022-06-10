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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/detail/style.scss":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./node_modules/sass-loader/dist/cjs.js!./src/pages/detail/style.scss ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".app-detail {\\n  display: -webkit-box;\\n  display: flex; }\\n  .app-detail__img {\\n    margin-right: 20px; }\\n  .app-detail__name {\\n    font-size: 35px;\\n    font-weight: 100;\\n    margin-top: -3px;\\n    margin-bottom: 20px; }\\n  .app-detail__content {\\n    line-height: 25px;\\n    width: 700px; }\\n  .app-detail__source {\\n    font-size: 20px;\\n    margin-left: 10px; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/pages/detail/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/home/style.scss":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./node_modules/sass-loader/dist/cjs.js!./src/pages/home/style.scss ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".app-list {\\n  display: -webkit-box;\\n  display: flex;\\n  flex-wrap: wrap;\\n  width: 100%;\\n  -webkit-box-align: center;\\n          align-items: center;\\n  align-content: center;\\n  list-style: none;\\n  margin: 0;\\n  padding: 0; }\\n  .app-list-item {\\n    width: 280px;\\n    text-align: center; }\\n    .app-list-item__info h3 {\\n      margin-top: 0;\\n      font-weight: 100; }\\n    .app-list-item img {\\n      cursor: pointer; }\\n    .app-list-item__name {\\n      color: #3C948B;\\n      cursor: pointer;\\n      white-space: nowrap;\\n      text-overflow: ellipsis;\\n      overflow: hidden;\\n      font-size: 20px; }\\n      .app-list-item__name:hover {\\n        text-decoration: underline; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/pages/home/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    for (var i = 0; i < modules.length; i++) {\n      var item = [].concat(modules[i]);\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/isomorphic-style-loader/insertCss.js":
/*!***********************************************************!*\
  !*** ./node_modules/isomorphic-style-loader/insertCss.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */\n\n\n\nvar inserted = {};\n\nfunction b64EncodeUnicode(str) {\n  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {\n    return String.fromCharCode(\"0x\" + p1);\n  }));\n}\n\nfunction removeCss(ids) {\n  ids.forEach(function (id) {\n    if (--inserted[id] <= 0) {\n      var elem = document.getElementById(id);\n\n      if (elem) {\n        elem.parentNode.removeChild(elem);\n      }\n    }\n  });\n}\n\nfunction insertCss(styles, _temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      _ref$replace = _ref.replace,\n      replace = _ref$replace === void 0 ? false : _ref$replace,\n      _ref$prepend = _ref.prepend,\n      prepend = _ref$prepend === void 0 ? false : _ref$prepend,\n      _ref$prefix = _ref.prefix,\n      prefix = _ref$prefix === void 0 ? 's' : _ref$prefix;\n\n  var ids = [];\n\n  for (var i = 0; i < styles.length; i++) {\n    var _styles$i = styles[i],\n        moduleId = _styles$i[0],\n        css = _styles$i[1],\n        media = _styles$i[2],\n        sourceMap = _styles$i[3];\n    var id = \"\" + prefix + moduleId + \"-\" + i;\n    ids.push(id);\n\n    if (inserted[id]) {\n      if (!replace) {\n        inserted[id]++;\n        continue;\n      }\n    }\n\n    inserted[id] = 1;\n    var elem = document.getElementById(id);\n    var create = false;\n\n    if (!elem) {\n      create = true;\n      elem = document.createElement('style');\n      elem.setAttribute('type', 'text/css');\n      elem.id = id;\n\n      if (media) {\n        elem.setAttribute('media', media);\n      }\n    }\n\n    var cssText = css;\n\n    if (sourceMap && typeof btoa === 'function') {\n      cssText += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + b64EncodeUnicode(JSON.stringify(sourceMap)) + \"*/\";\n      cssText += \"\\n/*# sourceURL=\" + sourceMap.file + \"?\" + id + \"*/\";\n    }\n\n    if ('textContent' in elem) {\n      elem.textContent = cssText;\n    } else {\n      elem.styleSheet.cssText = cssText;\n    }\n\n    if (create) {\n      if (prepend) {\n        document.head.insertBefore(elem, document.head.childNodes[0]);\n      } else {\n        document.head.appendChild(elem);\n      }\n    }\n  }\n\n  return removeCss.bind(null, ids);\n}\n\nmodule.exports = insertCss;\n//# sourceMappingURL=insertCss.js.map\n\n\n//# sourceURL=webpack:///./node_modules/isomorphic-style-loader/insertCss.js?");

/***/ }),

/***/ "./src/components/withStyle/index.js":
/*!*******************************************!*\
  !*** ./src/components/withStyle/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst withStyles = (Compt, styles) => {\n  class WithStyleComponent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n    constructor(props) {\n      super(props);\n\n      if (props.staticContext && props.staticContext.css && styles && styles._getCss) {\n        props.staticContext.css.push(styles._getCss());\n      }\n    }\n\n    render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Compt, this.props);\n    }\n\n  }\n\n  WithStyleComponent.loadData = Compt.loadData;\n  return WithStyleComponent;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (withStyles);\n\n//# sourceURL=webpack:///./src/components/withStyle/index.js?");

/***/ }),

/***/ "./src/data/index.js":
/*!***************************!*\
  !*** ./src/data/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  score: 17.609339,\n  show: {\n    id: 44813,\n    url: \"http://www.tvmaze.com/shows/44813/the-snow-spider\",\n    name: \"The Snow Spider\",\n    type: \"Scripted\",\n    language: \"English\",\n    genres: [\"Drama\", \"Fantasy\"],\n    status: \"In Development\",\n    runtime: 30,\n    premiered: null,\n    officialSite: null,\n    schedule: {\n      time: \"\",\n      days: []\n    },\n    rating: {\n      average: null\n    },\n    weight: 0,\n    network: {\n      id: 60,\n      name: \"CBBC\",\n      country: {\n        name: \"United Kingdom\",\n        code: \"GB\",\n        timezone: \"Europe/London\"\n      }\n    },\n    webChannel: null,\n    externals: {\n      tvrage: null,\n      thetvdb: null,\n      imdb: null\n    },\n    image: {\n      medium: \"http://static.tvmaze.com/uploads/images/medium_portrait/218/545404.jpg\",\n      original: \"http://static.tvmaze.com/uploads/images/original_untouched/218/545404.jpg\"\n    },\n    summary: \"<p><b>The Snow Spider</b> opens with Gwyn Griffiths gloomily awaiting the day of his ninth birthday, an occasion marred once again by the reminder of his missing sister Bethan, who disappeared four years earlier. Little does he know his life is about to be changed forever.</p>\",\n    updated: 1572555863,\n    _links: {\n      self: {\n        href: \"http://api.tvmaze.com/shows/44813\"\n      }\n    }\n  }\n}, {\n  score: 17.02285,\n  show: {\n    id: 1611,\n    url: \"http://www.tvmaze.com/shows/1611/spider-man\",\n    name: \"Spider-Man\",\n    type: \"Animation\",\n    language: \"English\",\n    genres: [\"Action\", \"Adventure\", \"Science-Fiction\"],\n    status: \"Ended\",\n    runtime: 30,\n    premiered: \"1994-11-19\",\n    officialSite: \"http://marvel.com/news/tv/14437/watch_the_complete_spider-man_1994_series\",\n    schedule: {\n      time: \"10:00\",\n      days: [\"Saturday\"]\n    },\n    rating: {\n      average: 7.9\n    },\n    weight: 71,\n    network: {\n      id: 4,\n      name: \"FOX\",\n      country: {\n        name: \"United States\",\n        code: \"US\",\n        timezone: \"America/New_York\"\n      }\n    },\n    webChannel: null,\n    externals: {\n      tvrage: 5294,\n      thetvdb: 73750,\n      imdb: \"tt0112175\"\n    },\n    image: {\n      medium: \"http://static.tvmaze.com/uploads/images/medium_portrait/8/21945.jpg\",\n      original: \"http://static.tvmaze.com/uploads/images/original_untouched/8/21945.jpg\"\n    },\n    summary: \"<p><b>Spider-Man</b> (1994) tells the story of a 19-year-old Peter Parker in his first year at Empire State University, and his alter-ego Spider-Man. The show features Spider-Man's classic villains, including the Kingpin, the Green Goblin, the Lizard, the Scorpion, Doctor Octopus, Mysterio, the Rhino, the Shocker, The Vulture and the Chameleon, as well as more recent villains such as Venom, Carnage and the Hobgoblin.</p>\",\n    updated: 1577612009,\n    _links: {\n      self: {\n        href: \"http://api.tvmaze.com/shows/1611\"\n      },\n      previousepisode: {\n        href: \"http://api.tvmaze.com/episodes/141696\"\n      }\n    }\n  }\n}, {\n  score: 16.133402,\n  show: {\n    id: 4107,\n    url: \"http://www.tvmaze.com/shows/4107/spider-man\",\n    name: \"Spider-Man\",\n    type: \"Animation\",\n    language: \"English\",\n    genres: [\"Action\", \"Science-Fiction\"],\n    status: \"Ended\",\n    runtime: 30,\n    premiered: \"1967-09-09\",\n    officialSite: null,\n    schedule: {\n      time: \"\",\n      days: []\n    },\n    rating: {\n      average: null\n    },\n    weight: 0,\n    network: {\n      id: 3,\n      name: \"ABC\",\n      country: {\n        name: \"United States\",\n        code: \"US\",\n        timezone: \"America/New_York\"\n      }\n    },\n    webChannel: null,\n    externals: {\n      tvrage: 5295,\n      thetvdb: 72739,\n      imdb: \"tt0061301\"\n    },\n    image: {\n      medium: \"http://static.tvmaze.com/uploads/images/medium_portrait/19/49914.jpg\",\n      original: \"http://static.tvmaze.com/uploads/images/original_untouched/19/49914.jpg\"\n    },\n    summary: \"<p>First airing on the ABC television network in 1967, the series revolves around the scientific-minded teenager Peter Parker who, after being bitten by a radioactive spider, develops amazing strength and spider-like powers. He decides to become a crime-fighting, costumed superhero; all the while dealing with his personal problems and the insecurities resulting from being a teenager.</p>\",\n    updated: 1494693675,\n    _links: {\n      self: {\n        href: \"http://api.tvmaze.com/shows/4107\"\n      },\n      previousepisode: {\n        href: \"http://api.tvmaze.com/episodes/262692\"\n      }\n    }\n  }\n}, {\n  score: 16.089615,\n  show: {\n    id: 28954,\n    url: \"http://www.tvmaze.com/shows/28954/spider\",\n    name: \"Spider!\",\n    type: \"Animation\",\n    language: \"English\",\n    genres: [\"Children\", \"Music\"],\n    status: \"Ended\",\n    runtime: 5,\n    premiered: \"1991-09-26\",\n    officialSite: null,\n    schedule: {\n      time: \"\",\n      days: []\n    },\n    rating: {\n      average: null\n    },\n    weight: 0,\n    network: {\n      id: 12,\n      name: \"BBC One\",\n      country: {\n        name: \"United Kingdom\",\n        code: \"GB\",\n        timezone: \"Europe/London\"\n      }\n    },\n    webChannel: null,\n    externals: {\n      tvrage: null,\n      thetvdb: 259439,\n      imdb: \"tt1239147\"\n    },\n    image: {\n      medium: \"http://static.tvmaze.com/uploads/images/medium_portrait/115/288436.jpg\",\n      original: \"http://static.tvmaze.com/uploads/images/original_untouched/115/288436.jpg\"\n    },\n    summary: \"<p><b>Spider!</b> is a musical children's television series made by Hibbert Ralph Entertainment for the BBC in 1991. It follows the adventures of a spider, the protagonist, and a young boy. The stories are told through song, performed by Jeff Stevenson with his children, Casey and Holly, singing backing vocals.</p>\",\n    updated: 1496680897,\n    _links: {\n      self: {\n        href: \"http://api.tvmaze.com/shows/28954\"\n      },\n      previousepisode: {\n        href: \"http://api.tvmaze.com/episodes/1203882\"\n      }\n    }\n  }\n}, {\n  score: 14.991898,\n  show: {\n    id: 21928,\n    url: \"http://www.tvmaze.com/shows/21928/marvels-spider-man\",\n    name: \"Marvel's Spider-Man\",\n    type: \"Animation\",\n    language: \"English\",\n    genres: [\"Drama\", \"Action\", \"Science-Fiction\"],\n    status: \"Running\",\n    runtime: 30,\n    premiered: \"2017-08-19\",\n    officialSite: \"https://disneynow.com/shows/marvels-spider-man\",\n    schedule: {\n      time: \"21:30\",\n      days: [\"Sunday\"]\n    },\n    rating: {\n      average: 8.1\n    },\n    weight: 86,\n    network: {\n      id: 25,\n      name: \"Disney XD\",\n      country: {\n        name: \"United States\",\n        code: \"US\",\n        timezone: \"America/New_York\"\n      }\n    },\n    webChannel: {\n      id: 83,\n      name: \"DisneyNOW\",\n      country: {\n        name: \"United States\",\n        code: \"US\",\n        timezone: \"America/New_York\"\n      }\n    },\n    externals: {\n      tvrage: null,\n      thetvdb: 329456,\n      imdb: \"tt6135682\"\n    },\n    image: {\n      medium: \"http://static.tvmaze.com/uploads/images/medium_portrait/208/522455.jpg\",\n      original: \"http://static.tvmaze.com/uploads/images/original_untouched/208/522455.jpg\"\n    },\n    summary: \"<p><b>Marvel's Spider-Man</b> tells the story of an unsure (but courageous) teen who has to figure out how to be a super hero from the very beginning.</p>\",\n    updated: 1577108033,\n    _links: {\n      self: {\n        href: \"http://api.tvmaze.com/shows/21928\"\n      },\n      previousepisode: {\n        href: \"http://api.tvmaze.com/episodes/1746928\"\n      }\n    }\n  }\n}, {\n  score: 12.697378,\n  show: {\n    id: 18515,\n    url: \"http://www.tvmaze.com/shows/18515/spider-woman\",\n    name: \"Spider-Woman\",\n    type: \"Animation\",\n    language: \"English\",\n    genres: [\"Action\", \"Adventure\"],\n    status: \"Ended\",\n    runtime: 30,\n    premiered: \"1979-09-22\",\n    officialSite: null,\n    schedule: {\n      time: \"11:00\",\n      days: [\"Saturday\"]\n    },\n    rating: {\n      average: null\n    },\n    weight: 0,\n    network: {\n      id: 3,\n      name: \"ABC\",\n      country: {\n        name: \"United States\",\n        code: \"US\",\n        timezone: \"America/New_York\"\n      }\n    },\n    webChannel: null,\n    externals: {\n      tvrage: null,\n      thetvdb: 77843,\n      imdb: \"tt0197911\"\n    },\n    image: {\n      medium: \"http://static.tvmaze.com/uploads/images/medium_portrait/63/157988.jpg\",\n      original: \"http://static.tvmaze.com/uploads/images/original_untouched/63/157988.jpg\"\n    },\n    summary: \"<p><i>Spider-Woman</i> was an animated series, based on the Marvel Comics character. The series aired on ABC from 1979-1980.</p>\",\n    updated: 1466463114,\n    _links: {\n      self: {\n        href: \"http://api.tvmaze.com/shows/18515\"\n      },\n      previousepisode: {\n        href: \"http://api.tvmaze.com/episodes/841254\"\n      }\n    }\n  }\n}, {\n  score: 12.261898,\n  show: {\n    id: 41312,\n    url: \"http://www.tvmaze.com/shows/41312/spider-man\",\n    name: \"Spider-Man\",\n    type: \"Scripted\",\n    language: \"Japanese\",\n    genres: [\"Action\", \"Adventure\", \"Science-Fiction\"],\n    status: \"Ended\",\n    runtime: 30,\n    premiered: \"1978-05-17\",\n    officialSite: null,\n    schedule: {\n      time: \"19:30\",\n      days: [\"Wednesday\"]\n    },\n    rating: {\n      average: null\n    },\n    weight: 0,\n    network: {\n      id: 76,\n      name: \"TV Tokyo\",\n      country: {\n        name: \"Japan\",\n        code: \"JP\",\n        timezone: \"Asia/Tokyo\"\n      }\n    },\n    webChannel: null,\n    externals: {\n      tvrage: null,\n      thetvdb: 147681,\n      imdb: \"tt0185116\"\n    },\n    image: {\n      medium: \"http://static.tvmaze.com/uploads/images/medium_portrait/187/468372.jpg\",\n      original: \"http://static.tvmaze.com/uploads/images/original_untouched/187/468372.jpg\"\n    },\n    summary: \"<p>Motorcycle racer Takuya Yamashiro gains amazing abilities from the last survivor of the planet Spider and uses them and the giant robot Leopardon to battle Professor Monster and his evil Iron Cross Army as Spider-man!</p>\",\n    updated: 1552253412,\n    _links: {\n      self: {\n        href: \"http://api.tvmaze.com/shows/41312\"\n      },\n      previousepisode: {\n        href: \"http://api.tvmaze.com/episodes/1620912\"\n      }\n    }\n  }\n}, {\n  score: 12.261898,\n  show: {\n    id: 25740,\n    url: \"http://www.tvmaze.com/shows/25740/spider-riders\",\n    name: \"Spider Riders\",\n    type: \"Animation\",\n    language: \"Japanese\",\n    genres: [\"Comedy\", \"Action\", \"Anime\", \"Fantasy\"],\n    status: \"Ended\",\n    runtime: 30,\n    premiered: \"2006-03-25\",\n    officialSite: null,\n    schedule: {\n      time: \"\",\n      days: []\n    },\n    rating: {\n      average: null\n    },\n    weight: 0,\n    network: {\n      id: 76,\n      name: \"TV Tokyo\",\n      country: {\n        name: \"Japan\",\n        code: \"JP\",\n        timezone: \"Asia/Tokyo\"\n      }\n    },\n    webChannel: null,\n    externals: {\n      tvrage: null,\n      thetvdb: 186311,\n      imdb: \"tt0813896\"\n    },\n    image: {\n      medium: \"http://static.tvmaze.com/uploads/images/medium_portrait/100/251246.jpg\",\n      original: \"http://static.tvmaze.com/uploads/images/original_untouched/100/251246.jpg\"\n    },\n    summary: \"<p>Eleven-year-old Hunter Steel searches for the legendary inner world by following the instructions in his grandfather's journal. He enters a cave where he finds a mysterious manacle that attaches itself to him. A spider startles Hunter, who falls into a hole to the center of the Earth and into the subterranean world of Arachna. Here, he discovers a small group of elite warriors struggling to survive and to save Arachna from the attack of giant insect mutants. The warriors are children, each fighting with the help of their own 10 ft (3.0 m) battle spiders.</p>\",\n    updated: 1488476173,\n    _links: {\n      self: {\n        href: \"http://api.tvmaze.com/shows/25740\"\n      },\n      previousepisode: {\n        href: \"http://api.tvmaze.com/episodes/1087628\"\n      }\n    }\n  }\n}, {\n  score: 12.261898,\n  show: {\n    id: 32686,\n    url: \"http://www.tvmaze.com/shows/32686/spider-man\",\n    name: \"Spider-Man\",\n    type: \"Animation\",\n    language: \"English\",\n    genres: [\"Action\", \"Science-Fiction\"],\n    status: \"Ended\",\n    runtime: 22,\n    premiered: \"1981-09-12\",\n    officialSite: \"http://spider-man.toonzone.net\",\n    schedule: {\n      time: \"\",\n      days: [\"Saturday\"]\n    },\n    rating: {\n      average: null\n    },\n    weight: 0,\n    network: {\n      id: 72,\n      name: \"Syndication\",\n      country: {\n        name: \"United States\",\n        code: \"US\",\n        timezone: \"America/New_York\"\n      }\n    },\n    webChannel: null,\n    externals: {\n      tvrage: null,\n      thetvdb: 77686,\n      imdb: \"tt0081938\"\n    },\n    image: {\n      medium: \"http://static.tvmaze.com/uploads/images/medium_portrait/131/328110.jpg\",\n      original: \"http://static.tvmaze.com/uploads/images/original_untouched/131/328110.jpg\"\n    },\n    summary: \"<p>The web slinging superhero battles crime in New York City.</p>\",\n    updated: 1507989495,\n    _links: {\n      self: {\n        href: \"http://api.tvmaze.com/shows/32686\"\n      },\n      previousepisode: {\n        href: \"http://api.tvmaze.com/episodes/1331449\"\n      }\n    }\n  }\n}, {\n  score: 12.18898,\n  show: {\n    id: 4490,\n    url: \"http://www.tvmaze.com/shows/4490/the-spectacular-spider-man\",\n    name: \"The Spectacular Spider-Man\",\n    type: \"Animation\",\n    language: \"English\",\n    genres: [\"Science-Fiction\"],\n    status: \"Ended\",\n    runtime: 30,\n    premiered: \"2008-03-08\",\n    officialSite: null,\n    schedule: {\n      time: \"\",\n      days: []\n    },\n    rating: {\n      average: null\n    },\n    weight: 39,\n    network: {\n      id: 5,\n      name: \"The CW\",\n      country: {\n        name: \"United States\",\n        code: \"US\",\n        timezone: \"America/New_York\"\n      }\n    },\n    webChannel: null,\n    externals: {\n      tvrage: 15237,\n      thetvdb: 81494,\n      imdb: \"tt0976192\"\n    },\n    image: {\n      medium: \"http://static.tvmaze.com/uploads/images/medium_portrait/20/51967.jpg\",\n      original: \"http://static.tvmaze.com/uploads/images/original_untouched/20/51967.jpg\"\n    },\n    summary: \"<p>The line of Super Villains determined to take down Spidey seems never ending. There's Venom, Electro, Dr. Octopus, Sandman and Rhino - just to name a few. These criminals are almost more than he can handle and the stress would be enough to send a lesser Super Hero over the edge, but it's all in a day's work for <b>The Spectacular Spider-Man</b>™</p>\",\n    updated: 1547430772,\n    _links: {\n      self: {\n        href: \"http://api.tvmaze.com/shows/4490\"\n      },\n      previousepisode: {\n        href: \"http://api.tvmaze.com/episodes/291180\"\n      }\n    }\n  }\n}]);\n\n//# sourceURL=webpack:///./src/data/index.js?");

/***/ }),

/***/ "./src/pages/detail/actions.js":
/*!*************************************!*\
  !*** ./src/pages/detail/actions.js ***!
  \*************************************/
/*! exports provided: SET_DETAIL, setDetail, getDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_DETAIL\", function() { return SET_DETAIL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setDetail\", function() { return setDetail; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDetail\", function() { return getDetail; });\n/* harmony import */ var _service_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/api */ \"./src/service/api.js\");\n\nconst SET_DETAIL = \"SET_DETAIL\";\nconst setDetail = data => {\n  return {\n    type: SET_DETAIL,\n    payload: data\n  };\n};\nfunction getDetail(params) {\n  return dispatch => {\n    return _service_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getDetail(params).then(data => {\n      dispatch(setDetail(data));\n    });\n  };\n}\n\n//# sourceURL=webpack:///./src/pages/detail/actions.js?");

/***/ }),

/***/ "./src/pages/detail/index.js":
/*!***********************************!*\
  !*** ./src/pages/detail/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ \"./src/pages/detail/actions.js\");\n/* harmony import */ var _components_withStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/withStyle */ \"./src/components/withStyle/index.js\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ \"./src/pages/detail/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst prefixCls = \"app-detail\";\n\nconst Detail = props => {\n  const {\n    match,\n    getDetail\n  } = props;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const {\n      params\n    } = match;\n\n    if (!props.detail || props.detail.id !== Number(params.id)) {\n      getDetail({\n        id: params.id\n      });\n    }\n  }, []);\n  const {\n    detail\n  } = props;\n  const image = detail.image || {};\n  const network = detail.network || {};\n\n  if (Object.keys(detail).length === 0) {\n    return null;\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: prefixCls\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: `${prefixCls}__img`\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: `${image.medium}`\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: `${prefixCls}__info`\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n    className: `${prefixCls}__name`\n  }, detail.name, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: `${prefixCls}__source`\n  }, \"(\", network.name, \")\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: `${prefixCls}__content`,\n    dangerouslySetInnerHTML: {\n      __html: detail.summary\n    }\n  })));\n};\n\nDetail.loadData = (store, query) => {\n  return store.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__[\"getDetail\"])({\n    id: query.id\n  }));\n};\n\nconst mapStateToProps = state => {\n  return {\n    detail: state.detail.info\n  };\n};\n\nconst mapDispatchToProps = dispatch => {\n  return {\n    getDetail: params => dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__[\"getDetail\"])(params))\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Object(_components_withStyle__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Detail, _style_scss__WEBPACK_IMPORTED_MODULE_4___default.a)));\n\n//# sourceURL=webpack:///./src/pages/detail/index.js?");

/***/ }),

/***/ "./src/pages/detail/reducer.js":
/*!*************************************!*\
  !*** ./src/pages/detail/reducer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ \"./src/pages/detail/actions.js\");\n\nconst initialState = {\n  info: {}\n};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"SET_DETAIL\"]:\n      return { ...state,\n        info: action.payload\n      };\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n//# sourceURL=webpack:///./src/pages/detail/reducer.js?");

/***/ }),

/***/ "./src/pages/detail/style.scss":
/*!*************************************!*\
  !*** ./src/pages/detail/style.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/detail/style.scss\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/pages/detail/style.scss?");

/***/ }),

/***/ "./src/pages/home/actions.js":
/*!***********************************!*\
  !*** ./src/pages/home/actions.js ***!
  \***********************************/
/*! exports provided: SET_LIST, setList, getList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_LIST\", function() { return SET_LIST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setList\", function() { return setList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getList\", function() { return getList; });\n/* harmony import */ var _service_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/api */ \"./src/service/api.js\");\n\nconst SET_LIST = \"SET_LIST\";\nconst setList = data => {\n  return {\n    type: SET_LIST,\n    payload: data\n  };\n};\nfunction getList() {\n  return (dispatch, getState, axiosInstance) => {\n    return _service_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getList().then(data => {\n      dispatch(setList(data));\n    });\n  };\n}\n\n//# sourceURL=webpack:///./src/pages/home/actions.js?");

/***/ }),

/***/ "./src/pages/home/index.js":
/*!*********************************!*\
  !*** ./src/pages/home/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ \"./src/pages/home/actions.js\");\n/* harmony import */ var _components_withStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/withStyle */ \"./src/components/withStyle/index.js\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ \"./src/pages/home/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst prefixCls = \"app-list\";\n\nconst Item = props => {\n  const {\n    data\n  } = props;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    className: `${prefixCls}-item`\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: `/detail/${data.id}`\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: data.image.medium\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: `${prefixCls}-item__info`\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: `/detail/${data.id}`\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: `${prefixCls}-item__name`,\n    title: data.name\n  }, data.name)))));\n};\n\nconst Home = props => {\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (!props.list.length) {\n      props.getList();\n    }\n  }, []);\n  const {\n    list\n  } = props;\n  const content = list.map(item => {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Item, {\n      key: item.show.id,\n      data: item.show\n    });\n  });\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: prefixCls\n  }, content);\n};\n\nHome.loadData = store => {\n  return store.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__[\"getList\"])());\n};\n\nconst mapStateToProps = state => {\n  return {\n    list: state.home.list\n  };\n};\n\nconst mapDispatchToProps = dispatch => {\n  return {\n    getList: () => dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__[\"getList\"])())\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Object(_components_withStyle__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Home, _style_scss__WEBPACK_IMPORTED_MODULE_5___default.a)));\n\n//# sourceURL=webpack:///./src/pages/home/index.js?");

/***/ }),

/***/ "./src/pages/home/reducer.js":
/*!***********************************!*\
  !*** ./src/pages/home/reducer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ \"./src/pages/home/actions.js\");\n\nconst initialState = {\n  list: []\n};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"SET_LIST\"]:\n      return { ...state,\n        list: action.payload\n      };\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n//# sourceURL=webpack:///./src/pages/home/reducer.js?");

/***/ }),

/***/ "./src/pages/home/style.scss":
/*!***********************************!*\
  !*** ./src/pages/home/style.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/home/style.scss\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/pages/home/style.scss?");

/***/ }),

/***/ "./src/pages/notFound/index.js":
/*!*************************************!*\
  !*** ./src/pages/notFound/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst NotFound = props => {\n  if (props.staticContext) {\n    props.staticContext.status = 404;\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"404 : Not Found\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotFound);\n\n//# sourceURL=webpack:///./src/pages/notFound/index.js?");

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/home */ \"./src/pages/home/index.js\");\n/* harmony import */ var _pages_detail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/detail */ \"./src/pages/detail/index.js\");\n/* harmony import */ var _pages_notFound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/notFound */ \"./src/pages/notFound/index.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  path: \"/\",\n  exact: true,\n  component: _pages_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  loadData: _pages_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"].loadData\n}, {\n  path: \"/Detail/:id\",\n  exact: true,\n  component: _pages_detail__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  loadData: _pages_detail__WEBPACK_IMPORTED_MODULE_2__[\"default\"].loadData\n}, {\n  path: \"*\",\n  component: _pages_notFound__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n}]);\n\n//# sourceURL=webpack:///./src/routes/index.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa */ \"koa\");\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa-static */ \"koa-static\");\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa_static__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! koa-router */ \"koa-router\");\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var koa_server_http_proxy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! koa-server-http-proxy */ \"koa-server-http-proxy\");\n/* harmony import */ var koa_server_http_proxy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(koa_server_http_proxy__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ \"./src/server/utils.js\");\n\n\n\n\n\nconst server = new koa__WEBPACK_IMPORTED_MODULE_0___default.a();\nconst router = new koa_router__WEBPACK_IMPORTED_MODULE_2___default.a();\nserver.use(koa_static__WEBPACK_IMPORTED_MODULE_1___default()(\"./src/public\")); // server.use(\n//   proxy(\"/api\", {\n//     target: \"http://api.tvmaze.com\",\n//     pathRewrite: { '^/api': '' },\n//     changeOrigin: true\n//   })\n// );\n\nrouter.get(\"/detail/:id\", async ctx => {\n  await Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"requestHandle\"])(ctx, ctx.params);\n});\nrouter.get(\"*\", async ctx => {\n  await Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"requestHandle\"])(ctx);\n});\nserver.use(router.routes());\nserver.listen(8088);\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/utils.js":
/*!*****************************!*\
  !*** ./src/server/utils.js ***!
  \*****************************/
/*! exports provided: requestHandle, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"requestHandle\", function() { return requestHandle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store */ \"./src/store/index.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../routes */ \"./src/routes/index.js\");\n\n\n\n\n\n\n\nconst requestHandle = async (ctx, query) => {\n  const store = Object(_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n  const matchedRoutes = Object(react_router_config__WEBPACK_IMPORTED_MODULE_4__[\"matchRoutes\"])(_routes__WEBPACK_IMPORTED_MODULE_6__[\"default\"], ctx.url);\n  const context = {\n    css: []\n  };\n  const promises = [];\n  matchedRoutes.forEach(matchRoute => {\n    if (matchRoute.route.loadData) {\n      promises.push(matchRoute.route.loadData(store, query));\n    }\n  });\n  await Promise.all(promises);\n  ctx.body = render(ctx.url, store, _routes__WEBPACK_IMPORTED_MODULE_6__[\"default\"], context);\n\n  if (context.status === 404) {\n    ctx.status = 404;\n  }\n};\nconst render = (url, store, routes, context) => {\n  const content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"Provider\"], {\n    store: store\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], {\n    location: url,\n    context: context\n  }, Object(react_router_config__WEBPACK_IMPORTED_MODULE_4__[\"renderRoutes\"])(routes))));\n  const cssStr = context.css.length ? context.css.join(\"\\n\") : \"\";\n  return `\n        <html>\n            <head>\n                <title>React SSR</title>\n                <style>${cssStr}</style>\n            </head>\n            <body>\n                <div id=\"root\">${content}</div>\n            </body>\n            <script>\n              window.context={\n                state:${JSON.stringify(store.getState())}\n              }\n            </script>\n            <script src=\"/index.js\"></script>\n        </html>\n        `;\n};\n\n//# sourceURL=webpack:///./src/server/utils.js?");

/***/ }),

/***/ "./src/service/api.js":
/*!****************************!*\
  !*** ./src/service/api.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data */ \"./src/data/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst getList = () => {\n  return new Promise((resolve, reject) => {\n    // setTimeout(() => {\n    //     resolve(data);\n    // }, 200);\n    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(\"http://api.tvmaze.com/search/shows?q=spider\").then(res => {\n      resolve(res.data);\n    });\n  });\n};\n\nconst getDetail = params => {\n  return new Promise((resolve, reject) => {\n    // setTimeout(() => {\n    //   let item = data.find(i => i.show.id == params.id);\n    //   resolve(item.show);\n    // }, 300);\n    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`http://api.tvmaze.com/shows/${params.id}`).then(res => {\n      resolve(res.data);\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  getList,\n  getDetail\n});\n\n//# sourceURL=webpack:///./src/service/api.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_home_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/home/reducer */ \"./src/pages/home/reducer.js\");\n/* harmony import */ var _pages_detail_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/detail/reducer */ \"./src/pages/detail/reducer.js\");\n\n\n\n\nconst isServer = typeof window === \"undefined\";\nconst reducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  home: _pages_home_reducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  detail: _pages_detail_reducer__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n});\n\nconst configureStore = (initialState = {}) => {\n  let defaultState = isServer ? {} : window.context && window.context.state;\n  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(reducers, { ...initialState,\n    ...defaultState\n  }, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a));\n  return store;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (configureStore);\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa\");\n\n//# sourceURL=webpack:///external_%22koa%22?");

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-router\");\n\n//# sourceURL=webpack:///external_%22koa-router%22?");

/***/ }),

/***/ "koa-server-http-proxy":
/*!****************************************!*\
  !*** external "koa-server-http-proxy" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-server-http-proxy\");\n\n//# sourceURL=webpack:///external_%22koa-server-http-proxy%22?");

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-static\");\n\n//# sourceURL=webpack:///external_%22koa-static%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });