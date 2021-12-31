exports.ids = [7];
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

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(169);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("96c26a80", content, true, context)
};

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./1.md": 165,
	"./2.md": 166,
	"./3.md": 167
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 164;

/***/ }),

/***/ 165:
/***/ (function(module, exports) {


module.exports = { 
      attributes: {"date":"2021-12-27 11:34"},
    
      html: "<p>基于 Nuxt.js 的博客基本开发完毕，正在优化具体的代码，拆分组件，使其更合理。<br>\n并在此基础上，增加一些比较不错的功能，如果后续时间充足的话。</p>\n",
     }

/***/ }),

/***/ 166:
/***/ (function(module, exports) {


module.exports = { 
      attributes: {"date":"2021-12-30 16:19"},
    
      html: "<p>新增了一个动态说说页面，不过暂时还没想到更方便的发布方法<br>\n先这样吧，后续我会考虑从其他地方使用接口调用数据</p>\n",
     }

/***/ }),

/***/ 167:
/***/ (function(module, exports) {


module.exports = { 
      attributes: {"date":"2021-12-31 15:26"},
    
      html: "<pre><code>rm -rf ./2021\nmkdir 2022\n</code></pre>\n<p>2021年的最后一天，有些怅然若失...<br>\n然后趁着摸鱼给网站加了一个图片灯箱功能</p>\n",
     }

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_f517fdac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(144);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_f517fdac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_f517fdac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_f517fdac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_f517fdac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_f517fdac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".wrapper[data-v-f517fdac]{padding:0 2%;margin-top:20px}.wrapper .article[data-v-f517fdac]{padding:10px 3% 15px;border-radius:4px;background:#fff;box-shadow:0 2px 2px rgba(0,0,0,.05);transition:all .2s linear;margin-bottom:30px}.wrapper .article[data-v-f517fdac]:hover{box-shadow:0 0 6px 4px rgba(0,0,0,.05)}.wrapper .article .article-meta[data-v-f517fdac]{padding:0;margin:0;color:#6e7173;border-bottom:1px solid #eee;font-size:1.1rem;text-indent:.15em;display:flex;align-items:center;flex-wrap:wrap;opacity:.8}.wrapper .article .article-meta .article-date[data-v-f517fdac]{margin-right:12px}.wrapper .article .article-meta .article-date span[data-v-f517fdac]{font-style:italic;color:#518db4}.wrapper .article .article-content[data-v-f517fdac]{font-size:15px;line-height:1.77;color:#444;padding-top:15px;text-align:justify;text-justify:distribute;font-family:HYQiHei}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/shuoshuo/_slug.vue?vue&type=template&id=f517fdac&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wrapper"},[_vm._ssrNode((_vm._ssrList((_vm.articles),function(article){return ("<article class=\"article\" data-v-f517fdac><div class=\"article-meta\" data-v-f517fdac><div class=\"article-date\" data-v-f517fdac>\n        子舒于\n        <span data-v-f517fdac>"+_vm._ssrEscape(_vm._s(article.attributes.date))+"</span> 发布的动态\n      </div></div> <div class=\"article-content markdown-body\" data-v-f517fdac>"+(_vm._s(article.summary))+"</div></article>")})))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/shuoshuo/_slug.vue?vue&type=template&id=f517fdac&scoped=true&

// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__(143);

// EXTERNAL MODULE: ./util/index.js
var util = __webpack_require__(136);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/shuoshuo/_slug.vue?vue&type=script&lang=js&
//
//
//
//
//
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
  async asyncData() {
    const context = await __webpack_require__(164); // console.log(context(context.keys()[0]))

    const articles = await context.keys().map(key => ({ ...context(key),
      summary: context(key).html.split('<!-- more -->')[0],
      path: `/shuoshuo/${key.replace('.md', '').replace('./', '')}`
    })); // TODO 使用脚本来生成文章，默认添加标题和时间，根据生成时的创建时间来排序

    articles.sort((a, b) => new Date(b.attributes.date).getTime() - new Date(a.attributes.date).getTime());
    return {
      articles: Object(util["d" /* getArticles */])(1, config["a" /* perHomeCount */], articles),
      allArticles: articles
    };
  },

  methods: {
    // updatePage (page) {
    //   this.currentPage = page
    //   this.articles = getArticles(page, perHomeCount, this.allArticles)
    // },
    formatDate(date) {
      return Object(util["b" /* formatDate */])(date);
    }

  }
});
// CONCATENATED MODULE: ./pages/shuoshuo/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var shuoshuo_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/shuoshuo/_slug.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(168)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  shuoshuo_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "f517fdac",
  "54cf2b78"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=[_]slug.js.map