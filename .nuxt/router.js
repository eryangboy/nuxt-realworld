import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f949b6d4 = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _7c44894b = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _0c84e87d = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _4fd8e486 = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _88c38ae2 = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _778c4ad9 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _82445dec = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _f949b6d4,
    children: [{
      path: "/",
      component: _7c44894b,
      name: "home"
    }, {
      path: "/login",
      component: _0c84e87d,
      name: "login"
    }, {
      path: "/register",
      component: _0c84e87d,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _4fd8e486,
      name: "profile"
    }, {
      path: "/settings",
      component: _88c38ae2,
      name: "settings"
    }, {
      path: "/editor/:slug",
      component: _778c4ad9,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _82445dec,
      name: "article"
    }]
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
