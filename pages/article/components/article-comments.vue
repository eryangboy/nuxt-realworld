<template>
  <div>
    <form class="card comment-form">
      <div class="card-block">
        <textarea
          class="form-control"
          placeholder="Write a comment..."
          rows="3"
          v-model="comment"
        ></textarea>
      </div>
      <div class="card-footer">
        <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
        <button class="btn btn-sm btn-primary" @click.prevent="postComment">
          Post Comment
        </button>
      </div>
    </form>

    <div class="card" v-for="comment in comments" :key="comment.id">
      <div class="card-block">
        <p class="card-text">
          {{ comment.body }}
        </p>
      </div>
      <div class="card-footer">
        <nuxt-link
          :to="{
            name: 'profile',
            params: {
              username: comment.author.username,
            },
          }"
          class="comment-author"
        >
          <img :src="comment.author.image" class="comment-author-img" />
        </nuxt-link>
        &nbsp;
        <nuxt-link
          :to="{
            name: 'profile',
            params: {
              username: comment.author.username,
            },
          }"
          class="comment-author"
          >{{ comment.author.username }}</nuxt-link
        >
        <span class="date-posted">{{
          comment.createdAt | date("MMM DD, YYYY")
        }}</span>
        <span class="mod-options">
          <i
            class="ion-trash-a"
            @click="deleteArticleComments(article, comment)"
          ></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getArticleComments,
  postArticleComments,
  deleteArticleComments,
} from "@/api/articles";
export default {
  name: "ArticleComments",
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  data: () => {
    return {
      comment: "",
      comments: [],
    };
  },
  methods: {
    async postComment() {
      const { data, status } = await postArticleComments(this.article.slug, {
        comment: {
          body: this.comment,
        },
      });
      if (status === 200) {
        this.comment = "";
        this.getArticleComments();
      }
    },
    async getArticleComments() {
      const { data } = await getArticleComments(this.article.slug);
      this.comments = data.comments;
    },
    async deleteArticleComments(article, comment) {
      const { data, status } = await deleteArticleComments(
        article.slug,
        comment.id
      );
      if (status === 200) {
        this.getArticleComments();
      }
    },
  },
  mounted() {
    this.getArticleComments();
  },
};
</script>

<style></style>
