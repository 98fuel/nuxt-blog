exports.ids = [3];
exports.modules = {

/***/ 138:
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
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(160);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("29050b44", content, true, context)
};

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_a3dbb074_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(143);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_a3dbb074_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_a3dbb074_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_a3dbb074_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_a3dbb074_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_a3dbb074_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".wrapper .article[data-v-a3dbb074]{padding:25px 1% 15px}.wrapper .article .archive-category[data-v-a3dbb074]{margin-bottom:1rem}.wrapper .article .archive-category a[data-v-a3dbb074]{display:inline-block;margin-right:20px;padding:4px 10px 0;color:#000;border-bottom:2px solid #000}.wrapper .article .title[data-v-a3dbb074]{font-size:16px;font-weight:400;color:#888}.wrapper .article .archive[data-v-a3dbb074]{padding:10px 0 15px}.wrapper .article .archive .archive-list[data-v-a3dbb074]{font-size:16px;line-height:2;padding-bottom:.8em}.wrapper .article .archive .archive-list .archive-item .archive-time[data-v-a3dbb074]{font-weight:600;margin:0;font-size:1.5rem}.wrapper .article .archive .archive-list .archive-item .article-list[data-v-a3dbb074]{list-style:none;margin:15px 0}.wrapper .article .archive .archive-list .archive-item .article-list .article-item .article-date[data-v-a3dbb074]{padding-right:.7em}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/categories/_slug.vue?vue&type=template&id=a3dbb074&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wrapper"},[_vm._ssrNode("<div class=\"article\" data-v-a3dbb074>","</div>",[_vm._ssrNode("<div class=\"archive-category\" data-v-a3dbb074>","</div>",[_c('nuxt-link',{attrs:{"to":"/categories/技术"}},[_vm._v("技术")]),_vm._ssrNode(" "),_c('nuxt-link',{attrs:{"to":"/categories/随笔"}},[_vm._v("随笔")])],2),_vm._ssrNode(" <h1 class=\"title\" data-v-a3dbb074>"+_vm._ssrEscape("正在查看 "+_vm._s(_vm.keyword)+" 分类下的文章")+"</h1> "),_vm._ssrNode("<div class=\"archive\" data-v-a3dbb074>","</div>",[_vm._ssrNode("<div class=\"archive-list\" data-v-a3dbb074>","</div>",_vm._l((_vm.archives),function(archive){return _vm._ssrNode("<div class=\"archive-item\" data-v-a3dbb074>","</div>",[_vm._ssrNode("<h2 class=\"archive-time\" data-v-a3dbb074>"+_vm._ssrEscape(_vm._s(archive.date))+"</h2> "),_vm._l((archive.articles),function(article){return _vm._ssrNode("<ul class=\"article-list\" data-v-a3dbb074>","</ul>",[_vm._ssrNode("<li class=\"article-item\" data-v-a3dbb074>","</li>",[_vm._ssrNode("<span class=\"article-date\" data-v-a3dbb074>"+_vm._ssrEscape(_vm._s(_vm.formatDateArticle(article.attributes.date)))+"</span> "),_c('nuxt-link',{staticClass:"article-link",attrs:{"to":article.path,"title":article.attributes.title}},[_vm._v(_vm._s(article.attributes.title))])],2)])})],2)}),0)])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/categories/_slug.vue?vue&type=template&id=a3dbb074&scoped=true&

// EXTERNAL MODULE: ./util/index.js
var util = __webpack_require__(138);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/categories/_slug.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  async asyncData({
    isDev,
    route,
    store,
    env,
    params,
    query,
    req,
    res,
    redirect,
    error
  }) {
    const context = await __webpack_require__(19);
    let articles = await context.keys().map(key => ({ ...context(key),
      date: context(key).attributes.date,
      path: `/posts/${key.replace('.md', '').replace('./', '')}`
    }));
    const keyword = route.params.slug;
    articles = articles.filter(article => {
      return article.attributes.categories.indexOf(keyword) !== -1;
    });
    return {
      archives: Object(util["a" /* formatArticles */])(articles, articles.length),
      keyword
    };
  },

  methods: {
    formatDateArticle(date) {
      return Object(util["c" /* formatDateArticle */])(date);
    }

  }
});
// CONCATENATED MODULE: ./pages/categories/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var categories_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/categories/_slug.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(159)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  categories_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "a3dbb074",
  "e0b469fc"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=[_]slug.js.map