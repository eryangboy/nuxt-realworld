exports.ids = [2];
exports.modules = {

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getFeedArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deleteFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getArticleDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getArticleComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return postArticleComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return deleteArticleComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return publishArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return editArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteArticle; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
 // 获取公共文章列表

const getArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "get",
    url: "/api/articles",
    params
  });
}; // 获取用户关注的文章列表

const getFeedArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "get",
    url: "/api/articles/feed",
    params
  });
}; // 添加点赞

const addFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "post",
    url: `/api/articles/${slug}/favorite`
  });
}; // 取消点赞

const deleteFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "delete",
    url: `/api/articles/${slug}/favorite`
  });
}; // 获取文章详情

const getArticleDetails = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "get",
    url: `/api/articles/${slug}`
  });
}; // 获取文章评论

const getArticleComments = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "get",
    url: `/api/articles/${slug}/comments`
  });
}; // 发表文章评论

const postArticleComments = (slug, data) => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "post",
    url: `/api/articles/${slug}/comments`,
    data
  });
}; //删除文章平路

const deleteArticleComments = (slug, id) => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "delete",
    url: `/api/articles/${slug}/comments/${id}`
  });
}; // 发表文章

const publishArticle = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "post",
    url: "/api/articles",
    data
  });
}; // 修改文章

const editArticle = (slug, data) => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "put",
    url: `/api/articles/${slug}`,
    data
  });
}; // 删除文章

const deleteArticle = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "delete",
    url: `/api/articles/${slug}`
  });
};

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./pages/editor/index.vue?vue&type=template&id=06740dee&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"editor-page"},[_vm._ssrNode("<div class=\"container page\"><div class=\"row\"><div class=\"col-md-10 offset-md-1 col-xs-12\"><ul class=\"error-messages\">"+(_vm._ssrList((_vm.errors),function(item,key){return ((_vm._ssrList((item),function(error){return ("<li>"+_vm._ssrEscape("\n              "+_vm._s(key)+" "+_vm._s(error)+"\n            ")+"</li>")})))}))+"</ul> <form><fieldset><fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Article Title\" required=\"required\""+(_vm._ssrAttr("value",(_vm.article.title)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"What's this article about?\" required=\"required\""+(_vm._ssrAttr("value",(_vm.article.description)))+" class=\"form-control\"></fieldset> <fieldset class=\"form-group\"><textarea rows=\"8\" placeholder=\"Write your article (in markdown)\" required=\"required\" class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.article.body))+"</textarea></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Enter tags\""+(_vm._ssrAttr("value",(_vm.tag)))+" class=\"form-control\"> <div class=\"tag-list\">"+(_vm._ssrList((_vm.article.tagList),function(item,index){return ("<span class=\"tag-default tag-pill\"><i class=\"ion-close-round\"></i>"+_vm._ssrEscape("\n                  "+_vm._s(item)+"\n                ")+"</span>")}))+"</div></fieldset> <button type=\"button\""+(_vm._ssrAttr("disabled",_vm.article.disabled))+" class=\"btn btn-lg pull-xs-right btn-primary\">\n              Publish Article\n            </button></fieldset></form></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/editor/index.vue?vue&type=template&id=06740dee&

// EXTERNAL MODULE: ./api/articles.js
var articles = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./pages/editor/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var editorvue_type_script_lang_js_ = ({
  name: "Editor",
  middleware: "authenticated",
  data: () => {
    return {
      article: {
        // 文章信息
        title: "",
        description: "",
        body: "",
        disabled: false,
        tagList: []
      },
      tag: "",
      // 标签文字
      errors: {} //错误信息

    };
  },
  computed: {
    // 是否是创建或者修改
    isCreate() {
      return this.$route.params.slug === "null";
    }

  },
  methods: {
    async getArticleDetails(slug) {
      const {
        data,
        status
      } = await Object(articles["g" /* getArticleDetails */])(slug);
      this.article = data.article;
    },

    async onPublish(e) {
      this.article.disabled = true;

      try {
        const {
          data,
          status
        } = this.isCreate ? await Object(articles["k" /* publishArticle */])({
          article: this.article
        }) : await Object(articles["e" /* editArticle */])(this.article.slug, {
          article: this.article
        });

        if (status === 200) {
          const {
            article
          } = data;
          this.$router.push({
            name: "article",
            params: {
              slug: article.slug
            }
          });
        }
      } catch (error) {
        this.errors = error.response.data.errors; // console.dir(this.errors);
      }

      this.article.disabled = false;
    },

    onTagEnter(e) {
      if (e.target.value) {
        this.article.tagList.push(e.target.value);
        this.tag = "";
      }
    },

    deleteTag(index) {
      this.article.tagList.splice(index, 1);
    }

  },

  mounted() {
    const {
      slug
    } = this.$route.params;

    if (slug !== "null") {
      this.getArticleDetails(slug);
    }
  }

});
// CONCATENATED MODULE: ./pages/editor/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_editorvue_type_script_lang_js_ = (editorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/editor/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_editorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "faa851a0"
  
)

/* harmony default export */ var editor = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=2.js.map