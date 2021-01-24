exports.ids = [4];
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

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=template&id=1657451a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"profile-page"},[_vm._ssrNode("<div class=\"user-info\"><div class=\"container\"><div class=\"row\"><div class=\"col-xs-12 col-md-10 offset-md-1\"><img"+(_vm._ssrAttr("src",_vm.author.image))+" class=\"user-img\"> <h4>"+_vm._ssrEscape(_vm._s(_vm.author.username))+"</h4> <p>"+_vm._ssrEscape("\n            "+_vm._s(_vm.author.bio)+"\n          ")+"</p> "+((_vm.user.username !== _vm.author.username)?("<button"+(_vm._ssrAttr("disabled",_vm.author.followDisabled))+" class=\"btn btn-sm btn-outline-secondary action-btn\"><i class=\"ion-plus-round\"></i>"+_vm._ssrEscape("\n              "+_vm._s(_vm.author.following ? "UnFollow" : "Follow")+"\n            "+_vm._s(_vm.author.username)+"\n          ")+"</button>"):"<!---->")+"</div></div></div></div> "),_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-10 offset-md-1\">","</div>",[_vm._ssrNode("<div class=\"articles-toggle\">","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\">","</ul>",[_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                  active: !_vm.isFavoritedArticles,
                },attrs:{"exact":"","to":{
                  name: '',
                  params: {
                    username: _vm.author.username,
                  },
                  query: {
                    tab: 'my',
                  },
                }}},[_vm._v("My Articles")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                  active: _vm.isFavoritedArticles,
                },attrs:{"exact":"","to":{
                  name: 'profile',
                  params: {
                    username: _vm.author.username,
                  },
                  query: {
                    tab: 'favorite',
                  },
                }}},[_vm._v("Favorited Articles")])],1)],2)]),_vm._ssrNode(" "),_vm._l((_vm.articles),function(article){return _vm._ssrNode("<div class=\"article-preview\">","</div>",[_vm._ssrNode("<div class=\"article-meta\">","</div>",[_c('nuxt-link',{attrs:{"to":{
                name: 'profile',
                params: {
                  username: article.author.username,
                },
              }}},[_c('img',{attrs:{"src":_vm.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
                  name: 'profile',
                  params: {
                    username: article.author.username,
                  },
                }}},[_vm._v(_vm._s(article.author.username))]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(article.createdAt,"MMM DD, YYYY")))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{
                active: article.favorited,
              }))+"><i class=\"ion-heart\"></i>"+_vm._ssrEscape(" "+_vm._s(article.favoritesCount)+"\n            ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{
              name: 'article',
              params: {
                slug: article.slug,
              },
            }}},[_c('h1',[_vm._v("\n              "+_vm._s(article.title)+"\n            ")]),_vm._v(" "),_c('p',[_vm._v(_vm._s(article.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")]),_vm._v(" "),_c('ul',{staticClass:"tag-list"},_vm._l((article.tagList),function(tag){return _c('li',{key:tag,staticClass:"tag-default tag-pill tag-outline"},[_vm._v("\n                "+_vm._s(tag)+"\n              ")])}),0)])],2)}),_vm._ssrNode(" "),_vm._ssrNode("<nav>","</nav>",[_vm._ssrNode("<ul class=\"pagination\">","</ul>",_vm._l((_vm.totalPage),function(item,index){return _vm._ssrNode("<li"+(_vm._ssrClass("page-item",{
                active: item === _vm.page,
              }))+">","</li>",[_c('nuxt-link',{staticClass:"page-link ",attrs:{"to":{
                  name: 'profile',
                  query: {
                    page: item,
                    tab: _vm.tab,
                  },
                }}},[_vm._v(_vm._s(item))])],1)}),0)])],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=template&id=1657451a&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: ./api/articles.js
var api_articles = __webpack_require__(28);

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(6);

// CONCATENATED MODULE: ./api/profile.js
 // 获取标签列表

const getProfile = username => {
  return Object(request["b" /* request */])({
    method: "get",
    url: `/api/profiles/${username}`
  });
}; // 关注用户

const followUser = username => {
  return Object(request["b" /* request */])({
    method: "post",
    url: `/api/profiles/${username}/follow`
  });
}; // 取消关注用户

const unfollowUser = username => {
  return Object(request["b" /* request */])({
    method: "delete",
    url: `/api/profiles/${username}/follow`
  });
};
// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var profilevue_type_script_lang_js_ = ({
  name: "UserProfile",
  middleware: "authenticated",
  computed: { ...Object(external_vuex_["mapState"])(["user"]),

    isFavoritedArticles() {
      return this.$route.query.tab === "favorite";
    },

    totalPage() {
      return Math.ceil(this.articlesCount / this.limit);
    }

  },
  watchQuery: ["tab", "page"],

  async asyncData({
    store,
    params,
    query
  }) {
    const limit = 3;
    const page = Number.parseInt(query.page) || 1;
    const tab = query.tab || "my";
    const {
      username
    } = params;
    const isFavoritedArticles = query.tab === "favorite";
    const postData = isFavoritedArticles ? {
      favorited: username
    } : {
      author: username
    };
    const [articlesRes, userRes] = await Promise.all([Object(api_articles["h" /* getArticles */])(Object.assign(postData, {
      limit: 5,
      offset: (page - 1) * limit
    })), getProfile(username)]);
    const {
      articles,
      articlesCount
    } = articlesRes.data;
    const {
      profile
    } = userRes.data;
    profile.followDisabled = false;
    return {
      author: profile,
      articles,
      articlesCount,
      limit,
      page,
      tab
    };
  },

  methods: {
    // 添加/取消关注
    async followUser(following) {
      // console.log(following);
      this.author.followDisabled = true;
      const loadFollow = following ? unfollowUser : followUser;
      console.log(loadFollow);
      const {
        data,
        status
      } = await loadFollow(this.author.username);

      if (status === 200) {
        this.author.following = data.profile.following;
      }

      this.author.followDisabled = false;
    },

    // 添加/取消点赞
    async handleFavorited(article) {
      console.log(article);
      const loadFavorited = article.favorited ? api_articles["d" /* deleteFavorite */] : api_articles["a" /* addFavorite */];
      const {
        data,
        status
      } = await loadFavorited(article.slug);

      if (status === 200) {
        const index = this.articles.findIndex(item => item.slug === article.slug);

        if (index !== -1) {
          this.articles[index].favorited = data.article.favorited;
        }
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_profilevue_type_script_lang_js_ = (profilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/profile/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_profilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "f8e6c8c8"
  
)

/* harmony default export */ var pages_profile = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=4.js.map