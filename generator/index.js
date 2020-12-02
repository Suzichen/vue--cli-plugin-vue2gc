const { componentGenerator, componentGeneratorHook } = require('./component/component.generator')

module.exports = (api, options) => {
  api.extendPackage({
    scripts: {
      'generate:component': 'vue invoke vue-cli-plugin-vue2gc --component',
      gc: 'vue invoke vue-cli-plugin-vue2gc --component',
    },
  })
  componentGenerator(api, options)
}

module.exports.hooks = (api, options) => {
  componentGeneratorHook(api, options)
}
