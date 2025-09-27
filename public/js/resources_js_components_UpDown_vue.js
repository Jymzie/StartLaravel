"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_UpDown_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UpDown.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UpDown.vue?vue&type=script&lang=js& ***!
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
      AddDialog: false,
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
      this.AddDialog = false;
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
        alert('UpDown has been added!');
        _this2.mCloseAdd();
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
  }
});

/***/ }),

/***/ "./resources/js/components/UpDown.vue":
/*!********************************************!*\
  !*** ./resources/js/components/UpDown.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UpDown_vue_vue_type_template_id_56eb5988___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpDown.vue?vue&type=template&id=56eb5988& */ "./resources/js/components/UpDown.vue?vue&type=template&id=56eb5988&");
/* harmony import */ var _UpDown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpDown.vue?vue&type=script&lang=js& */ "./resources/js/components/UpDown.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UpDown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UpDown_vue_vue_type_template_id_56eb5988___WEBPACK_IMPORTED_MODULE_0__.render,
  _UpDown_vue_vue_type_template_id_56eb5988___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/UpDown.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/UpDown.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/UpDown.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpDown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UpDown.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UpDown.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpDown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/UpDown.vue?vue&type=template&id=56eb5988&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/UpDown.vue?vue&type=template&id=56eb5988& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpDown_vue_vue_type_template_id_56eb5988___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpDown_vue_vue_type_template_id_56eb5988___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpDown_vue_vue_type_template_id_56eb5988___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UpDown.vue?vue&type=template&id=56eb5988& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UpDown.vue?vue&type=template&id=56eb5988&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UpDown.vue?vue&type=template&id=56eb5988&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UpDown.vue?vue&type=template&id=56eb5988& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    "v-card",
    [
      _c(
        "v-card-title",
        { staticClass: "cyan lighten-3" },
        [
          _vm._v("UpDown\n        "),
          _c("v-spacer"),
          _vm._v(" "),
          _c("v-btn", { on: { click: _vm.mShowAdd } }, [_vm._v("Upload")]),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c(
            "v-simple-table",
            {
              staticClass: "pa-3",
              attrs: { "fixed-header": "", height: "500px" },
            },
            [
              _c("thead", [
                _c(
                  "tr",
                  _vm._l(_vm.UpDownTableHeader, function (header, i) {
                    return _c("th", { key: i, staticClass: "cyan lighten-1" }, [
                      _vm._v("\n                        " + _vm._s(header)),
                    ])
                  }),
                  0
                ),
              ]),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.UpDownTableData, function (item, i) {
                  return _c("tr", { key: i }, [
                    _c("td", { staticClass: "TableBorder alignCenter" }, [
                      _vm._v(
                        "\n                        " +
                          _vm._s(item.filename) +
                          "\n                    "
                      ),
                    ]),
                    _vm._v(" "),
                    _c(
                      "td",
                      { staticClass: "TableBorder alignCenter" },
                      [
                        _c(
                          "v-tooltip",
                          {
                            attrs: { left: "" },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "activator",
                                  fn: function (ref) {
                                    var on = ref.on
                                    var attrs = ref.attrs
                                    return [
                                      _c("v-progress-circular", {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value:
                                              _vm.uploading == true &&
                                              item.filename == _vm.filename
                                                ? true
                                                : false,
                                            expression:
                                              "uploading == true && item.filename == filename ? true : false",
                                          },
                                        ],
                                        attrs: {
                                          color: "green",
                                          indeterminate: "",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        _vm._g(
                                          _vm._b(
                                            {
                                              directives: [
                                                {
                                                  name: "show",
                                                  rawName: "v-show",
                                                  value:
                                                    item.filename !=
                                                    _vm.filename
                                                      ? true
                                                      : false,
                                                  expression:
                                                    "item.filename != filename ? true : false",
                                                },
                                              ],
                                              staticClass: "ma-1",
                                              attrs: {
                                                fab: "",
                                                "x-small": "",
                                                color: "#546E7A",
                                              },
                                              on: {
                                                click: function ($event) {
                                                  return _vm.mDownload(item)
                                                },
                                              },
                                            },
                                            "v-btn",
                                            attrs,
                                            false
                                          ),
                                          on
                                        ),
                                        [
                                          _c(
                                            "v-icon",
                                            { attrs: { color: "#FFFFFF" } },
                                            [_vm._v("mdi-arrow-down")]
                                          ),
                                        ],
                                        1
                                      ),
                                    ]
                                  },
                                },
                              ],
                              null,
                              true
                            ),
                          },
                          [
                            _vm._v(" "),
                            _c("span", { staticClass: "spancolor" }, [
                              _vm._v("Download"),
                            ]),
                          ]
                        ),
                      ],
                      1
                    ),
                  ])
                }),
                0
              ),
            ]
          ),
          _vm._v(" "),
          _c(
            "v-dialog",
            {
              attrs: { "max-width": "50%", persistent: "" },
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
                    { staticClass: "cyan lighten-1 mb-4" },
                    [
                      _vm._v("Upload "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c("v-icon", { on: { click: _vm.mCloseAdd } }, [
                        _vm._v("mdi-close"),
                      ]),
                    ],
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
                          _vm._v("\n\n                         Upload"),
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
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);