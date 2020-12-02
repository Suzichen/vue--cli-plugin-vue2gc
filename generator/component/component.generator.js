const {
  getTemplatePath,
  getComponentName,
  getGeneratedFilePath
} = require('./component.service')

const componentGenerator = (api, options) => {
  if (!options.component) return
  const generatedComponentPath = getGeneratedFilePath(options)
  const { componentTemplatePath, indexPath } = getTemplatePath()
  const { componentName, componentNamePascalCase, cssName } = getComponentName(options)
  api.render(
    {
      [generatedComponentPath]: componentTemplatePath,
      'index.js': indexPath
    },
    {
      componentName,
      componentNamePascalCase,
      cssName,
      ...options
    }
  )
}

const componentGeneratorHook = (api, options) => {
  api.afterInvoke(() => {
    // hooks
  })
}

module.exports = {
  componentGenerator,
  componentGeneratorHook
}
