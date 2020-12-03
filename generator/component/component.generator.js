const {
  getTemplatePath,
  getComponentName,
  getGeneratedFilePath
} = require('./component.service')

const componentGenerator = (api, options) => {
  const { component, export: isExport = 'true' } = options
  if (!component) return
  const { fileFullPath: generatedComponentPath, indexFullPath } = getGeneratedFilePath(options)
  const { componentTemplatePath, indexTemplatePath } = getTemplatePath()
  const { componentName, componentNamePascalCase, cssName } = getComponentName(options)
  const tempConfig = { [generatedComponentPath]: componentTemplatePath }
  if (isExport !== 'false') {
    tempConfig[indexFullPath] = indexTemplatePath
  }
  api.render(
    tempConfig,
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
