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
   * 1. --component comment
   *    -> src/comment/comment.vue
   *
   * 2. --component comment-index
   *    -> src/comment/index/comment-index.vue
   *
   * 3. --component comment-list --path comment/index/components
   *    -> src/comment/index/components/comment-list.vue
   */
  const { component: fileName, path: filePath } = options
  // 带后缀的文件名
  let fileFullName = `${fileName}.vue`
  const fileNameArray = fileName.split('-')
  const isMultiWordsFile = fileNameArray.length > 1
  // 文件存放位置
  let fileFullPath = []
  if (filePath) {
    // 3
    const filePathArray = filePath.split('/')
    fileFullPath = ['src', ...filePathArray, fileFullName]
  } else if (isMultiWordsFile) {
    // 2
    fileFullPath = ['src', ...fileNameArray, fileFullName]
  } else {
    // 1
    fileFullPath = ['src', fileName, fileFullName]
  }
  return path.join(...fileFullPath)
}

const getTemplatePath = () => {
  const componentTemplatePath = path.join('.', 'templates', 'component.ejs')
  const indexPath = path.join('.', 'templates', 'index.ejs')

  return { componentTemplatePath, indexPath }
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
