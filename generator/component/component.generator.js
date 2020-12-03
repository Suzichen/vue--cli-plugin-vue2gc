const {
  getTemplatePath,
  getComponentName,
  getGeneratedFilePath
} = require('./component.service')

const componentGenerator = (api, options) => {
  if (!options.component) return
  const { fileFullPath: generatedComponentPath, indexFullPath } = getGeneratedFilePath(options)
  const { componentTemplatePath, indexTemplatePath } = getTemplatePath()
  const { componentName, componentNamePascalCase, cssName } = getComponentName(options)
  api.render(
    {
      [generatedComponentPath]: componentTemplatePath,
      [indexFullPath]: indexTemplatePath
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
