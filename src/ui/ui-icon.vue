<script>
export default {
  name: 'ui-icon',
  functional: true,
  props: {
    name: {
      type: Array,
      required: true
    },
    size: {
      type: String,
      default: 'lg'
    }
  },
  render (h, { data, props }) {
    const sizes = {
      lg: 'w-8 h-8',
      '2x': 'w-11 h-11',
      '3x': 'w-11 h-11',
    }

    return h('div', {
      ...data,
      class: [
        'flex items-center justify-center flex-shrink-0',
        sizes[props.size],
        data.staticClass,
        data.class
      ]
    }, [
      h('i', {
        class: [`fa-${props.size}`, ...props.name]
      })
    ])
  }
}
</script>
