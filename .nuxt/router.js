import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1c2c7ac6 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _3c617748 = () => interopDefault(import('..\\pages\\archives.vue' /* webpackChunkName: "pages/archives" */))
const _3f15a5f9 = () => interopDefault(import('..\\pages\\blog.vue' /* webpackChunkName: "pages/blog" */))
const _0f2c546e = () => interopDefault(import('..\\pages\\love.vue' /* webpackChunkName: "pages/love" */))
const _e2097400 = () => interopDefault(import('..\\pages\\message.vue' /* webpackChunkName: "pages/message" */))
const _5f1e00b2 = () => interopDefault(import('..\\pages\\categories\\_slug.vue' /* webpackChunkName: "pages/categories/[_]slug" */))
const _1b6d8dae = () => interopDefault(import('..\\pages\\posts\\_slug.vue' /* webpackChunkName: "pages/posts/[_]slug" */))
const _40f86e4a = () => interopDefault(import('..\\pages\\tags\\_slug.vue' /* webpackChunkName: "pages/tags/[_]slug" */))
const _3be4558b = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _1c2c7ac6,
    name: "about"
  }, {
    path: "/archives",
    component: _3c617748,
    name: "archives"
  }, {
    path: "/blog",
    component: _3f15a5f9,
    name: "blog"
  }, {
    path: "/love",
    component: _0f2c546e,
    name: "love"
  }, {
    path: "/message",
    component: _e2097400,
    name: "message"
  }, {
    path: "/categories/:slug?",
    component: _5f1e00b2,
    name: "categories-slug"
  }, {
    path: "/posts/:slug?",
    component: _1b6d8dae,
    name: "posts-slug"
  }, {
    path: "/tags/:slug?",
    component: _40f86e4a,
    name: "tags-slug"
  }, {
    path: "/",
    component: _3be4558b,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
