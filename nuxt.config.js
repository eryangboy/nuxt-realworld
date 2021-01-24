export default {
  router: {
    linkActiveClass: "active",
    server: {
      port: 3000, // default: 3000
      host: "0.0.0.0", // default: localhost,
    },
    extendRoutes(routes, resolve) {
      // 清除默认的路由规则
      routes.splice(0);

      routes.push(
        ...[
          {
            path: "/",
            component: resolve(__dirname, "pages/layout"),
            children: [
              {
                name: "home",
                path: "/",
                component: resolve(__dirname, "pages/home"),
              },
              {
                name: "login",
                path: "/login",
                component: resolve(__dirname, "pages/login"),
              },
              {
                name: "register",
                path: "/register",
                component: resolve(__dirname, "pages/login"),
              },
              {
                name: "profile",
                path: "/profile/:username",
                component: resolve(__dirname, "pages/profile"),
              },
              {
                name: "settings",
                path: "/settings",
                component: resolve(__dirname, "pages/settings"),
              },
              {
                name: "editor",
                path: "/editor/:slug",
                component: resolve(__dirname, "pages/editor"),
              },
              {
                name: "article",
                path: "/article/:slug",
                component: resolve(__dirname, "pages/article"),
              },
            ],
          },
        ]
      );
    },
  },
  plugins: ["~/plugins/request.js", "~/plugins/dayjs.js"],
};
