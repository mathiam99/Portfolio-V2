export { default as Experiences } from '../..\\components\\Experiences.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Languages } from '../..\\components\\Languages.vue'
export { default as MainSection } from '../..\\components\\MainSection.vue'
export { default as NavigationBar } from '../..\\components\\NavigationBar.vue'
export { default as Skills } from '../..\\components\\Skills.vue'
export { default as SegmentsLeft } from '../..\\components\\Segments\\Left.vue'
export { default as SegmentsRight } from '../..\\components\\Segments\\Right.vue'

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
