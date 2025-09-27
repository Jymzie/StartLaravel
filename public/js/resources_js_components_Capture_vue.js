"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Capture_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Capture.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Capture.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      isPhotoTaken: false,
      imageName: "TRRYY",
      ischangeorientation: "",
      isRecording: false,
      photocount: 0,
      window: {
        width: "",
        height: ""
      },
      Fullscreen: false
    };
  },
  created: function created() {
    this.window = {
      width: screen.width,
      height: screen.height,
      orientation: screen.width > screen.height ? "Landscape" : "Portrait"
    };
    this.getPhotocount();
    this.createCamera();
  },
  mounted: function mounted() {
    this.detectOrientation();
    window.addEventListener("resize", this.detectOrientation);
  },
  beforeUnmount: function beforeUnmount() {
    window.removeEventListener("resize", this.detectOrientation);
  },
  beforeDestroy: function beforeDestroy() {
    this.stopCameraStream('yes');
  },
  watch: {
    ischangeorientation: function ischangeorientation(val, val1) {
      if (val != val1) {
        this.isPhotoTaken = true;
        this.isPhotoTaken = false;
      }
    }
  },
  methods: {
    detectOrientation: function detectOrientation() {
      var isPortrait = window.matchMedia("(orientation: portrait)").matches;
      this.$emit("orientationChange", isPortrait);
      this.window = {
        width: screen.width,
        height: screen.height,
        orientation: screen.width > screen.height ? "Landscape" : "Portrait"
      };
      this.ischangeorientation = isPortrait;
    },
    mRecord: function mRecord() {
      this.isRecording = !this.isRecording;
    },
    mCapture: function mCapture() {
      this.isPhotoTaken = !this.isPhotoTaken;
      var ctx = this.$refs.canvas.getContext("2d");
      if (this.Fullscreen == true) {
        ctx = this.$refs.canvasfull.getContext("2d");
      }
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      var newWidth = this.window.width,
        newHeight = this.window.height;
      ctx.canvas.width = newWidth;
      ctx.canvas.height = newHeight;
      ctx.drawImage(this.$refs.camera, 0, 0, ctx.canvas.width, ctx.canvas.height);
    },
    savePicture: function savePicture() {
      var _this = this;
      var canvas = document.getElementById("photoTaken");
      if (this.Fullscreen == true) canvas = document.getElementById("photoTakenfull");
      canvas.toBlob(function (blob) {
        var paramsObj = {};
        paramsObj.title = "image";
        paramsObj.folder = "Capture";
        var file = new File([blob], _this.imageName + ".jpg");
        var formData = new FormData();
        formData.append("file", file);
        formData.append("params", JSON.stringify(paramsObj));
        axios({
          method: "POST",
          url: "api/capture",
          data: formData,
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }).then(function (res) {
          _this.getPhotocount();
          _this.stopCameraStream();
        })["catch"](function (err) {
          var errorval = 500;
          if (err.response != null) {
            errorval = err.response.status;
          } else console.log(err);
          _this.$store.dispatch('setStatusCode', errorval);
          _this.$router.push('/error/' + errorval);
        });
      });
    },
    createCamera: function createCamera(val) {
      var _this2 = this;
      if (val) {
        this.Fullscreen = true;
      }
      var constraints = window.constraints = {
        audio: true,
        video: {
          facingMode: "environment"
        }
      };
      navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
        _this2.$refs.camera.srcObject = stream;
      })["catch"](function (error) {
        alert("Failed to stream!");
      });
    },
    stopCameraStream: function stopCameraStream(val) {
      this.isPhotoTaken = false;
      if (val == 'yes') {
        var tracks = this.$refs.camera.srcObject.getTracks();
        tracks.forEach(function (track) {
          track.stop();
        });
      }
    },
    getPhotocount: function getPhotocount() {
      var _this3 = this;
      axios.get("api/capture").then(function (res) {
        _this3.photocount = res.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Capture.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Capture.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.play-button {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  z-index: 1;\r\n  background: transparent;\r\n  border: none;\r\n  padding: 0;\r\n  cursor: pointer;\n}\n.close-button {\r\n  position: absolute;\r\n  top: 5%;\r\n  left: 98%;\r\n  transform: translate(-50%, -50%);\r\n  z-index: 1;\r\n  background: transparent;\r\n  border: none;\r\n  padding: 0;\r\n  cursor: pointer;\n}\ncanvas {\r\n  width: 100%;\r\n  height: 95%;\n}\r\n\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Capture.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Capture.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Capture_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Capture.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Capture.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Capture_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Capture_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./resources/js/components/Capture.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Capture.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Capture_vue_vue_type_template_id_3d9844aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Capture.vue?vue&type=template&id=3d9844aa& */ "./resources/js/components/Capture.vue?vue&type=template&id=3d9844aa&");
/* harmony import */ var _Capture_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Capture.vue?vue&type=script&lang=js& */ "./resources/js/components/Capture.vue?vue&type=script&lang=js&");
/* harmony import */ var _Capture_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Capture.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/Capture.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Capture_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Capture_vue_vue_type_template_id_3d9844aa___WEBPACK_IMPORTED_MODULE_0__.render,
  _Capture_vue_vue_type_template_id_3d9844aa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Capture.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Capture.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Capture.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Capture_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Capture.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Capture.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Capture_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Capture.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Capture.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Capture_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Capture.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Capture.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/Capture.vue?vue&type=template&id=3d9844aa&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Capture.vue?vue&type=template&id=3d9844aa& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Capture_vue_vue_type_template_id_3d9844aa___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Capture_vue_vue_type_template_id_3d9844aa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Capture_vue_vue_type_template_id_3d9844aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Capture.vue?vue&type=template&id=3d9844aa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Capture.vue?vue&type=template&id=3d9844aa&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Capture.vue?vue&type=template&id=3d9844aa&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Capture.vue?vue&type=template&id=3d9844aa& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "div",
        { staticClass: "d-flex justify-center" },
        [
          _c(
            "v-card",
            { attrs: { width: "45%" } },
            [
              _c("v-card-text", [
                _c(
                  "div",
                  {
                    staticStyle: {
                      "background-color": "white",
                      height: "70vh",
                    },
                  },
                  [
                    _c("video", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: !_vm.isPhotoTaken,
                          expression: "!isPhotoTaken",
                        },
                      ],
                      ref: "camera",
                      staticClass: "video",
                      attrs: { autoplay: "", width: "100%", height: "100%" },
                    }),
                    _vm._v(" "),
                    _c("canvas", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.isPhotoTaken,
                          expression: "isPhotoTaken",
                        },
                      ],
                      ref: "canvas",
                      staticClass: "video",
                      attrs: { id: "photoTaken" },
                    }),
                  ]
                ),
              ]),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.isPhotoTaken,
              expression: "!isPhotoTaken",
            },
          ],
          staticClass: "text-center my-3",
        },
        [
          _c(
            "v-btn",
            { attrs: { fab: "", "x-large": "" }, on: { click: _vm.mRecord } },
            [
              !_vm.isRecording
                ? _c("v-icon", { attrs: { "x-large": "", color: "red" } }, [
                    _vm._v("mdi-record"),
                  ])
                : _c("v-icon", { attrs: { "x-large": "" } }, [
                    _vm._v("mdi-stop"),
                  ]),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: !_vm.isRecording,
                  expression: "!isRecording",
                },
              ],
              attrs: { fab: "", "x-large": "" },
              on: { click: _vm.mCapture },
            },
            [
              _c("v-icon", { attrs: { "x-large": "" } }, [
                _vm._v("mdi-camera"),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: !_vm.isRecording,
                  expression: "!isRecording",
                },
              ],
              attrs: { fab: "" },
              on: {
                click: function ($event) {
                  return _vm.createCamera("full")
                },
              },
            },
            [_c("v-icon", [_vm._v("mdi-fullscreen")])],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.isPhotoTaken,
              expression: "isPhotoTaken",
            },
          ],
          staticClass: "text-center my-3",
        },
        [
          _c(
            "v-btn",
            {
              staticClass: "text-center green white--text",
              attrs: { bottom: "" },
              on: { click: _vm.savePicture },
            },
            [
              _c("v-icon", { staticClass: "mr-5" }, [
                _vm._v("mdi-content-save"),
              ]),
              _vm._v("\n      Save\n    "),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "text-center red white--text",
              attrs: { bottom: "" },
              on: { click: _vm.stopCameraStream },
            },
            [
              _c("v-icon", { staticClass: "mr-1" }, [_vm._v("mdi-close")]),
              _vm._v("\n      Discard\n    "),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { fullscreen: "", persistent: "" },
          model: {
            value: _vm.Fullscreen,
            callback: function ($$v) {
              _vm.Fullscreen = $$v
            },
            expression: "Fullscreen",
          },
        },
        [
          _c(
            "v-card",
            { attrs: { flat: "", color: "black" } },
            [
              _c("v-card-text", [
                _c(
                  "div",
                  { staticClass: "text-center video-container" },
                  [
                    _c("video", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: !_vm.isPhotoTaken,
                          expression: "!isPhotoTaken",
                        },
                      ],
                      ref: "camera",
                      staticClass: "video",
                      attrs: { autoplay: "", width: "63%" },
                    }),
                    _vm._v(" "),
                    _c("canvas", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.isPhotoTaken,
                          expression: "isPhotoTaken",
                        },
                      ],
                      ref: "canvasfull",
                      staticClass: "video",
                      staticStyle: { width: "84%" },
                      attrs: { id: "photoTakenfull" },
                    }),
                    _vm._v(" "),
                    _c(
                      "v-btn",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: !_vm.isPhotoTaken,
                            expression: "!isPhotoTaken",
                          },
                        ],
                        staticClass: "text-center play-button",
                        attrs: { fab: "", "x-large": "" },
                        on: { click: _vm.mCapture },
                      },
                      [
                        _c(
                          "v-icon",
                          { attrs: { "x-large": "", color: "primary" } },
                          [_vm._v("mdi-camera-outline")]
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-btn",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: !_vm.isPhotoTaken,
                            expression: "!isPhotoTaken",
                          },
                        ],
                        staticClass: "text-center close-button",
                        attrs: { fab: "", small: "", color: "red" },
                        on: {
                          click: function ($event) {
                            _vm.Fullscreen = false
                          },
                        },
                      },
                      [
                        _c("v-icon", { attrs: { small: "" } }, [
                          _vm._v("mdi-close-thick"),
                        ]),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-row",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.isPhotoTaken,
                            expression: "isPhotoTaken",
                          },
                        ],
                        staticClass: "play-button",
                      },
                      [
                        _c(
                          "v-col",
                          { attrs: { cols: "6" } },
                          [
                            _c(
                              "v-btn",
                              {
                                staticClass: "text-center green white--text",
                                attrs: { bottom: "" },
                                on: { click: _vm.savePicture },
                              },
                              [
                                _c("v-icon", { staticClass: "mr-5" }, [
                                  _vm._v("mdi-content-save"),
                                ]),
                                _vm._v(
                                  "\n                Save\n              "
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-col",
                          { attrs: { cols: "6" } },
                          [
                            _c(
                              "v-btn",
                              {
                                staticClass: "text-center red white--text",
                                attrs: { bottom: "" },
                                on: { click: _vm.stopCameraStream },
                              },
                              [
                                _c("v-icon", { staticClass: "mr-1" }, [
                                  _vm._v("mdi-close"),
                                ]),
                                _vm._v(
                                  "\n                Discard\n              "
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ]),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticStyle: { "background-color": "gray", width: "100%" } },
        [
          _c(
            "v-row",
            _vm._l(_vm.photocount, function (item, i) {
              return _c(
                "v-col",
                { key: i, attrs: { cols: "2" } },
                [
                  _c("v-img", {
                    attrs: {
                      src:
                        "storage/Capture/Sample/image_" +
                        (i + 1) +
                        ".jpg?" +
                        Date(),
                    },
                  }),
                ],
                1
              )
            }),
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);