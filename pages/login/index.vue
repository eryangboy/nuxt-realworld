<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">{{ isLogin ? "Sign in" : "Sign up" }}</h1>
          <p class="text-xs-center">
            <nuxt-link v-if="isLogin" to="/register">
              Need an account?</nuxt-link
            >
            <nuxt-link v-else to="/login">
              Have an account?
            </nuxt-link>
          </p>

          <ul class="error-messages">
            <template v-for="(messages, field) in errors">
              <li v-for="(message, index) in messages" :key="index">
                {{ field }} {{ message }}
              </li>
            </template>
          </ul>

          <form @submit.prevent="onSubmit">
            <fieldset v-if="!isLogin" class="form-group">
              <input
                required
                class="form-control form-control-lg"
                type="text"
                v-model="user.username"
                placeholder="Your Name"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                required
                class="form-control form-control-lg"
                type="email"
                v-model="user.email"
                placeholder="Email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                required
                class="form-control form-control-lg"
                type="password"
                v-model="user.password"
                placeholder="Password"
                minlength="8"
              />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              {{ isLogin ? "Sign in" : "Sign up" }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login, register } from "@/api/user";
const Cookie = process.client ? require("js-cookie") : undefined;

export default {
  name: "loginPage",
  middleware: "notAuthenticated",
  data: () => {
    return {
      user: {
        username: "",
        email: "",
        password: "",
      },
      errors: [], // 错误信息
    };
  },
  computed: {
    isLogin() {
      return this.$route.name === "login";
    },
  },
  methods: {
    // 提交表单登录
    async onSubmit() {
      try {
        const { data } = this.isLogin
          ? await login({
              user: this.user,
            })
          : await register({
              user: this.user,
            });

        // 把用户信息存储到store中
        this.$store.commit("setUser", data.user);

        // 把用户信息存储到cookie中
        Cookie.set("user", data.user);

        // 登陆成功后，跳转至首页
        this.$router.push("/");
      } catch (error) {
        // 存储错误信息
        this.errors = error.response.data.errors;
      }
    },
  },
};
</script>

<style></style>
