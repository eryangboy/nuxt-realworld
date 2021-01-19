<template>
  <div class="profile-page">
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="author.image" class="user-img" />
            <h4>{{ author.username }}</h4>
            <p>
              {{ author.bio }}
            </p>
            <button
              class="btn btn-sm btn-outline-secondary action-btn"
              :disabled="author.followDisabled"
              @click="followUser(author.following)"
              v-if="user.username !== author.username"
            >
              <i class="ion-plus-round"></i>
              &nbsp; {{ author.following ? "UnFollow" : "Follow" }}
              {{ author.username }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <nuxt-link
                  exact
                  :to="{
                    name: '',
                    params: {
                      username: author.username,
                    },
                    query: {
                      tab: 'my',
                    },
                  }"
                  class="nav-link"
                  :class="{
                    active: !isFavoritedArticles,
                  }"
                  >My Articles</nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link
                  exact
                  :to="{
                    name: 'profile',
                    params: {
                      username: author.username,
                    },
                    query: {
                      tab: 'favorite',
                    },
                  }"
                  class="nav-link"
                  :class="{
                    active: isFavoritedArticles,
                  }"
                  >Favorited Articles</nuxt-link
                >
              </li>
            </ul>
          </div>

          <div
            class="article-preview"
            :key="article.slug"
            v-for="article in articles"
          >
            <div class="article-meta">
              <nuxt-link
                :to="{
                  name: 'profile',
                  params: {
                    username: article.author.username,
                  },
                }"
                ><img :src="author.image"
              /></nuxt-link>
              <div class="info">
                <nuxt-link
                  :to="{
                    name: 'profile',
                    params: {
                      username: article.author.username,
                    },
                  }"
                  class="author"
                  >{{ article.author.username }}</nuxt-link
                >
                <span class="date">{{
                  article.createdAt | date("MMM DD, YYYY")
                }}</span>
              </div>
              <button
                class="btn btn-outline-primary btn-sm pull-xs-right"
                :class="{
                  active: article.favorited,
                }"
                @click="handleFavorited(article)"
              >
                <i class="ion-heart"></i> {{ article.favoritesCount }}
              </button>
            </div>
            <nuxt-link
              :to="{
                name: 'article',
                params: {
                  slug: article.slug,
                },
              }"
              class="preview-link"
            >
              <h1>
                {{ article.title }}
              </h1>
              <p>{{ article.description }}</p>
              <span>Read more...</span>
              <ul class="tag-list">
                <li
                  class="tag-default tag-pill tag-outline"
                  :key="tag"
                  v-for="tag in article.tagList"
                >
                  {{ tag }}
                </li>
              </ul>
            </nuxt-link>
          </div>

          <nav>
            <ul class="pagination">
              <li
                class="page-item"
                :class="{
                  active: item === page,
                }"
                v-for="(item, index) in totalPage"
                :key="index"
              >
                <nuxt-link
                  :to="{
                    name: 'profile',
                    query: {
                      page: item,
                      tab: tab,
                    },
                  }"
                  class="page-link "
                  >{{ item }}</nuxt-link
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { getArticles, addFavorite, deleteFavorite } from "@/api/articles";
import { getProfile, followUser, unfollowUser } from "@/api/profile";
export default {
  name: "UserProfile",
  middleware: "authenticated",
  computed: {
    ...mapState(["user"]),
    isFavoritedArticles() {
      return this.$route.query.tab === "favorite";
    },
    totalPage() {
      return Math.ceil(this.articlesCount / this.limit);
    },
  },
  watchQuery: ["tab", "page"],
  async asyncData({ store, params, query }) {
    const limit = 3;
    const page = Number.parseInt(query.page) || 1;

    const tab = query.tab || "my";
    const { username } = params;
    const isFavoritedArticles = query.tab === "favorite";
    const postData = isFavoritedArticles
      ? { favorited: username }
      : { author: username };

    const [articlesRes, userRes] = await Promise.all([
      getArticles(
        Object.assign(postData, {
          limit: 5,
          offset: (page - 1) * limit,
        })
      ),
      getProfile(username),
    ]);
    const { articles, articlesCount } = articlesRes.data;
    const { profile } = userRes.data;
    profile.followDisabled = false;

    return {
      author: profile,
      articles,
      articlesCount,
      limit,
      page,
      tab,
    };
  },
  methods: {
    // 添加/取消关注
    async followUser(following) {
      // console.log(following);
      this.author.followDisabled = true;
      const loadFollow = following ? unfollowUser : followUser;
      console.log(loadFollow);
      const { data, status } = await loadFollow(this.author.username);
      if (status === 200) {
        this.author.following = data.profile.following;
      }
      this.author.followDisabled = false;
    },
    // 添加/取消点赞
    async handleFavorited(article) {
      console.log(article);
      const loadFavorited = article.favorited ? deleteFavorite : addFavorite;
      const { data, status } = await loadFavorited(article.slug);
      if (status === 200) {
        const index = this.articles.findIndex(
          (item) => item.slug === article.slug
        );
        if (index !== -1) {
          this.articles[index].favorited = data.article.favorited;
        }
      }
    },
  },
};
</script>

<style></style>
