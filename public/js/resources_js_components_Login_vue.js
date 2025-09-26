"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Login_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Login.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Login.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      isShowPassword: false,
      login: {
        UserID: '',
        Password: ''
      },
      loginerror: {
        UserID: '',
        Password: ''
      }
    };
  },
  methods: {
    mLogin: function mLogin(id) {
      if (id == 'user') {
        if (this.login.UserID == '' && this.login.Password == '') this.loginerror = {
          UserID: 'The Employee ID field is required',
          Password: 'The Password field is required'
        };else if (this.login.UserID.length < 5) this.loginerror = {
          UserID: 'Minimum of 5 characters',
          Password: ''
        };else if (this.login.Password == '') this.loginerror = {
          UserID: '',
          Password: 'The Password field is required'
        };else if (this.login.UserID == '') this.loginerror = {
          UserID: 'The Employee ID field is required',
          Password: ''
        };else {
          console.log(id);
        }
      } else console.log(id);
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Login.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Login.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Login_vue_vue_type_template_id_6bdc8b8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=6bdc8b8e& */ "./resources/js/components/Login.vue?vue&type=template&id=6bdc8b8e&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/components/Login.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_6bdc8b8e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Login_vue_vue_type_template_id_6bdc8b8e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Login.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Login.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/Login.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Login.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Login.vue?vue&type=template&id=6bdc8b8e&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Login.vue?vue&type=template&id=6bdc8b8e& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_6bdc8b8e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_6bdc8b8e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_6bdc8b8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=template&id=6bdc8b8e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Login.vue?vue&type=template&id=6bdc8b8e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Login.vue?vue&type=template&id=6bdc8b8e&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Login.vue?vue&type=template&id=6bdc8b8e& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
    "v-container",
    { attrs: { "fill-height": "" } },
    [
      _c(
        "v-layout",
        { attrs: { "align-center": "", "justify-center": "" } },
        [
          _c(
            "v-card",
            { staticClass: "blue" },
            [
              _c("v-card-text", { staticClass: "mt-2" }, [
                _c(
                  "div",
                  { staticClass: " text-center" },
                  [
                    _c(
                      "v-col",
                      { staticClass: "mt-n7", attrs: { cols: "12" } },
                      [
                        _c(
                          "span",
                          {
                            staticClass: "text-h6 font-weight-bold black--text",
                          },
                          [_vm._v("LOGIN")]
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "v-col",
                      { staticClass: "mt-n4", attrs: { cols: "12" } },
                      [
                        _c(
                          "v-text-field",
                          {
                            attrs: {
                              oninput:
                                "this.value = this.value.replace(/[^0-9]/g, '').replace(/(\\..*?)\\..*/g, '$1');",
                              outlined: "",
                              dense: "",
                              "background-color": "white",
                              "error-messages":
                                _vm.loginerror.UserID != ""
                                  ? _vm.loginerror.UserID
                                  : "",
                              maxlength: "7",
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "prepend-inner",
                                fn: function () {
                                  return [
                                    _c(
                                      "v-icon",
                                      { staticClass: "black--text" },
                                      [_vm._v("mdi-account")]
                                    ),
                                  ]
                                },
                                proxy: true,
                              },
                            ]),
                            model: {
                              value: _vm.login.UserID,
                              callback: function ($$v) {
                                _vm.$set(_vm.login, "UserID", $$v)
                              },
                              expression: "login.UserID",
                            },
                          },
                          [
                            _vm._v(" "),
                            _c("v-tooltip", {
                              attrs: {
                                slot: "append",
                                right: "",
                                disabled: "",
                              },
                              slot: "append",
                              scopedSlots: _vm._u([
                                {
                                  key: "activator",
                                  fn: function (ref) {
                                    var on = ref.on
                                    var attrs = ref.attrs
                                    return [
                                      _c(
                                        "v-icon",
                                        _vm._g(
                                          _vm._b(
                                            {
                                              staticClass: "black--text",
                                              on: {
                                                click: function ($event) {
                                                  _vm.login.UserID = ""
                                                },
                                              },
                                            },
                                            "v-icon",
                                            attrs,
                                            false
                                          ),
                                          on
                                        ),
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.login.UserID == ""
                                                ? ""
                                                : "mdi-close"
                                            )
                                          ),
                                        ]
                                      ),
                                    ]
                                  },
                                },
                              ]),
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-col",
                      { staticClass: "mt-n8", attrs: { cols: "12" } },
                      [
                        _c(
                          "v-text-field",
                          {
                            attrs: {
                              outlined: "",
                              dense: "",
                              "background-color": "white",
                              "error-messages":
                                _vm.loginerror.Password != ""
                                  ? _vm.loginerror.Password
                                  : "",
                              type: _vm.isShowPassword ? "text" : "password",
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "prepend-inner",
                                fn: function () {
                                  return [
                                    _c(
                                      "v-icon",
                                      { staticClass: "black--text" },
                                      [_vm._v("mdi-key")]
                                    ),
                                  ]
                                },
                                proxy: true,
                              },
                            ]),
                            model: {
                              value: _vm.login.Password,
                              callback: function ($$v) {
                                _vm.$set(_vm.login, "Password", $$v)
                              },
                              expression: "login.Password",
                            },
                          },
                          [
                            _vm._v(" "),
                            _c("v-tooltip", {
                              attrs: {
                                slot: "append",
                                right: "",
                                disabled: "",
                              },
                              slot: "append",
                              scopedSlots: _vm._u([
                                {
                                  key: "activator",
                                  fn: function (ref) {
                                    var on = ref.on
                                    var attrs = ref.attrs
                                    return [
                                      _c(
                                        "v-icon",
                                        _vm._g(
                                          _vm._b(
                                            {
                                              staticClass: "black--text",
                                              on: {
                                                click: function ($event) {
                                                  _vm.isShowPassword =
                                                    !_vm.isShowPassword
                                                },
                                              },
                                            },
                                            "v-icon",
                                            attrs,
                                            false
                                          ),
                                          on
                                        ),
                                        [
                                          _vm._v(
                                            _vm._s(
                                              !_vm.isShowPassword
                                                ? "mdi-eye-off"
                                                : "mdi-eye"
                                            )
                                          ),
                                        ]
                                      ),
                                    ]
                                  },
                                },
                              ]),
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-col",
                      {
                        staticClass: "mt-n8 text-right",
                        attrs: { cols: "12" },
                      },
                      [
                        _c(
                          "v-btn",
                          {
                            staticClass: "text-right white--text",
                            attrs: { color: "#3c282f" },
                            on: {
                              click: function ($event) {
                                return _vm.mLogin("user")
                              },
                            },
                          },
                          [_vm._v("Login")]
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("v-col", { attrs: { cols: "12" } }, [
                      _c("small", [
                        _vm._v("Are you having a problem logging in? "),
                        _c("br"),
                        _vm._v("Call "),
                        _c("u", [_vm._v("blank")]),
                        _vm._v(" for assistance"),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c(
                      "v-col",
                      { staticClass: "text-right", attrs: { cols: "12" } },
                      [
                        _c("small", { staticClass: " red--text" }, [
                          _vm._v(" No Account? Login as"),
                        ]),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            staticClass: "white--text",
                            attrs: { color: "#3c282f" },
                            on: {
                              click: function ($event) {
                                return _vm.mLogin("guest")
                              },
                            },
                          },
                          [_vm._v("Guest")]
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);