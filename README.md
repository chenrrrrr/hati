# hati

一个静态相册网站，主要用于展示相册，为好基友开花店、婚车而诞生，只要会编辑`yaml`，并传到服务器，就能实现内容更新，

 - 移动端兼容
 - 微博图床
 - 瀑布流
 - 静态化
 - 1m小水管，秒级加载(cdn,http2,webpack)

## 预览网址

[https://www.chenrui.ink/hati](https://www.chenrui.ink/hati)

[https://www.chenrui.ink/album](https://www.chenrui.ink/album)

## 部署

 - `git clone`或者下载项目到本地
 - `yarn add`安装项目依赖
 - `public//conf.yml`进行项目的配置
 - 检查`vue.config.js`中的`baseUrl`是否设置为`./`，否则静态文件报404
 - `yarn build`将`dist`目录下的全部文件扔到`nginx`或者其他服务器
 - `nginx`配置项目

## 安装依赖
```
yarn add
```

### 本地运行
```
yarn serve
```

### 项目打包
```
yarn build
```

### 代码格式化
```
yarn lint
```

