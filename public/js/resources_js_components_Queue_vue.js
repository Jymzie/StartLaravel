"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Queue_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Queue.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Queue.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  created: function created() {
    var _this = this;
    this.mGetList();
    this.mGetQueue();
    this.$socket.on('reloadme', function () {
      _this.mGetQueue();
    });
  },
  data: function data() {
    return {
      header: [],
      list: [],
      header2: [],
      queue: [],
      search: '',
      toupload: false,
      file: {
        name: '',
        content: null
      },
      uploading: false,
      uploadProgress: 0
    };
  },
  methods: {
    mGetList: function mGetList() {
      var _this2 = this;
      axios.get("api/play").then(function (res) {
        if (res.data.length != 0) {
          _this2.list = res.data;
          _this2.header = Object.keys(res.data[0]);
        } else {
          _this2.list = [];
        }
      });
    },
    mGetQueue: function mGetQueue() {
      var _this3 = this;
      axios.get("api/play?mode=q").then(function (res) {
        if (res.data.length != 0) {
          _this3.queue = res.data;
          _this3.header2 = Object.keys(res.data[0]);
        } else {
          _this3.queue = [];
        }
      });
    },
    mToQueue: function mToQueue(data) {
      var _this4 = this;
      axios.post("api/play", data)["finally"](function () {
        _this4.$socket.emit('reload_data');
      });
    },
    //NOTE Upload
    mUpload: function mUpload() {
      var _this5 = this;
      var formData = new FormData();
      formData.append("name", this.file.name);
      formData.append("content", this.file.content);
      this.uploading = true;
      axios.post("".concat(this.$url, "/api/play"), formData, {
        onUploadProgress: function onUploadProgress(progressEvent) {
          var percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);
          _this5.uploadProgress = percentCompleted;
          console.log(_this5.uploadProgress, 'loaded', progressEvent.loaded, 'total', progressEvent.total);
        }
      }).then(function (res) {
        _this5.toupload = false;
        _this5.uploading = false;
        alert('Video has been added!');
        _this5.mGetList();
        _this5.mCloseUpload();
      });
      // .catch(({response})=>{
      //     if(response.status == 400){
      //         console.log(response)
      //         alert(response.data)
      //     }else{
      //         this.$store.dispatch('setStatusCode', response.status)
      //         this.$router.push('/error/' + response.status)
      //     }
      // })
    },
    mCloseUpload: function mCloseUpload() {
      this.toupload = false;
      this.file = {
        name: '',
        content: null
      };
    },
    mClear: function mClear() {
      var _this6 = this;
      axios["delete"]("api/play/clear")["finally"](function () {
        _this6.$socket.emit('reload_data');
      });
    },
    mToCancel: function mToCancel(data) {
      var _this7 = this;
      axios["delete"]("api/play/cancel?no=".concat(data.No))["finally"](function () {
        _this7.$socket.emit('reload_data');
      });
    }
  },
  computed: {
    cFilter: function cFilter() {
      var _this8 = this;
      if (this.search) return this.list.filter(function (rec) {
        return rec.Title.toUpperCase().includes(_this8.search.toUpperCase());
      });else return this.list;
    },
    cQueueHeader: function cQueueHeader() {
      if (this.header2) return this.header2.filter(function (rec) {
        return !rec.includes('Link');
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Queue.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Queue.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Queue_vue_vue_type_template_id_6aa8a136___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Queue.vue?vue&type=template&id=6aa8a136& */ "./resources/js/components/Queue.vue?vue&type=template&id=6aa8a136&");
/* harmony import */ var _Queue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Queue.vue?vue&type=script&lang=js& */ "./resources/js/components/Queue.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Queue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Queue_vue_vue_type_template_id_6aa8a136___WEBPACK_IMPORTED_MODULE_0__.render,
  _Queue_vue_vue_type_template_id_6aa8a136___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Queue.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Queue.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/Queue.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Queue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Queue.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Queue.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Queue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Queue.vue?vue&type=template&id=6aa8a136&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Queue.vue?vue&type=template&id=6aa8a136& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Queue_vue_vue_type_template_id_6aa8a136___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Queue_vue_vue_type_template_id_6aa8a136___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Queue_vue_vue_type_template_id_6aa8a136___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Queue.vue?vue&type=template&id=6aa8a136& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Queue.vue?vue&type=template&id=6aa8a136&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Queue.vue?vue&type=template&id=6aa8a136&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Queue.vue?vue&type=template&id=6aa8a136& ***!
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
    "div",
    [
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12", lg: "6", md: "6", sm: "12" } },
            [
              _c(
                "v-card",
                { attrs: { color: "black" } },
                [
                  _c("v-card-title", [
                    _c("h1", { staticStyle: { color: "white" } }, [
                      _vm._v(
                        "\n                      List\n                  "
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "10" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  "background-color": "white",
                                  outlined: "",
                                  dense: "",
                                  placeholder: "Search",
                                },
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
                          _c(
                            "v-col",
                            { attrs: { cols: "2" } },
                            [
                              _c(
                                "v-btn",
                                {
                                  on: {
                                    click: function ($event) {
                                      _vm.toupload = true
                                    },
                                  },
                                },
                                [
                                  _c("v-icon", [
                                    _vm._v(
                                      "\n                                  mdi-upload\n                              "
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
                      ),
                      _vm._v(" "),
                      _c(
                        "v-simple-table",
                        {
                          staticClass: "text-center",
                          attrs: {
                            "fixed-header": "",
                            height: _vm.$vuetify.breakpoint.height * 0.62,
                          },
                        },
                        [
                          _c("thead", [
                            _c(
                              "tr",
                              [
                                _vm._l(_vm.header, function (header, i) {
                                  return _c(
                                    "th",
                                    { key: i, staticClass: "text-center" },
                                    [_vm._v(_vm._s(header))]
                                  )
                                }),
                                _vm._v(" "),
                                _c("th", { staticClass: "text-center" }, [
                                  _vm._v("Play"),
                                ]),
                              ],
                              2
                            ),
                          ]),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            _vm._l(_vm.cFilter, function (data, j) {
                              return _c(
                                "tr",
                                { key: j },
                                [
                                  _vm._l(_vm.header, function (header, i) {
                                    return _c("td", { key: i }, [
                                      _vm._v(
                                        "\n                                  " +
                                          _vm._s(data[header]) +
                                          "\n                              "
                                      ),
                                    ])
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    [
                                      _c(
                                        "v-icon",
                                        {
                                          on: {
                                            click: function ($event) {
                                              return _vm.mToQueue(data)
                                            },
                                          },
                                        },
                                        [
                                          _vm._v(
                                            "\n                                      mdi-play\n                                  "
                                          ),
                                        ]
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
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", lg: "6", md: "6", sm: "12" } },
            [
              _c(
                "v-card",
                { attrs: { color: "black" } },
                [
                  _c(
                    "v-card-title",
                    [
                      _c("h1", { staticStyle: { color: "white" } }, [
                        _vm._v(
                          "\n                      Queue\n                     \n                  "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c("v-btn", { on: { click: _vm.mClear } }, [
                        _vm._v(
                          "\n                          Clear\n                      "
                        ),
                      ]),
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
                          staticClass: "text-center",
                          attrs: {
                            "fixed-header": "",
                            height: _vm.$vuetify.breakpoint.height * 0.7,
                          },
                        },
                        [
                          _vm.queue.length != 0
                            ? _c("thead", [
                                _c(
                                  "tr",
                                  [
                                    _vm._l(
                                      _vm.cQueueHeader,
                                      function (header, i) {
                                        return _c(
                                          "th",
                                          {
                                            key: i,
                                            staticClass: "text-center",
                                          },
                                          [_vm._v(_vm._s(header))]
                                        )
                                      }
                                    ),
                                    _vm._v(" "),
                                    _c("th", { staticClass: "text-center" }, [
                                      _vm._v("Cancel"),
                                    ]),
                                  ],
                                  2
                                ),
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            _vm._l(_vm.queue, function (data, j) {
                              return _c(
                                "tr",
                                { key: j },
                                [
                                  _vm._l(
                                    _vm.cQueueHeader,
                                    function (header, i) {
                                      return _c("td", { key: i }, [
                                        _vm._v(
                                          "\n                                  " +
                                            _vm._s(data[header]) +
                                            "\n                              "
                                        ),
                                      ])
                                    }
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    [
                                      _c(
                                        "v-icon",
                                        {
                                          on: {
                                            click: function ($event) {
                                              return _vm.mToCancel(data)
                                            },
                                          },
                                        },
                                        [
                                          _vm._v(
                                            "\n                                      mdi-close\n                                  "
                                          ),
                                        ]
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
          attrs: { "max-width": "50%", persistent: "" },
          model: {
            value: _vm.toupload,
            callback: function ($$v) {
              _vm.toupload = $$v
            },
            expression: "toupload",
          },
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-card-title",
                [
                  _vm._v("Upload\n          "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c("v-icon", { on: { click: _vm.mCloseUpload } }, [
                    _vm._v("mdi-close"),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c("v-text-field", {
                    attrs: { dense: "", outlined: "" },
                    model: {
                      value: _vm.file.name,
                      callback: function ($$v) {
                        _vm.$set(_vm.file, "name", $$v)
                      },
                      expression: "file.name",
                    },
                  }),
                  _vm._v(" "),
                  _c("v-file-input", {
                    attrs: { dense: "", outlined: "" },
                    model: {
                      value: _vm.file.content,
                      callback: function ($$v) {
                        _vm.$set(_vm.file, "content", $$v)
                      },
                      expression: "file.content",
                    },
                  }),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        block: "",
                        disabled:
                          _vm.file.name == "" || _vm.file.content == null
                            ? true
                            : false,
                      },
                      on: { click: _vm.mUpload },
                    },
                    [
                      _c(
                        "v-progress-circular",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.uploading == true ? true : false,
                              expression: "uploading == true ? true : false",
                            },
                          ],
                          attrs: {
                            color: "primary",
                            rotate: 360,
                            value: _vm.uploadProgress,
                          },
                        },
                        [_vm._v(_vm._s(_vm.uploadProgress) + "%")]
                      ),
                      _vm._v("\n\n                  Upload\n              "),
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