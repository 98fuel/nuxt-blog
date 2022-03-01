export { default as Comments } from '../..\\components\\Comments.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Header } from '../..\\components\\Header.vue'
export { default as Imgbig } from '../..\\components\\Imgbig.vue'
export { default as Pager } from '../..\\components\\Pager.vue'

export const LazyComments = import('../..\\components\\Comments.vue' /* webpackChunkName: "components_Comments'}" */).then(c => c.default || c)
export const LazyFooter = import('../..\\components\\Footer.vue' /* webpackChunkName: "components_Footer'}" */).then(c => c.default || c)
export const LazyHeader = import('../..\\components\\Header.vue' /* webpackChunkName: "components_Header'}" */).then(c => c.default || c)
export const LazyImgbig = import('../..\\components\\Imgbig.vue' /* webpackChunkName: "components_Imgbig'}" */).then(c => c.default || c)
export const LazyPager = import('../..\\components\\Pager.vue' /* webpackChunkName: "components_Pager'}" */).then(c => c.default || c)
