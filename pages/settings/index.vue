<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>

          <form>
            <fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control"
                  type="text"
                  placeholder="URL of profile picture"
                  v-model="user.image"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Your Name"
                  v-model="user.username"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control form-control-lg"
                  rows="8"
                  placeholder="Short bio about you"
                  v-model="user.bio"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                  v-model="user.email"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  v-model="user.password"
                />
              </fieldset>
              <button
                class="btn btn-lg btn-primary pull-xs-right"
                :disabled="user.updateDisabled"
                @click.prevent="onUpdate"
              >
                Update Settings
              </button>
            </fieldset>
          </form>
          <hr />
          <button class="btn btn-outline-danger" @click="onLogout">
            Or click here to logout.
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getUser, updateUser } from "@/api/user";
const Cookie = process.client ? require("js-cookie") : undefined;

export default {
  name: "Settings",
  middleware: "authenticated",
  data: () => {
    return {
      user: {},
    };
  },
  methods: {
    // 退出登录
    onLogout() {
      Cookie.remove("user");
      this.$store.commit("setUser", null);
      this.$router.push("/");
    },

    // 获取用户信息
    async getUser() {
      const { data, status } = await getUser();
      this.user = data.user;
      this.user.updateDisabled = false;
    },
    // 修改用户信息
    async onUpdate() {
      this.user.updateDisabled = true;
      const { data, status } = await updateUser({ user: this.user });

      if (status === 200) {
        this.$store.commit("setUser", data.user);
        this.$router.push("/");
        this.user.updateDisabled = false;
      }
    },
  },
  mounted() {
    this.getUser();
  },
};
</script>

<style></style>
