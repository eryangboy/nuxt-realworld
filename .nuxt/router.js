import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f14cd492 = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _148262a8 = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _7b596188 = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _53e340bc = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _8c763120 = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _7b8abbfa = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _3aad8409 = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

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
    component: _f14cd492,
    children: [{
      path: "/",
      component: _148262a8,
      name: "home"
    }, {
      path: "/login",
      component: _7b596188,
      name: "login"
    }, {
      path: "/register",
      component: _7b596188,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _53e340bc,
      name: "profile"
    }, {
      path: "/settings",
      component: _8c763120,
      name: "settings"
    }, {
      path: "/editor/:slug",
      component: _7b8abbfa,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _3aad8409,
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
