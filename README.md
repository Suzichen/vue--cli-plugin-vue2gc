# Vue CLI 插件
用命令快速生成 Vue 组件

## 安装

``` shell 
npm install vue-cli-plugin-vue2gc --save-dev
vue invoke vue-cli-plugin-vue2gc
```

## 组件

生成的组件将自动转化为大驼峰命名方式并导出，默认文件目录为 `src/components`。

``` shell
npm run gc test-component
or
yarn gc test-component
```
上面命令会生成一个包含两个文件的组件： `src/components/TestComponent/TestComponent.vue`、`src/components/TestComponent/index.js` 。

**指定位置**

你可以用 `--path` 选项指定生成的组件的位置。

```
npm run gc test-component -- --path=otherComps
or
yarn gc test-component --path=otherComps
```
这样生成的组件位置会是： `src/otherComps/TestComponent` 。

**单文件组件**

使用 `--export=false` 可默认不导出，这将仅生成一个单文件组件。

``` shell
npm run gc test-component -- --export=false --style=scss
or
yarn gc test-component --export=false --style=scss
```
上面命令会生成一个单文件组件： `src/components/TestComponent.vue` 。

**指定css扩展**

默认生成的组件的样式部分不含css扩展：
``` html
<style scoped>

</style>
```

使用 `--style` 可生成对应的css扩展：
``` shell
npm run gc test-component -- --style=less
or
yarn gc test-component --style=less
```
``` html
<style scoped lang="less">

</style>
```
