<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <ul class="error-messages">
            <template v-for="(item, key) in errors">
              <li v-for="error in item" :key="key + error">
                {{ key }} {{ error }}
              </li>
            </template>
          </ul>
          <form>
            <fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Article Title"
                  v-model="article.title"
                  required
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="What's this article about?"
                  v-model="article.description"
                  required
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control"
                  rows="8"
                  placeholder="Write your article (in markdown)"
                  v-model="article.body"
                  required
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter tags"
                  v-model="tag"
                  @keyup.enter="onTagEnter"
                />
                <div class="tag-list">
                  <span
                    class="tag-default tag-pill"
                    v-for="(item, index) in article.tagList"
                    :key="item"
                  >
                    <i class="ion-close-round" @click="deleteTag(index)"></i>
                    {{ item }}
                  </span>
                </div>
              </fieldset>
              <button
                class="btn btn-lg pull-xs-right btn-primary"
                type="button"
                @click="onPublish"
                :disabled="article.disabled"
              >
                Publish Article
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticleDetails, publishArticle, editArticle } from "@/api/articles";
export default {
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
        tagList: [],
      },
      tag: "", // 标签文字
      errors: {}, //错误信息
    };
  },
  computed: {
    // 是否是创建或者修改
    isCreate() {
      return this.$route.params.slug === "null";
    },
  },
  methods: {
    async getArticleDetails(slug) {
      const { data, status } = await getArticleDetails(slug);
      this.article = data.article;
    },

    async onPublish(e) {
      this.article.disabled = true;

      try {
        const { data, status } = this.isCreate
          ? await publishArticle({
              article: this.article,
            })
          : await editArticle(this.article.slug, { article: this.article });

        if (status === 200) {
          const { article } = data;
          this.$router.push({
            name: "article",
            params: { slug: article.slug },
          });
        }
      } catch (error) {
        this.errors = error.response.data.errors;
        // console.dir(this.errors);
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
    },
  },
  mounted() {
    const { slug } = this.$route.params;
    if (slug !== "null") {
      this.getArticleDetails(slug);
    }
  },
};
</script>

<style></style>
