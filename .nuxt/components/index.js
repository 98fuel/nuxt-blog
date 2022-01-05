export { default as Comments } from '../..\\components\\Comments.vue'
export { default as Imgbig } from '../..\\components\\Imgbig.vue'
export { default as Pager } from '../..\\components\\Pager.vue'

export const LazyComments = import('../..\\components\\Comments.vue' /* webpackChunkName: "components_Comments'}" */).then(c => c.default || c)
export const LazyImgbig = import('../..\\components\\Imgbig.vue' /* webpackChunkName: "components_Imgbig'}" */).then(c => c.default || c)
export const LazyPager = import('../..\\components\\Pager.vue' /* webpackChunkName: "components_Pager'}" */).then(c => c.default || c)
