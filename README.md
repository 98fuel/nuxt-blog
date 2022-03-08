<div align="center"><img src="./static/black-logo.png" style="display:block;margin:0 auto;"></div>

<div align="center"><h2>Nuxt-Blog</h2></div>

>基于 vue + nuxt.js 技术实现的静态博客。

源码地址: [https://github.com/imhan0cn/nuxt-blog](https://github.com/imhan0cn/nuxt-blog)

在线预览: [https://imhan.cn](https://imhan.cn)


## 1.介绍

基于 vue + nuxt.js 技术实现的静态博客，没有使用 ui 框架，样式都是自己一边构思一边写的，所以会有些瑕疵。

由于对后端不是很了解，因此没有写后台管理。

如果有任何疑问或错误，欢迎在 [Issues](https://github.com/imhan0cn/nuxt-blog/issues) 进行提问或给予修正意见。

如果喜欢或对你有所帮助，欢迎 Star，对作者是一种鼓励和推进 😀

~~使用第三方评论 Twikoo 部署留言板~~，开始转入Artalk评论，后端部署在服务器。

```shell
docker restart artalk-go

docker update --restart=always artalk-go
```

---

目前已有文章页面，归档，分类，标签等，其他的页面及功能将会在后期保持更新。(不过也没有什么功能好更新了，博客项目写那么复杂做什么？简单点不好吗。)

依旧存在一些bug, 慢慢优化吧...


## 2.使用前必读

`/nuxt.config.js`: 基本信息配置（title, description, icon 等）

`/config/index.js`: 首页每页显示文章数量

`/Conmmonents`: 组件目录

`/layouts`: 结构目录

`/pages`: 模板页面文件

`/assets`: 全局 css 样式

`/static`: 静态资源

`/content`: 存放 markdown 格式文件

文件头设置，title(标题), date(发布时间), updated(最后更新时间), categories(分类), tags(标签)。

```md
---
title: hello, world
date: 2020/06/14 20:57:00
updated: 2021/11/29 11:39:36
categories: 
  - 随笔
tags: 
  - 博客
  - 网站
---

```

---

**里面会有一些cdn，我是挂靠在自己的存储空间，所以稳定性和安全性自行考虑，建议把相关的 cdn 文件上传至 github 然后通用 jsdelivr 进行加速。**

比如 `/Component/comments.vue` 文件，这是一个有关评论的组件，如果不需要可以将文件去除，然后在 `/pages` 文件夹下面的相关模板页面内删除组件；如果想使用其他的评论程序，亦可以改造 `/Component/comments.vue` 文件。


## 3.快速启动

```bash
# git clone
git clone git@github.com:imhan0cn/nuxt-blog.git
cd nuxt-blog

# 安装依赖
$ npm install

# 本地运行
$ npm run dev

# 构建项目
$ npm run build
$ npm run start

# 生成dist目录
$ npm run generate

```

## 4.版本更新

### 2022-01-14  

1. 更新重构  

### 2022-02-17  

1. 开始使用Artalk评论  

### 2022-02-18  

1. 修复了评论路径变化产生的bug
2. 优化了结构层级错乱导致的问题

### 2022-02-23

1. 重写 `readme.md` 文档
2. 将导航栏移动到左侧，点击按钮显示隐藏

### 2022-02-28

1. 新增黑夜模式，暂时与其他组件样式有冲突，还在优化中

### 2022-03-08

1. 优化代码和组件

## 5.LICENSE

[LICENSE](./LICENSE)