import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6d7f4a76 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _784122e9 = () => interopDefault(import('..\\pages\\archives.vue' /* webpackChunkName: "pages/archives" */))
const _60b2de72 = () => interopDefault(import('..\\pages\\link.vue' /* webpackChunkName: "pages/link" */))
const _a92b0c2c = () => interopDefault(import('..\\pages\\love.vue' /* webpackChunkName: "pages/love" */))
const _4697223f = () => interopDefault(import('..\\pages\\message.vue' /* webpackChunkName: "pages/message" */))
const _32e2ca2c = () => interopDefault(import('..\\pages\\photo.vue' /* webpackChunkName: "pages/photo" */))
const _3c6555c0 = () => interopDefault(import('..\\pages\\search.vue' /* webpackChunkName: "pages/search" */))
const _3031d926 = () => interopDefault(import('..\\pages\\categories\\_slug.vue' /* webpackChunkName: "pages/categories/_slug" */))
const _7b46fe62 = () => interopDefault(import('..\\pages\\posts\\_slug.vue' /* webpackChunkName: "pages/posts/_slug" */))
const _5a83d9ee = () => interopDefault(import('..\\pages\\tags\\_slug.vue' /* webpackChunkName: "pages/tags/_slug" */))
const _2e0f94ec = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _6d7f4a76,
    name: "about"
  }, {
    path: "/archives",
    component: _784122e9,
    name: "archives"
  }, {
    path: "/link",
    component: _60b2de72,
    name: "link"
  }, {
    path: "/love",
    component: _a92b0c2c,
    name: "love"
  }, {
    path: "/message",
    component: _4697223f,
    name: "message"
  }, {
    path: "/photo",
    component: _32e2ca2c,
    name: "photo"
  }, {
    path: "/search",
    component: _3c6555c0,
    name: "search"
  }, {
    path: "/categories/:slug?",
    component: _3031d926,
    name: "categories-slug"
  }, {
    path: "/posts/:slug?",
    component: _7b46fe62,
    name: "posts-slug"
  }, {
    path: "/tags/:slug?",
    component: _5a83d9ee,
    name: "tags-slug"
  }, {
    path: "/",
    component: _2e0f94ec,
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
