export { default as Canvas } from '../..\\components\\Canvas.vue'
export { default as Comments } from '../..\\components\\Comments.vue'
export { default as HeaderMe } from '../..\\components\\HeaderMe.vue'
export { default as Imgbig } from '../..\\components\\Imgbig.vue'
export { default as Pager } from '../..\\components\\Pager.vue'
export { default as PageSidebar } from '../..\\components\\PageSidebar.vue'
export { default as PostSidebar } from '../..\\components\\PostSidebar.vue'
export { default as Search } from '../..\\components\\Search.vue'
export { default as JsPhotolist } from '../..\\components\\js\\photolist.js'

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
