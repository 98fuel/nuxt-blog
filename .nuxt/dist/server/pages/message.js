exports.ids = [5];
exports.modules = {

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(157);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("09be41f8", content, true, context)
};

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(159);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("17733df1", content, true, context)
};

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Comments.vue?vue&type=template&id=cd6e450c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wrapper"},[_vm._ssrNode("<div class=\"archive\" data-v-cd6e450c><h3 data-v-cd6e450c>评论~</h3> <div id=\"tcomment\" data-v-cd6e450c><a href=\"/message\" class=\"reload\" data-v-cd6e450c>点击加载评论功能</a></div> <script src=\"https://cdn.jsdelivr.net/npm/twikoo@1.4.9/dist/twikoo.all.min.js\" data-v-cd6e450c></script> <link rel=\"stylesheet\" href=\"https://cdn.xiabanlo.cn/list/twikoo.css\" data-v-cd6e450c></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Comments.vue?vue&type=template&id=cd6e450c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Comments.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
const envId = 'shuxhan-2gcz5b7m7f845ec3';
const el = '#tcomment';
/* harmony default export */ var Commentsvue_type_script_lang_js_ = ({
  name: 'Comments',

  mounted() {
    this.initTwikoo(); // this.initJs()
  },

  methods: {
    initTwikoo() {
      try {
        twikoo.init({
          envId,
          el // onCommentLoaded: this.initLightGallery

        });
      } catch (e) {}
    } // initLightGallery () {
    //   // This function is compiled to ES5
    //   var commentContents = document.getElementsByClassName('tk-content');
    //   for (var i = 0; i < commentContents.length; i++) {
    //     var commentItem = commentContents[i];
    //     var imgEls = commentItem.getElementsByTagName('img');
    //     if (imgEls.length > 0) {
    //       for (var j = 0; j < imgEls.length; j++) {
    //         var imgEl = imgEls[j];
    //         var aEl = document.createElement('a');
    //         aEl.setAttribute('class', 'tk-lg-link');
    //         aEl.setAttribute('href', imgEl.getAttribute('src'));
    //         aEl.setAttribute('data-src', imgEl.getAttribute('src'));
    //         aEl.appendChild(imgEl.cloneNode(false));
    //         imgEl.parentNode.insertBefore(aEl, imgEl.nextSibling);
    //         imgEl.remove();
    //       }
    //       lightGallery(commentItem, {
    //         selector: '.tk-lg-link',
    //         share: false
    //       });
    //     }
    //   }
    // },
    // initJs () {
    //   const twikooJs = this.$refs.twikooJs
    //   if (twikooJs) {
    //     twikooJs.onload = this.initTwikoo
    //     this.$router.afterEach(this.onRoute)
    //   }
    // },
    // onRoute (to, from) {
    //   if (to.path !== from.path) this.initTwikoo()
    // }


  }
});
// CONCATENATED MODULE: ./components/Comments.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Commentsvue_type_script_lang_js_ = (Commentsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Comments.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(156)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Commentsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "cd6e450c",
  "be3d47ac"
  
)

/* harmony default export */ var Comments = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comments_vue_vue_type_style_index_0_id_cd6e450c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(141);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comments_vue_vue_type_style_index_0_id_cd6e450c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comments_vue_vue_type_style_index_0_id_cd6e450c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comments_vue_vue_type_style_index_0_id_cd6e450c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comments_vue_vue_type_style_index_0_id_cd6e450c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comments_vue_vue_type_style_index_0_id_cd6e450c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".wrapper[data-v-cd6e450c]{padding:0 2%}.wrapper .archive[data-v-cd6e450c]{padding:25px 3% 15px;margin-top:20px;border-radius:4px;box-shadow:0 1px 3px rgba(0,0,0,.05);background:#fff}.wrapper .archive h3[data-v-cd6e450c]{margin-bottom:20px}.wrapper .archive .reload[data-v-cd6e450c]{background:#000;color:#fff;padding:4px 10px;border-radius:4px;transition:all .2s linear}.wrapper .archive .reload[data-v-cd6e450c]:hover{opacity:.9}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_message_vue_vue_type_style_index_0_id_7f855aa0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(142);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_message_vue_vue_type_style_index_0_id_7f855aa0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_message_vue_vue_type_style_index_0_id_7f855aa0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_message_vue_vue_type_style_index_0_id_7f855aa0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_message_vue_vue_type_style_index_0_id_7f855aa0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_message_vue_vue_type_style_index_0_id_7f855aa0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".wrapper[data-v-7f855aa0]{padding:0 2%}.wrapper .archive[data-v-7f855aa0]{padding:25px 3% 15px;margin-top:20px;border-radius:4px;box-shadow:0 1px 3px rgba(0,0,0,.05);background:#fff}.wrapper .archive .article-content[data-v-7f855aa0]{font-family:HYQiHei;line-height:1.8;color:#444;margin-top:20px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/message.vue?vue&type=template&id=7f855aa0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"wrapper\" data-v-7f855aa0><div class=\"archive\" data-v-7f855aa0><h2 data-v-7f855aa0>"+_vm._ssrEscape(_vm._s(_vm.article.attributes.title))+"</h2> <div class=\"article-content markdown-body\" data-v-7f855aa0>"+(_vm._s(_vm.article.html))+"</div></div></div> "),_c('Comments')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/message.vue?vue&type=template&id=7f855aa0&scoped=true&

// EXTERNAL MODULE: ./components/Comments.vue + 4 modules
var Comments = __webpack_require__(150);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/message.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var messagevue_type_script_lang_js_ = ({
  components: {
    Comments: Comments["default"]
  },

  async asyncData({
    params
  }) {
    // 调用 message.md 内的数据
    const article = await __webpack_require__.e(/* import() */ 10).then(__webpack_require__.t.bind(null, 177, 7));
    return {
      article
    };
  }

});
// CONCATENATED MODULE: ./pages/message.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_messagevue_type_script_lang_js_ = (messagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/message.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(158)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_messagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7f855aa0",
  "1cdef37f"
  
)

/* harmony default export */ var message = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Comments: __webpack_require__(150).default})


/***/ })

};;
//# sourceMappingURL=message.js.map