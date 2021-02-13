export default {
  install: (Vue) => {
    [
      require('./ui-container.vue'),
      require('./ui-tag.vue'),
      require('./ui-title.vue')
    ].forEach((imported) => {
      const component = imported.default
      Vue.component(component.name, component)
    })
  }
}
