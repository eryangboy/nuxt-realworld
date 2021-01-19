<template>
  <div class="article-meta">
    <nuxt-link
      :to="{
        name: 'profile',
        params: {
          username: article.author.username,
        },
        query: {
          tab: 'my',
        },
      }"
      class="author"
      ><img :src="article.author.image"
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
      <span class="date">{{ article.createdAt | date("MMM DD, YYYY") }}</span>
    </div>
    <template v-if="!isSelf">
      <button
        class="btn btn-sm btn-outline-secondary"
        :class="{
          active: article.author.following,
        }"
      >
        <i class="ion-plus-round"></i>
        &nbsp; Follow Eric Simons <span class="counter">(10)</span>
      </button>
      &nbsp;&nbsp;
      <button
        class="btn btn-sm btn-outline-primary"
        :class="{
          active: article.favorited,
        }"
      >
        <i class="ion-heart"></i>
        &nbsp; Favorite Post
        <span class="counter">({{ article.favoritesCount }})</span>
      </button>
    </template>
    <template v-else>
      <nuxt-link
        :to="{
          name: 'editor',
          params: article.slug,
        }"
        class="btn btn-outline-secondary btn-sm"
      >
        <i class="ion-edit"></i> Edit Article
      </nuxt-link>

      <button
        class="btn btn-outline-danger btn-sm"
        :disabled="deleteDisabled"
        @click="deleteArticle(article.slug)"
      >
        <i class="ion-trash-a"></i> Delete Article
      </button>
    </template>
  </div>
</template>

<script>
import { deleteArticle } from "@/api/articles";
export default {
  name: "ArticleMeta",
  props: {
    article: {
      required: true,
      type: Object,
    },
  },
  data: () => {
    return { deleteDisabled: false };
  },
  computed: {
    isSelf() {
      return this.article.author.username === this.$store.state.user.username;
    },
  },
  methods: {
    async deleteArticle(slug) {
      this.deleteDisabled = true;
      const { status } = await deleteArticle(slug);
      if (status === 200) {
        this.$router.push("/");
      }
      this.deleteDisabled = false;
    },
  },
};
</script>

<style></style>
