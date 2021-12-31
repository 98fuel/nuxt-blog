exports.ids = [4];
exports.modules = {

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getPagerCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return formatDateArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formatArticles; });
function getArticles(page, perPage, articles) {
  const start = (page - 1) * perPage;
  const end = start + perPage;
  return articles.slice(start, end);
}
function getPagerCount(totalCount, perCount) {
  let pagerCount = 0;

  if (totalCount % perCount === 0) {
    pagerCount = totalCount / perCount;
  } else {
    pagerCount = (totalCount - totalCount % perCount) / perCount + 1;
  }

  return pagerCount;
} // 显示 年、月、日

function formatDate(date) {
  let year = new Date(date).getFullYear();
  let month = new Date(date).getMonth() + 1;
  let day = new Date(date).getDate();
  month = month < 10 ? `0${month}` : month;
  day = day < 10 ? `0${day}` : day;
  return `${year}年${month}月${day}日`;
} // 显示 月、日

function formatDateArticle(date) {
  let month = new Date(date).getMonth() + 1;
  let day = new Date(date).getDate();
  month = month < 10 ? `0${month}` : month;
  day = day < 10 ? `0${day}` : day;
  return `${month}月${day}日`;
}
function formatArticles(articles, perCount) {
  let chunkResult = chunkArr(articles, perCount);
  let result = [];

  for (let i = 0; i < chunkResult.length; i++) {
    // 抽离
    let datas = sortArr(chunkResult[i], 'date'); // 根据所给数据结构进行赋值

    result.push([]);

    for (let j = 0; j < datas.length; j++) {
      result[i].push({
        date: new Date(datas[j][0].date).getFullYear(),
        articles: []
      });
    }

    for (let k = 0; k < result[i].length; k++) {
      result[i][k].articles = sortArr(chunkResult[i], 'date')[k];
    }
  }

  return result[0];
}

function chunkArr(array, size) {
  // 获取数组的长度，如果你传入的不是数组，那么获取到的就是undefined
  const length = array.length; // 判断不是数组，或者size没有设置，size小于1，就返回空数组

  if (!length || !size || size < 1) {
    return [];
  } // 用来表示切割元素的范围start


  let index = 0; // 用来递增表示输出数组的下标

  let resIndex = 0; // 根据length和size算出输出数组的长度，并且创建它。

  let result = new Array(Math.ceil(length / size)); // 进行循环

  while (index < length) {
    // 循环过程中设置result[0]和result[1]的值。该值根据array.slice切割得到。
    result[resIndex++] = array.slice(index, index += size);
  } // 输出新数组
  // return result


  return result;
}

function sortArr(array, prop) {
  let result = [];
  let entry = [];
  let temp = 0; // 按照特定的参数将数组排序将具有相同值得排在一起

  array = array.sort((a, b) => {
    return a[prop] > b[prop] ? -1 : 1;
  });

  if (array.length) {
    temp = new Date(array[0][prop]).getFullYear();
  } // 将相同类别的对象添加到统一个数组


  for (let i = 0; i < array.length; i++) {
    if (new Date(array[i][prop]).getFullYear() === temp) {
      entry.push(array[i]);
    } else {
      temp = new Date(array[i][prop]).getFullYear();
      result.push(entry);
      entry = [array[i]];
    }
  } // 将最后的内容推出新数组


  result.push(entry);
  return result;
}

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return perHomeCount; });
// 首页每页显示文章数量
const perHomeCount = 7;

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(173);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("18661e2f", content, true, context)
};

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(175);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("a8275a60", content, true, context)
};

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Pager.vue?vue&type=template&id=6eaf9cc2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pager",class:{hide: _vm.hideIfOnePage && _vm.totalPage <= 1}},[_vm._ssrNode("<span"+(_vm._ssrClass("pager-item prev-nav",{hidden: _vm.currentPage === 1}))+" data-v-6eaf9cc2>\n   上一页\n  </span> "+(_vm._ssrList((_vm.pages),function(page,index){return (((page === _vm.currentPage)?("<span class=\"pager-item current\" data-v-6eaf9cc2>"+_vm._ssrEscape(_vm._s(page))+"</span>"):(page === '···')?("<span class=\"pager-item separator\" data-v-6eaf9cc2>···</span>"):("<span class=\"pager-item other\" data-v-6eaf9cc2>"+_vm._ssrEscape(_vm._s(page))+"</span>")))}))+" <span"+(_vm._ssrClass("pager-item next-nav",{hidden: _vm.currentPage === _vm.totalPage}))+" data-v-6eaf9cc2>\n    下一页\n  </span>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Pager.vue?vue&type=template&id=6eaf9cc2&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Pager.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Pagervue_type_script_lang_js_ = ({
  name: 'Pager',
  props: {
    totalPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    hideIfOnePage: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    pages() {
      let pages = [1, this.totalPage, this.currentPage, this.currentPage - 1, this.currentPage - 2, this.currentPage + 1, this.currentPage + 2];
      let u = unique(pages.filter(n => n >= 1 && n <= this.totalPage).sort((a, b) => a - b));
      let u2 = u.reduce((prev, current, index, array) => {
        prev.push(current);

        if (array[index + 1] !== undefined && array[index + 1] - array[index] > 1) {
          prev.push('···');
        }

        return prev;
      }, []);
      return u2;
    }

  },
  methods: {
    onClickPage(n) {
      if (n >= 1 && n <= this.totalPage) {
        this.$emit('update:currentPage', n);
      }
    }

  }
});

function unique(array) {
  // return [...new Set(array)]
  const object = [];
  array.map(number => {
    object[number] = true;
  });
  return Object.keys(object).map(s => parseInt(s, 10));
}
// CONCATENATED MODULE: ./components/Pager.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Pagervue_type_script_lang_js_ = (Pagervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Pager.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(172)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Pagervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6eaf9cc2",
  "654d37fd"
  
)

/* harmony default export */ var Pager = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pager_vue_vue_type_style_index_0_id_6eaf9cc2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(146);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pager_vue_vue_type_style_index_0_id_6eaf9cc2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pager_vue_vue_type_style_index_0_id_6eaf9cc2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pager_vue_vue_type_style_index_0_id_6eaf9cc2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pager_vue_vue_type_style_index_0_id_6eaf9cc2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pager_vue_vue_type_style_index_0_id_6eaf9cc2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".pager[data-v-6eaf9cc2]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.pager.hide[data-v-6eaf9cc2]{display:none}.pager .pager-item[data-v-6eaf9cc2]{display:inline-flex;justify-content:center;align-items:center;background-color:#fff;font-size:14px;height:36px;line-height:36px;padding:6px 10px;color:#444;margin:0 3px;cursor:pointer;border:1px solid #ddd}.pager .pager-item[data-v-6eaf9cc2]:not(.separator):hover{background-color:#f8f8f8;border-color:#999}.pager .pager-item:not(.separator).current[data-v-6eaf9cc2]{cursor:default;background-color:#f8f8f8;border-color:#999}.pager .pager-item.separator[data-v-6eaf9cc2]{font-weight:700;cursor:default;border:none}.pager .pager-item.prev-nav[data-v-6eaf9cc2]{float:left;margin:0}.pager .pager-item.prev-nav[data-v-6eaf9cc2]:before{font-family:FontAwesome;content:\"\";padding-right:.3em}.pager .pager-item.prev-nav.hidden[data-v-6eaf9cc2]{display:none}.pager .pager-item.next-nav[data-v-6eaf9cc2]{float:right;margin:0}.pager .pager-item.next-nav[data-v-6eaf9cc2]:after{font-family:FontAwesome;content:\"\";padding-left:.3em}.pager .pager-item.next-nav.hidden[data-v-6eaf9cc2]{display:none}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_256e84a1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(147);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_256e84a1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_256e84a1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_256e84a1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_256e84a1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_256e84a1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".wrapper[data-v-256e84a1]{padding:0 2%}.wrapper .article[data-v-256e84a1]{padding:25px 3% 15px;margin-top:20px;border-radius:4px;box-shadow:0 1px 3px rgba(0,0,0,.05);background:#fff}.wrapper .article .article-title[data-v-256e84a1]{margin:0;color:#000;text-align:left;font-weight:500;font-size:1.4rem}.wrapper .article .article-title a[data-v-256e84a1]{position:relative}.wrapper .article .article-title a[data-v-256e84a1]:hover{color:#444}.wrapper .article .article-title a[data-v-256e84a1]:after{content:\"\";width:0;height:2px;background:#444;position:absolute;left:0;bottom:0;transition:all .2s linear}.wrapper .article .article-title a[data-v-256e84a1]:hover:after{width:100%}.wrapper .article .link[data-v-256e84a1]{color:inherit}.wrapper .article .article-meta[data-v-256e84a1]{padding:0;margin:0;color:#6e7173;font-size:.94em;text-indent:.15em;display:flex;align-items:center;flex-wrap:wrap;opacity:.8}.wrapper .article .article-meta .article-date[data-v-256e84a1]{margin-right:12px}.wrapper .article .article-meta .article-date[data-v-256e84a1]:before{font-family:FontAwesome;content:\"\";padding-right:.3em}.wrapper .article .article-meta .article-category[data-v-256e84a1]{display:flex;align-items:center;flex-wrap:wrap}.wrapper .article .article-meta .article-category .link[data-v-256e84a1]{margin-right:6px}.wrapper .article .article-meta .article-category[data-v-256e84a1]:before{font-family:FontAwesome;content:\"\";padding-right:.3em}.wrapper .article .article-content[data-v-256e84a1]{font-size:15px;line-height:1.77;color:#444;padding-top:15px;text-align:justify;text-justify:distribute;word-break:normal;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden;max-height:140px;font-family:HYQiHei}.wrapper .article .article-more[data-v-256e84a1]{display:flex;justify-content:flex-end;margin-top:10px}.wrapper .article .article-more .link[data-v-256e84a1]{font-size:14px;color:#444;padding:5px 10px;border:1px solid #ddd;border-radius:5px}.wrapper .article .article-more .link[data-v-256e84a1]:after{font-family:FontAwesome;content:\"\";padding-left:.3em}.wrapper .article .article-more .link[data-v-256e84a1]:hover{background:#f8f8f8}.wrapper .navigator[data-v-256e84a1]{list-style:none;margin-top:25px;padding:25px 0 0;font-size:14px;text-align:center}@media(max-width:520px){.wrapper .article .article-title[data-v-256e84a1]{font-size:1.2rem;font-weight:600}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=256e84a1&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wrapper"},[_vm._l((_vm.articles),function(article){return _vm._ssrNode("<article class=\"article\" data-v-256e84a1>","</article>",[_vm._ssrNode("<h1 class=\"article-title\" data-v-256e84a1>","</h1>",[_c('nuxt-link',{staticClass:"link",attrs:{"to":article.path}},[_vm._v(_vm._s(article.attributes.title))])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"article-meta\" data-v-256e84a1>","</div>",[_vm._ssrNode("<div class=\"article-date\" data-v-256e84a1>"+_vm._ssrEscape(_vm._s(_vm.formatDate(article.attributes.date)))+"</div> "),_vm._ssrNode("<div class=\"article-category\" data-v-256e84a1>","</div>",_vm._l((article.attributes.categories),function(category){return _c('nuxt-link',{key:category,staticClass:"link",attrs:{"to":("/categories/" + category)}},[_vm._v(_vm._s(category))])}),1)],2),_vm._ssrNode(" <div class=\"article-content markdown-body\" data-v-256e84a1>"+(_vm._s(article.summary))+"</div> "),_vm._ssrNode("<div class=\"article-more\" data-v-256e84a1>","</div>",[_c('nuxt-link',{staticClass:"link",attrs:{"to":article.path}},[_vm._v("阅读全文")])],1)],2)}),_vm._ssrNode(" "),_vm._ssrNode("<nav class=\"navigator\" data-v-256e84a1>","</nav>",[_c('pager',{attrs:{"hide-if-one-page":false,"total-page":_vm.pagerCount,"current-page":_vm.currentPage},on:{"update:currentPage":[function($event){_vm.currentPage=$event},_vm.updatePage],"update:current-page":function($event){_vm.currentPage=$event}}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=256e84a1&scoped=true&

// EXTERNAL MODULE: ./components/Pager.vue + 4 modules
var Pager = __webpack_require__(150);

// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__(143);

// EXTERNAL MODULE: ./util/index.js
var util = __webpack_require__(136);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  async asyncData() {
    const context = await __webpack_require__(20); // console.log(context(context.keys()[0]))

    const articles = await context.keys().map(key => ({ ...context(key),
      summary: context(key).html.split('<!-- more -->')[0],
      path: `/posts/${key.replace('.md', '').replace('./', '')}`
    })); // TODO 使用脚本来生成文章，默认添加标题和时间，根据生成时的创建时间来排序

    articles.sort((a, b) => new Date(b.attributes.date).getTime() - new Date(a.attributes.date).getTime());
    return {
      articles: Object(util["d" /* getArticles */])(1, config["a" /* perHomeCount */], articles),
      allArticles: articles
    };
  },

  components: {
    Pager: Pager["default"]
  },

  data() {
    return {
      currentPage: 1
    };
  },

  computed: {
    pagerCount() {
      return Object(util["e" /* getPagerCount */])(this.allArticles.length, config["a" /* perHomeCount */]);
    }

  },
  methods: {
    updatePage(page) {
      this.currentPage = page;
      this.articles = Object(util["d" /* getArticles */])(page, config["a" /* perHomeCount */], this.allArticles);
    },

    formatDate(date) {
      return Object(util["b" /* formatDate */])(date);
    }

  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(174)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "256e84a1",
  "94f9526c"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Pager: __webpack_require__(150).default})


/***/ })

};;
//# sourceMappingURL=index.js.map