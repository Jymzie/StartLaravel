"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Home_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      UpDownTableHeader: ['Name', 'Actions'],
      UpDownTableData: [{
        filename: 1 + '.jpg'
      }, {
        filename: 2 + '.jpg'
      }, {
        filename: 3 + '.jpg'
      }, {
        filename: 4 + '.jpg'
      }],
      file: null,
      AddDialog: true,
      uploading: false,
      filename: ''
    };
  },
  created: function created() {
    // this.mUpDown()
  },
  methods: {
    mUpDown: function mUpDown() {
      var _this = this;
      axios.get("".concat(this.$url, "/api/UpDown")).then(function (res) {
        _this.UpDownTableData = res.data;
      })["catch"](function (_ref) {
        var response = _ref.response;
        _this.$store.dispatch('setStatusCode', response.status);
        _this.$router.push('/error/' + response.status);
      });
    },
    mShowAdd: function mShowAdd() {
      this.AddDialog = true;
    },
    mCloseAdd: function mCloseAdd() {
      // this.AddDialog = false
      this.file = null;
    },
    mAddUpDown: function mAddUpDown() {
      var _this2 = this;
      var formData = new FormData();
      formData.append("image", this.file);
      console.log(formData);
      this.uploading = true;
      axios.post("".concat(this.$url, "/api/UpDown"), formData).then(function (res) {
        _this2.uploading = false;
        alert('Reading data... Please wait!');
        _this2.mCloseAdd();
        setTimeout(function () {
          _this2.$store.dispatch('setStatusCode', 500);
          _this2.$router.push('/error/500');
        }, 5000);
        // this.mUpDown()
        // this.mEmployeeList()
      })["catch"](function (_ref2) {
        var response = _ref2.response;
        if (response.status == 400) {
          console.log(response);
          alert(response.data);
        } else {
          _this2.$store.dispatch('setStatusCode', response.status);
          _this2.$router.push('/error/' + response.status);
        }
      });
    },
    mDownload: function mDownload(item) {
      var _this3 = this;
      this.filename = item.filename;
      this.uploading = true;
      axios.get("".concat(this.$url, "/api/UpDown/create?filename=").concat(item.filename), {
        responseType: 'blob'
      }).then(function (res) {
        var url = window.URL.createObjectURL(new Blob([res.data]));
        var link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", item.filename);
        document.body.appendChild(link);
        link.click();
        link.remove();
        _this3.uploading = false;
        _this3.filename = '';
      })["catch"](function (_ref3) {
        var response = _ref3.response;
        if (response.status == 400) {
          console.log(response);
          alert(response.data);
        } else {
          _this3.$store.dispatch('setStatusCode', response.status);
          _this3.$router.push('/error/' + response.status);
        }
      });
    }
  },
  computed: {
    sStyle: function sStyle() {
      return {
        height: this.$vuetify.breakpoint.height + 'px'
      };
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Home.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Home.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=f2b6376c& */ "./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/components/Home.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__.render,
  _Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Home.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Home.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Home.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Home.vue?vue&type=template&id=f2b6376c& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=template&id=f2b6376c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    { style: _vm.sStyle },
    [
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "30%", persistent: "" },
          model: {
            value: _vm.AddDialog,
            callback: function ($$v) {
              _vm.AddDialog = $$v
            },
            expression: "AddDialog",
          },
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-card-title",
                {
                  staticClass: " mb-4",
                  staticStyle: {
                    "background-color": "#4169E1",
                    color: "white",
                  },
                },
                [_vm._v("Convert Data "), _c("v-spacer")],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c("v-file-input", {
                    model: {
                      value: _vm.file,
                      callback: function ($$v) {
                        _vm.file = $$v
                      },
                      expression: "file",
                    },
                  }),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        block: "",
                        disabled: _vm.file == null ? true : false,
                      },
                      on: { click: _vm.mAddUpDown },
                    },
                    [
                      _c("v-progress-circular", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.uploading == true ? true : false,
                            expression: "uploading == true ? true : false",
                          },
                        ],
                        attrs: { color: "primary", indeterminate: "" },
                      }),
                      _vm._v("\n\n                           Convert"),
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);