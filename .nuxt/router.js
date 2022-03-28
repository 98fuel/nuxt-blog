import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _00d4dbe2 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _62de30ac = () => interopDefault(import('..\\pages\\archives.vue' /* webpackChunkName: "pages/archives" */))
const _182b45b5 = () => interopDefault(import('..\\pages\\link.vue' /* webpackChunkName: "pages/link" */))
const _62e2e12d = () => interopDefault(import('..\\pages\\love.vue' /* webpackChunkName: "pages/love" */))
const _29e05fc8 = () => interopDefault(import('..\\pages\\message.vue' /* webpackChunkName: "pages/message" */))
const _c66e10ba = () => interopDefault(import('..\\pages\\search.vue' /* webpackChunkName: "pages/search" */))
const _9636d27a = () => interopDefault(import('..\\pages\\categories\\_slug.vue' /* webpackChunkName: "pages/categories/_slug" */))
const _4f3215dc = () => interopDefault(import('..\\pages\\posts\\_slug.vue' /* webpackChunkName: "pages/posts/_slug" */))
const _0d428a66 = () => interopDefault(import('..\\pages\\tags\\_slug.vue' /* webpackChunkName: "pages/tags/_slug" */))
const _208cb6a7 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _00d4dbe2,
    name: "about"
  }, {
    path: "/archives",
    component: _62de30ac,
    name: "archives"
  }, {
    path: "/link",
    component: _182b45b5,
    name: "link"
  }, {
    path: "/love",
    component: _62e2e12d,
    name: "love"
  }, {
    path: "/message",
    component: _29e05fc8,
    name: "message"
  }, {
    path: "/search",
    component: _c66e10ba,
    name: "search"
  }, {
    path: "/categories/:slug?",
    component: _9636d27a,
    name: "categories-slug"
  }, {
    path: "/posts/:slug?",
    component: _4f3215dc,
    name: "posts-slug"
  }, {
    path: "/tags/:slug?",
    component: _0d428a66,
    name: "tags-slug"
  }, {
    path: "/",
    component: _208cb6a7,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
