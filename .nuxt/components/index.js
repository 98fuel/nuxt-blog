export const Comments = () => import('../..\\components\\Comments.vue' /* webpackChunkName: "components/comments" */).then(c => wrapFunctional(c.default || c))
export const HeaderMe = () => import('../..\\components\\HeaderMe.vue' /* webpackChunkName: "components/header-me" */).then(c => wrapFunctional(c.default || c))
export const Pager = () => import('../..\\components\\Pager.vue' /* webpackChunkName: "components/pager" */).then(c => wrapFunctional(c.default || c))
export const PageSidebar = () => import('../..\\components\\PageSidebar.vue' /* webpackChunkName: "components/page-sidebar" */).then(c => wrapFunctional(c.default || c))
export const PostSidebar = () => import('../..\\components\\PostSidebar.vue' /* webpackChunkName: "components/post-sidebar" */).then(c => wrapFunctional(c.default || c))
export const JsPhotolist = () => import('../..\\components\\js\\photolist.js' /* webpackChunkName: "components/js-photolist" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
