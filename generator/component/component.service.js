const path = require('path')
const { startCase, camelCase } = require('lodash')

const pascalCase = (string) => {
  return startCase(camelCase(string)).replace(/ /g, '')
}

const hump2line = str => {
  return str.replace(/([A-Z])/g,"-$1").toLowerCase().slice(1)
}

const getGeneratedFilePath = options => {
  /**
   * 1. --component test
   *    -> src/components/Test/Test.vue
   *    -> src/components/Test/index.js
   *    -> src/components/Test/README.md
   *
   * 2. --component test --path=otherComp
   *    -> src/otherComp/Test/Test.vue
   *    -> src/otherComp/Test/index.js
   *    -> src/components/Test/README.md
   * 
   * 3. --component test --path=otherComp --export=false
   *    -> src/otherComp/Test.vue
   */
  const {
    component: fileName,
    path: filePath = 'components',
    export: isExport = 'true'
  } = options
  // 带后缀的文件名
  let pascalCaseFileName = pascalCase(fileName)
  let fileFullName = `${pascalCaseFileName}.vue`
  // 文件存放位置
  const filePathArray = isExport !== 'false'
    ? `${filePath}/${pascalCaseFileName}`.split('/')
    : filePath.split('/')
  const fileFullPath = ['src', ...filePathArray, fileFullName]
  const indexFullPath = ['src', ...filePathArray, 'index.js']
  const readmeFullPath = ['src', ...filePathArray, 'README.md']
  return {
    fileFullPath: path.join(...fileFullPath),
    indexFullPath: path.join(...indexFullPath),
    readmeFullPath: path.join(...readmeFullPath)
  }
}

const getTemplatePath = () => {
  const componentTemplatePath = path.join('.', 'templates', 'component.ejs')
  const indexTemplatePath = path.join('.', 'templates', 'index.ejs')
  const readmeTemplatePath = path.join('.', 'templates', 'README.ejs')

  return { componentTemplatePath, indexTemplatePath, readmeTemplatePath }
}

const getComponentName = options => {
  const { component: componentName } = options
  const componentNamePascalCase = pascalCase(componentName)
  const cssName = hump2line(componentNamePascalCase)

  return { componentName, componentNamePascalCase, cssName }
}

module.exports = {
  pascalCase,
  getGeneratedFilePath,
  getTemplatePath,
  getComponentName
}
