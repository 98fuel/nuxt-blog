import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _00d4dbe2 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _62de30ac = () => interopDefault(import('..\\pages\\archives.vue' /* webpackChunkName: "pages/archives" */))
const _29e05fc8 = () => interopDefault(import('..\\pages\\message.vue' /* webpackChunkName: "pages/message" */))
const _9636d27a = () => interopDefault(import('..\\pages\\categories\\_slug.vue' /* webpackChunkName: "pages/categories/[_]slug" */))
const _4f3215dc = () => interopDefault(import('..\\pages\\posts\\_slug.vue' /* webpackChunkName: "pages/posts/[_]slug" */))
const _0d428a66 = () => interopDefault(import('..\\pages\\tags\\_slug.vue' /* webpackChunkName: "pages/tags/[_]slug" */))
const _208cb6a7 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
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
    path: "/message",
    component: _29e05fc8,
    name: "message"
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

export function createRouter () {
  return new Router(routerOptions)
}
