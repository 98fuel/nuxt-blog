export const Comments = () => import('../..\\components\\Comments.vue' /* webpackChunkName: "components/comments" */).then(c => wrapFunctional(c.default || c))
export const Imgbig = () => import('../..\\components\\Imgbig.vue' /* webpackChunkName: "components/imgbig" */).then(c => wrapFunctional(c.default || c))
export const Pager = () => import('../..\\components\\Pager.vue' /* webpackChunkName: "components/pager" */).then(c => wrapFunctional(c.default || c))
export const Toc = () => import('../..\\components\\Toc.vue' /* webpackChunkName: "components/toc" */).then(c => wrapFunctional(c.default || c))

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
