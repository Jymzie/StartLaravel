"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Test_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Test.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Test.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
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
      TableHeader: null,
      TableContent: null,
      isContentLoading: false,
      toAdd: false,
      addname: {}
    };
  },
  created: function created() {
    this.mMaster();
    console.log(this.$vuetify.breakpoint.height);
  },
  methods: {
    mMaster: function mMaster() {
      var _this = this;
      axios.get("api/master/test").then(function (res) {
        _this.TableContent = res.data;
        _this.TableHeader = Object.keys(res.data[0]);
      })["finally"](function () {
        return setTimeout(function () {
          _this.isContentLoading = false;
        }, "1000");
      });
    },
    mAdd: function mAdd() {
      axios.post("api/master", this.addname).then(function (res) {});
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Test.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Test.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Test_vue_vue_type_template_id_5f45227d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Test.vue?vue&type=template&id=5f45227d& */ "./resources/js/components/Test.vue?vue&type=template&id=5f45227d&");
/* harmony import */ var _Test_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Test.vue?vue&type=script&lang=js& */ "./resources/js/components/Test.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Test_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Test_vue_vue_type_template_id_5f45227d___WEBPACK_IMPORTED_MODULE_0__.render,
  _Test_vue_vue_type_template_id_5f45227d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Test.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Test.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Test.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Test_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Test.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Test.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Test_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Test.vue?vue&type=template&id=5f45227d&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Test.vue?vue&type=template&id=5f45227d& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Test_vue_vue_type_template_id_5f45227d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Test_vue_vue_type_template_id_5f45227d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Test_vue_vue_type_template_id_5f45227d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Test.vue?vue&type=template&id=5f45227d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Test.vue?vue&type=template&id=5f45227d&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Test.vue?vue&type=template&id=5f45227d&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Test.vue?vue&type=template&id=5f45227d& ***!
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
    [
      _c(
        "v-card",
        [
          _c(
            "v-card-title",
            [
              _c(
                "v-btn",
                {
                  on: {
                    click: function ($event) {
                      _vm.toAdd = !_vm.toAdd
                    },
                  },
                },
                [_vm._v("ADD")]
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _vm.isContentLoading
                ? _c(
                    "div",
                    { staticClass: "d-flex justify-center" },
                    [
                      _c("v-col", { attrs: { cols: "12" } }, [
                        _c("h3", [_vm._v("Loading Images")]),
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
                      attrs: {
                        "fixed-header": "",
                        height: _vm.$vuetify.breakpoint.height * 0.8,
                      },
                    },
                    [
                      _c("thead", [
                        _c(
                          "tr",
                          _vm._l(_vm.TableHeader, function (header, i) {
                            return _c("th", { key: i }, [
                              _vm._v(_vm._s(header)),
                            ])
                          }),
                          0
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        _vm._l(_vm.TableContent, function (data, j) {
                          return _c(
                            "tr",
                            { key: j },
                            _vm._l(_vm.TableHeader, function (header, i) {
                              return _c("td", { key: i }, [
                                _vm._v(
                                  "\n                          " +
                                    _vm._s(data[header]) +
                                    "\n                      "
                                ),
                              ])
                            }),
                            0
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
          model: {
            value: _vm.toAdd,
            callback: function ($$v) {
              _vm.toAdd = $$v
            },
            expression: "toAdd",
          },
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-card-text",
                [
                  _c("v-text-field", {
                    model: {
                      value: _vm.addname.name,
                      callback: function ($$v) {
                        _vm.$set(_vm.addname, "name", $$v)
                      },
                      expression: "addname.name",
                    },
                  }),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      on: {
                        click: function ($event) {
                          return _vm.mAdd()
                        },
                      },
                    },
                    [_vm._v("TRY")]
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