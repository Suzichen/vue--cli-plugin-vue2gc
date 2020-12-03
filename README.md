# Vue CLI 插件
用命令快速生成 Vue 组件

## 安装

``` shell 
npm install vue-cli-plugin-vue2gc --save-dev
vue invoke vue-cli-plugin-vue2gc
```

## 组件

生成的组件将自动转化为大驼峰命名方式，默认文件目录为 `src/components`。

``` shell
npm run gc test-component
```
上面命令会生成一个组件，位置是： `src/components/TestComponent` 。

**指定位置**

你可以用 `--path` 选项指定生成的组件的位置。

```
npm run gc test-component --path otherComps
```
这样生成的组件位置会是： `src/otherComps/TestComponent` 。
