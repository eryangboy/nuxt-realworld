<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <h1>{{ article.title }}</h1>
        <article-meta :article="article" />
      </div>
    </div>

    <div class="container page">
      <div class="row article-content">
        <div class="col-md-12" v-html="article.body"></div>
      </div>

      <hr />

      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <article-meta :article="article" />
          <br />
          <article-comments :article="article" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleMeta from "./components/article-meta";
import ArticleComments from "./components/article-comments";
import { getArticleDetails } from "@/api/articles";
import MarkdownIt from "markdown-it";
export default {
  name: "Article1",
  components: { ArticleMeta, ArticleComments },
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.article.description,
        },
      ],
    };
  },
  async asyncData({ params }) {
    try {
      const { data } = await getArticleDetails(params.slug);
      const { article } = data;
      const md = new MarkdownIt();
      article.body = md.render(article.body);
      console.log(article.author);
      return {
        article,
      };
    } catch (error) {}
  },
};
</script>

<style></style>
