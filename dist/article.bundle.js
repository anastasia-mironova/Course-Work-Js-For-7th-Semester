/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([312,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(46);
module.exports = __webpack_require__(323);


/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./styles/header.scss
var header = __webpack_require__(26);

// EXTERNAL MODULE: ./styles/footer.scss
var footer = __webpack_require__(27);

// EXTERNAL MODULE: ./styles/article_body.scss
var article_body = __webpack_require__(313);

// CONCATENATED MODULE: ./assets/img/slide1.png
/* harmony default export */ var slide1 = (__webpack_require__.p + "e91ff99de4a972c1a6cb11721ea894d0.png");
// CONCATENATED MODULE: ./assets/img/slide2.jpg
/* harmony default export */ var slide2 = (__webpack_require__.p + "01bbc5eecb0564f0edf24932434b4cac.jpg");
// CONCATENATED MODULE: ./assets/img/slide3.jpg
/* harmony default export */ var slide3 = (__webpack_require__.p + "d0aa98728ab19e90750b088d418fe68b.jpg");
// CONCATENATED MODULE: ./assets/img/slide4.jpg
/* harmony default export */ var slide4 = (__webpack_require__.p + "663b2ba9d5022c0a35c0d161df6a5cdf.jpg");
// CONCATENATED MODULE: ./assets/img/slide5.jpg
/* harmony default export */ var slide5 = (__webpack_require__.p + "5f822cd4e00560d30afbd6f2c3284a3c.jpg");
// CONCATENATED MODULE: ./article.js








var pictures = [slide1, slide2, slide3, slide4, slide5];
var content = document.getElementById("slider");

for (var i = 0; i < pictures.length; i++) {
  var div = document.createElement("div");
  div.className = "slide";
  content.append(div);
  var imageItem = document.createElement("img");
  var numPicture = document.createElement("span");
  numPicture.innerHTML = String(i);
  numPicture.style.visibility = "hidden";
  imageItem.src = pictures[i];
  div.append(imageItem);
  div.append(numPicture);
}

var slides = document.getElementsByClassName("slide");
var activeNode = 0;
slides[0].lastElementChild.id = "activeSlide";

function goNext(currentNode) {
  var activeNode = currentNode;

  if (activeNode === slides.length - 1) {
    activeNode = 0;
    slides[activeNode].lastElementChild.id = "activeSlide";
    slides[slides.length - 1].lastElementChild.id = "";
  } else {
    activeNode += 1;
    slides[activeNode - 1].lastElementChild.id = "";
    slides[activeNode].lastElementChild.id = "activeSlide";
  }

  return activeNode;
}

function goBack(currentNode) {
  var activeNode = currentNode;

  if (activeNode === 0) {
    activeNode = slides.length - 1;
    slides[activeNode].lastElementChild.id = "activeSlide";
    slides[0].lastElementChild.id = "";
  } else {
    activeNode -= 1;
    slides[activeNode + 1].lastElementChild.id = "";
    slides[activeNode].lastElementChild.id = "activeSlide";
  }

  return activeNode;
}

function showSlides(activeSlide) {
  for (var _i = 0; _i < slides.length; _i++) {
    slides[_i].style.display = "none";
  }

  slides[activeSlide].style.display = "block";
}

function hundleNext() {
  activeNode = goNext(activeNode);
  showSlides(activeNode);
}

function hundleBack() {
  activeNode = goBack(activeNode);
  showSlides(activeNode);
}

showSlides(0);
var nextButton = document.getElementById("next");
nextButton.addEventListener("click", hundleNext);
var backButton = document.getElementById("back");
backButton.addEventListener("click", hundleBack);

/***/ })

/******/ });