exports.ids = [1];
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

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=template&id=56787a24&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-page"},[_vm._ssrNode("<div class=\"banner\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<h1>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> "),_c('article-meta',{attrs:{"article":_vm.article}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row article-content\"><div class=\"col-md-12\">"+(_vm._s(_vm.article.body))+"</div></div> <hr> "),_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-10 offset-md-1\">","</div>",[_c('article-meta',{attrs:{"article":_vm.article}}),_vm._ssrNode(" <br> "),_c('article-comments',{attrs:{"article":_vm.article}})],2)])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=template&id=56787a24&

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./pages/article/components/article-meta.vue?vue&type=template&id=36008aa8&
var article_metavue_type_template_id_36008aa8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-meta"},[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
      name: 'profile',
      params: {
        username: _vm.article.author.username,
      },
      query: {
        tab: 'my',
      },
    }}},[_c('img',{attrs:{"src":_vm.article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
        name: 'profile',
        params: {
          username: _vm.article.author.username,
        },
      }}},[_vm._v(_vm._s(_vm.article.author.username))]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(_vm.article.createdAt,"MMM DD, YYYY")))+"</span>")],2),_vm._ssrNode(" "),(!_vm.isSelf)?[_vm._ssrNode("<button"+(_vm._ssrClass("btn btn-sm btn-outline-secondary",{
        active: _vm.article.author.following,
      }))+"><i class=\"ion-plus-round\"></i>\n        Follow Eric Simons <span class=\"counter\">(10)</span></button>\n      \n    <button"+(_vm._ssrClass("btn btn-sm btn-outline-primary",{
        active: _vm.article.favorited,
      }))+"><i class=\"ion-heart\"></i>\n        Favorite Post\n      <span class=\"counter\">"+_vm._ssrEscape("("+_vm._s(_vm.article.favoritesCount)+")")+"</span></button>")]:[_c('nuxt-link',{staticClass:"btn btn-outline-secondary btn-sm",attrs:{"to":{
        name: 'editor',
        params: _vm.article.slug,
      }}},[_c('i',{staticClass:"ion-edit"}),_vm._v(" Edit Article\n    ")]),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",_vm.deleteDisabled))+" class=\"btn btn-outline-danger btn-sm\"><i class=\"ion-trash-a\"></i> Delete Article\n    </button>")]],2)}
var article_metavue_type_template_id_36008aa8_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/article-meta.vue?vue&type=template&id=36008aa8&

// EXTERNAL MODULE: ./api/articles.js
var articles = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./pages/article/components/article-meta.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var article_metavue_type_script_lang_js_ = ({
  name: "ArticleMeta",
  props: {
    article: {
      required: true,
      type: Object
    }
  },
  data: () => {
    return {
      deleteDisabled: false
    };
  },
  computed: {
    isSelf() {
      return this.article.author.username === this.$store.state.user.username;
    }

  },
  methods: {
    async deleteArticle(slug) {
      this.deleteDisabled = true;
      const {
        status
      } = await Object(articles["b" /* deleteArticle */])(slug);

      if (status === 200) {
        this.$router.push("/");
      }

      this.deleteDisabled = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/article/components/article-meta.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_metavue_type_script_lang_js_ = (article_metavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/article/components/article-meta.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_article_metavue_type_script_lang_js_,
  article_metavue_type_template_id_36008aa8_render,
  article_metavue_type_template_id_36008aa8_staticRenderFns,
  false,
  injectStyles,
  null,
  "07362b2e"
  
)

/* harmony default export */ var article_meta = (component.exports);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./pages/article/components/article-comments.vue?vue&type=template&id=4c1d3c54&
var article_commentsvue_type_template_id_4c1d3c54_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<form class=\"card comment-form\"><div class=\"card-block\"><textarea placeholder=\"Write a comment...\" rows=\"3\" class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.comment))+"</textarea></div> <div class=\"card-footer\"><img src=\"http://i.imgur.com/Qr71crq.jpg\" class=\"comment-author-img\"> <button class=\"btn btn-sm btn-primary\">\n        Post Comment\n      </button></div></form> "),_vm._l((_vm.comments),function(comment){return _vm._ssrNode("<div class=\"card\">","</div>",[_vm._ssrNode("<div class=\"card-block\"><p class=\"card-text\">"+_vm._ssrEscape("\n        "+_vm._s(comment.body)+"\n      ")+"</p></div> "),_vm._ssrNode("<div class=\"card-footer\">","</div>",[_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{
          name: 'profile',
          params: {
            username: comment.author.username,
          },
        }}},[_c('img',{staticClass:"comment-author-img",attrs:{"src":comment.author.image}})]),_vm._ssrNode("\n       \n      "),_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{
          name: 'profile',
          params: {
            username: comment.author.username,
          },
        }}},[_vm._v(_vm._s(comment.author.username))]),_vm._ssrNode(" <span class=\"date-posted\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(comment.createdAt,"MMM DD, YYYY")))+"</span> <span class=\"mod-options\"><i class=\"ion-trash-a\"></i></span>")],2)],2)})],2)}
var article_commentsvue_type_template_id_4c1d3c54_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/article-comments.vue?vue&type=template&id=4c1d3c54&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./pages/article/components/article-comments.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var article_commentsvue_type_script_lang_js_ = ({
  name: "ArticleComments",
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  data: () => {
    return {
      comment: "",
      comments: []
    };
  },
  methods: {
    async postComment() {
      const {
        data,
        status
      } = await Object(articles["j" /* postArticleComments */])(this.article.slug, {
        comment: {
          body: this.comment
        }
      });

      if (status === 200) {
        this.comment = "";
        this.getArticleComments();
      }
    },

    async getArticleComments() {
      const {
        data
      } = await Object(articles["f" /* getArticleComments */])(this.article.slug);
      this.comments = data.comments;
    },

    async deleteArticleComments(article, comment) {
      const {
        data,
        status
      } = await Object(articles["c" /* deleteArticleComments */])(article.slug, comment.id);

      if (status === 200) {
        this.getArticleComments();
      }
    }

  },

  mounted() {
    this.getArticleComments();
  }

});
// CONCATENATED MODULE: ./pages/article/components/article-comments.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_commentsvue_type_script_lang_js_ = (article_commentsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/components/article-comments.vue



function article_comments_injectStyles (context) {
  
  
}

/* normalize component */

var article_comments_component = Object(componentNormalizer["a" /* default */])(
  components_article_commentsvue_type_script_lang_js_,
  article_commentsvue_type_template_id_4c1d3c54_render,
  article_commentsvue_type_template_id_4c1d3c54_staticRenderFns,
  false,
  article_comments_injectStyles,
  null,
  "4f38731d"
  
)

/* harmony default export */ var article_comments = (article_comments_component.exports);
// EXTERNAL MODULE: external "markdown-it"
var external_markdown_it_ = __webpack_require__(27);
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var articlevue_type_script_lang_js_ = ({
  name: "Article",
  components: {
    ArticleMeta: article_meta,
    ArticleComments: article_comments
  },

  head() {
    return {
      title: this.article.title,
      meta: [{
        hid: "description",
        name: "description",
        content: this.article.description
      }]
    };
  },

  async asyncData({
    params
  }) {
    try {
      const {
        data
      } = await Object(articles["g" /* getArticleDetails */])(params.slug);
      const {
        article
      } = data;
      const md = new external_markdown_it_default.a();
      article.body = md.render(article.body);
      console.log(article.author);
      return {
        article
      };
    } catch (error) {}
  }

});
// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_articlevue_type_script_lang_js_ = (articlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/index.vue



function article_injectStyles (context) {
  
  
}

/* normalize component */

var article_component = Object(componentNormalizer["a" /* default */])(
  pages_articlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  article_injectStyles,
  null,
  "0ff954eb"
  
)

/* harmony default export */ var pages_article = __webpack_exports__["default"] = (article_component.exports);

/***/ })

};;
//# sourceMappingURL=1.js.map