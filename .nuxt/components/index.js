export { default as Comments } from '../..\\components\\Comments.vue'
export { default as HeadDate } from '../..\\components\\HeadDate.vue'
export { default as Pager } from '../..\\components\\Pager.vue'

export const LazyComments = import('../..\\components\\Comments.vue' /* webpackChunkName: "components_Comments'}" */).then(c => c.default || c)
export const LazyHeadDate = import('../..\\components\\HeadDate.vue' /* webpackChunkName: "components_HeadDate'}" */).then(c => c.default || c)
export const LazyPager = import('../..\\components\\Pager.vue' /* webpackChunkName: "components_Pager'}" */).then(c => c.default || c)
