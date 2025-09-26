"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Master_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Master.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Master.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  // ANCHOR DATA
  data: function data() {
    return {
      TableHeader: null,
      TableContent: null,
      isContentLoading: false,
      isEdit: false,
      search: '',
      adddialog: false,
      additems: {},
      compareitems: {},
      adderr: {}
    };
  },
  //NOTE Loads the methods declared from the start
  created: function created() {
    var _this = this;
    this.mMaster();
    //NOTE yarn run socket-server to run socket io
    //NOTE only loads when triggered by from public/js/server.js - io.emit
    this.$socket.on('reloadme', function () {
      _this.mMaster();
      console.log(_this.$vuetify.breakpoint.height);
    });
  },
  // ANCHOR METHODS w/ CRUD
  methods: {
    // ANCHOR READ
    mMaster: function mMaster() {
      var _this2 = this;
      this.isContentLoading = true;
      axios.get("api/master").then(function (res) {
        _this2.TableContent = res.data;
        _this2.TableHeader = Object.keys(res.data[0]);
      })["catch"](function (err) {
        _this2.ErrorCode(err);
      })["finally"](function () {
        return setTimeout(function () {
          _this2.isContentLoading = false;
        }, "1000");
      });
    },
    // ANCHOR CREATE
    mAdd: function mAdd() {
      var _this3 = this;
      console.log('add', this.additems);
      this.adderr = {
        UserID: '',
        UserLevel: '',
        Password: ''
      };
      axios.post("api/master", this.additems).then(function (res) {
        _this3.mCloseAdd();
        //NOTE if this method triggers, it will go to server.js
        _this3.$socket.emit('reload_data', 'test');
      })["catch"](function (err) {
        //NOTE error catch here
        _this3.ErrorCode1(err);
      });
    },
    mOpenEdit: function mOpenEdit(item) {
      this.isEdit = true;
      this.adderr = {
        UserID: '',
        UserLevel: '',
        Password: ''
      };
      this.additems = Object.assign({}, item);
      this.compareitems = Object.assign(this.compareitems, item);
      this.adddialog = true;
    },
    // ANCHOR UPDATE
    mEdit: function mEdit() {
      var _this4 = this;
      this.additems.oldID = this.compareitems.UserID;
      axios.patch("api/master/updateuser", this.additems).then(function (res) {
        _this4.mCloseAdd();
        _this4.$socket.emit('reload_data', 'test');
      })["catch"](function (err) {
        _this4.ErrorCode1(err);
      });
    },
    mCloseAdd: function mCloseAdd() {
      this.adddialog = false;
      this.additems = {};
      this.isEdit = false;
    },
    // ANCHOR DELETE
    mDelete: function mDelete(item) {
      var _this5 = this;
      console.log('del', item);
      axios["delete"]("api/master/deleteuser?id=".concat(item.UserID, "&date=").concat(item.DeletedDate)).then(function (res) {
        _this5.$socket.emit('reload_data', 'test');
      })["catch"](function (err) {
        _this5.ErrorCode(err);
      });
    },
    mHeadSpace: function mHeadSpace(str) {
      var result = str.replace(/([a-z])([A-Z])/g, '$1 $2');

      //NOTE Handle consecutive uppercase letters
      // result = result.replace(/([A-Z])([A-Z][a-z])/g, '$1 $2');

      return result.trim();
    },
    //NOTE Sample Error codes
    ErrorCode: function ErrorCode(err) {
      var errorval = 500;
      if (err.response != null) {
        errorval = err.response.status;
      } else console.log(err);
      this.$store.dispatch('setStatusCode', errorval);
      this.$router.push('/error/' + errorval);
    },
    ErrorCode1: function ErrorCode1(err) {
      if (err.response == null) {
        this.$store.dispatch('setStatusCode', 500);
        this.$router.push('/error/' + 500);
        console.log(err);
      }
      if (err.response.status == 400) {
        if (err.response.data.UserID != null) this.adderr.UserID = err.response.data.UserID[0];
        if (err.response.data.UserLevel != null) this.adderr.UserLevel = err.response.data.UserLevel[0];
        if (err.response.data.Password != null) this.adderr.Password = err.response.data.Password[0];
        console.log(this.adderr);
      } else {
        this.$store.dispatch('setStatusCode', err.response.status);
        this.$router.push('/error/' + err.response.status);
      }
    }
  },
  // ANCHOR COMPUTED
  computed: {
    //ANCHOR Search Method
    cMaster: function cMaster() {
      var _this6 = this;
      if (this.search) return this.TableContent.filter(function (rec) {
        return rec.UserID.includes(_this6.search);
      });
      // return this.TableContent.filter(rec => this.TableHeader.filter(arr => rec[arr].includes(this.search.toLocaleUpperCase())))
      else return this.TableContent;
    },
    //NOTE Using tableheader as the data and excluding unnecessary items for the dialog 
    cDialogitem: function cDialogitem() {
      if (this.TableHeader) return this.TableHeader.filter(function (rec) {
        return !rec.includes('UpdatedDate') && !rec.includes('DeletedDate') && !rec.includes('CreatedDate') && !rec.includes('UpdatedBy');
      });
    },
    //ANCHOR Edit Disable button
    cEditDisable: function cEditDisable() {
      if (this.additems.UserID == this.compareitems.UserID && this.additems.UserLevel == this.compareitems.UserLevel && this.additems.Password == this.compareitems.Password) return true;else return false;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Master.vue?vue&type=style&index=0&id=00f4d78d&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Master.vue?vue&type=style&index=0&id=00f4d78d&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* .tablehead{\n    background-color: #5a0a0a !important;\n    color: #e9c9aa !important;\n} */\ntd[data-v-00f4d78d], th[data-v-00f4d78d] {\n    border: 1px solid #dddddd;\n}\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Master.vue?vue&type=style&index=0&id=00f4d78d&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Master.vue?vue&type=style&index=0&id=00f4d78d&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Master_vue_vue_type_style_index_0_id_00f4d78d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Master.vue?vue&type=style&index=0&id=00f4d78d&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Master.vue?vue&type=style&index=0&id=00f4d78d&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Master_vue_vue_type_style_index_0_id_00f4d78d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Master_vue_vue_type_style_index_0_id_00f4d78d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/js/components/Master.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Master.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Master_vue_vue_type_template_id_00f4d78d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Master.vue?vue&type=template&id=00f4d78d&scoped=true& */ "./resources/js/components/Master.vue?vue&type=template&id=00f4d78d&scoped=true&");
/* harmony import */ var _Master_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Master.vue?vue&type=script&lang=js& */ "./resources/js/components/Master.vue?vue&type=script&lang=js&");
/* harmony import */ var _Master_vue_vue_type_style_index_0_id_00f4d78d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Master.vue?vue&type=style&index=0&id=00f4d78d&scoped=true&lang=css& */ "./resources/js/components/Master.vue?vue&type=style&index=0&id=00f4d78d&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Master_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Master_vue_vue_type_template_id_00f4d78d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Master_vue_vue_type_template_id_00f4d78d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "00f4d78d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Master.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Master.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Master.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Master_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Master.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Master.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Master_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Master.vue?vue&type=style&index=0&id=00f4d78d&scoped=true&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/Master.vue?vue&type=style&index=0&id=00f4d78d&scoped=true&lang=css& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Master_vue_vue_type_style_index_0_id_00f4d78d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Master.vue?vue&type=style&index=0&id=00f4d78d&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Master.vue?vue&type=style&index=0&id=00f4d78d&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/Master.vue?vue&type=template&id=00f4d78d&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Master.vue?vue&type=template&id=00f4d78d&scoped=true& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Master_vue_vue_type_template_id_00f4d78d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Master_vue_vue_type_template_id_00f4d78d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Master_vue_vue_type_template_id_00f4d78d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Master.vue?vue&type=template&id=00f4d78d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Master.vue?vue&type=template&id=00f4d78d&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Master.vue?vue&type=template&id=00f4d78d&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Master.vue?vue&type=template&id=00f4d78d&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "mt-5 mb-n7" },
        [
          _c(
            "v-row",
            [
              _c(
                "v-col",
                {
                  staticClass: "text-right",
                  staticStyle: { "font-size": "25px" },
                  attrs: { cols: "3", lg: "1", md: "1", sm: "2" },
                },
                [_vm._v("\n                FILTER\n            ")]
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "5", lg: "3", md: "3", sm: "4" } },
                [
                  _c("v-text-field", {
                    attrs: { dense: "", outlined: "" },
                    model: {
                      value: _vm.search,
                      callback: function ($$v) {
                        _vm.search = $$v
                      },
                      expression: "search",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c("v-col"),
              _vm._v(" "),
              _c(
                "v-col",
                {
                  staticClass: "text-left",
                  attrs: { cols: "3", lg: "1", md: "1", sm: "2" },
                },
                [
                  _c(
                    "v-btn",
                    {
                      on: {
                        click: function ($event) {
                          _vm.adddialog = !_vm.adddialog
                        },
                      },
                    },
                    [_c("v-icon", [_vm._v("mdi-account-plus")])],
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
      _vm._v(" "),
      _c(
        "v-card",
        [
          _c(
            "v-card-text",
            [
              _vm.isContentLoading
                ? _c(
                    "v-row",
                    { staticClass: "text-center" },
                    [
                      _c("v-col", { attrs: { cols: "12" } }, [
                        _c("h3", [_vm._v("Loading Data")]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c("v-progress-circular", {
                            attrs: {
                              loadingTable: "",
                              size: 90,
                              width: 20,
                              color: "#3c282f",
                              indeterminate: "",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  )
                : _c(
                    "v-simple-table",
                    {
                      staticClass: "text-center",
                      attrs: {
                        "fixed-header": "",
                        height: _vm.$vuetify.breakpoint.height * 0.7,
                      },
                    },
                    [
                      _c("thead", [
                        _c(
                          "tr",
                          [
                            _vm._l(_vm.TableHeader, function (header, i) {
                              return _c(
                                "th",
                                { key: i, staticClass: "text-center" },
                                [_vm._v(_vm._s(_vm.mHeadSpace(header)))]
                              )
                            }),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-center" }, [
                              _vm._v("Actions"),
                            ]),
                          ],
                          2
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        _vm._l(_vm.cMaster, function (data, j) {
                          return _c(
                            "tr",
                            { key: j },
                            [
                              _vm._l(_vm.TableHeader, function (header, i) {
                                return _c("td", { key: i }, [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(data[header]) +
                                      "\n                        "
                                  ),
                                ])
                              }),
                              _vm._v(" "),
                              _c(
                                "td",
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      staticClass: "my-1",
                                      on: {
                                        click: function ($event) {
                                          return _vm.mOpenEdit(data)
                                        },
                                      },
                                    },
                                    [_c("v-icon", [_vm._v("mdi-pencil")])],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      staticClass: "my-1",
                                      on: {
                                        click: function ($event) {
                                          return _vm.mDelete(data)
                                        },
                                      },
                                    },
                                    [_c("v-icon", [_vm._v("mdi-delete")])],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            2
                          )
                        }),
                        0
                      ),
                    ]
                  ),
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
          attrs: {
            persistent: "",
            width: this.$vuetify.breakpoint.smOnly ? "70%" : "40%",
          },
          model: {
            value: _vm.adddialog,
            callback: function ($$v) {
              _vm.adddialog = $$v
            },
            expression: "adddialog",
          },
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-card-title",
                [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.isEdit ? "EDIT" : "ADD") +
                      "\n                "
                  ),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-icon",
                    {
                      on: {
                        click: function ($event) {
                          return _vm.mCloseAdd()
                        },
                      },
                    },
                    [_vm._v("mdi-close")]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                _vm._l(_vm.cDialogitem, function (header, i) {
                  return _c(
                    "v-row",
                    { key: i, staticClass: "mb-n10" },
                    [
                      _c(
                        "v-col",
                        {
                          staticClass: "text-right",
                          attrs: { cols: "4", lg: "4", md: "4" },
                        },
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(_vm.mHeadSpace(header)) +
                              ":\n                    "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "text-left",
                          attrs: { cols: "6", lg: "6", md: "6" },
                        },
                        [
                          _c("v-text-field", {
                            attrs: {
                              dense: "",
                              outlined: "",
                              "error-messages":
                                _vm.adderr[header] == ""
                                  ? ""
                                  : _vm.adderr[header],
                            },
                            model: {
                              value: _vm.additems[header],
                              callback: function ($$v) {
                                _vm.$set(_vm.additems, header, $$v)
                              },
                              expression: "additems[header]",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  )
                }),
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        disabled: _vm.isEdit ? _vm.cEditDisable : false,
                      },
                      on: {
                        click: function ($event) {
                          _vm.isEdit ? _vm.mEdit() : _vm.mAdd()
                        },
                      },
                    },
                    [_vm._v(_vm._s(_vm.isEdit ? "Edit" : "Add"))]
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);