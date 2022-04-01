import path from 'path'
import glob from 'glob'
import Mode from 'frontmatter-markdown-loader/mode'
import MarkdownIt from 'markdown-it'
const markdownPaths = ['posts']

let remove_console = []

if (process.env.NODE_ENV === 'production') {
  remove_console.push("transform-remove-console")
}

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: '不如吃茶去 | 子舒',
    meta: [
      { charset: 'utf-8' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover' },
      { hid: 'description', name: 'description', content: '使用 vue + nuxt.js 技术栈构建而成的博客，记录我的文章。' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'alternate', type: 'application/atom+xml', href: '/feed.xml' }
    ],
    script: [
      { src: 'https://cdn.imhan.cn/list/jquery3.6.0.js' },
      { src: 'https://hm.baidu.com/hm.js?f41d830174f36ac5eb0838f79f75bee2' },
      { src: '/js/main.js' }
    ],
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/app.scss',
    '@/assets/css/reset.scss',
    '@/assets/css/article.scss',
    '@/assets/css/dark.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    { src: '~/plugins/baidu' },
    { src: '~plugins/vueLazyLoad', ssr: false },
    { src: '@/plugins/viewer', ssr: false }
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [

  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxt/content',
    'nuxt-content-body-html',
    '@nuxtjs/feed',
    // ['nuxtjs-darkmode-js-module', { // dark模式
    //   darkmodejs: {
    //     bottom: '64px', // default: '32px'
    //     right: 'unset', // default: '32px'
    //     left: '32px', // default: 'unset'
    //     time: '0.5s', // default: '0.3s'
    //     mixColor: '#fff', // default: '#fff'
    //     backgroundColor: '#fff',  // default: '#fff'
    //     buttonColorDark: '#100f2c',  // default: '#100f2c'
    //     buttonColorLight: '#fff', // default: '#fff'
    //     saveInCookies: false, // default: true,
    //     label: '🌓', // default: ''
    //     autoMatchOsTheme: true, // default: true
    //     disableWidget: false // default: false
    //   }
    // }]

  ],
  /*
  ** Rss feed.xml
  */
  feed: [
    {
      create: async (feed) => {
        const $content = require('@nuxt/content').$content;
        feed.options = {
          title: '不如吃茶去',
          link: 'https://imhan.cn/feed.xml',
          description:
            '这是一个我在闲暇时间写的博客, 会写一些生活琐事, 也会写一些技术笔记, 使用 vue + nuxt.js 技术栈构建而成。',
        };

        const posts = await $content('posts')
          .sortBy('date', 'desc')
          .fetch();
        posts.forEach((post) => {
          const url = `https://imhan.cn/posts/${post.slug}`;
          feed.addItem({
            id: url,
            title: post.title,
            description: post.description,
            date: new Date(post.date),
            content: post.summary,
            link: url,
            author: {
              name: '子舒',
              email: 'shuxhan@163.com',
              link: 'https://imhan.cn',
            },
          });
        });
      },
      path: '/feed.xml',
      type: 'rss2',
      data: ['posts', 'xml'],
    },
  ],
  generate: {
    routes: dynamicMarkdownRoutes()
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    babel: {
      'plugins': remove_console
    },
    loaders: {
      sass: {
        implementation: require("sass")
      }
    },
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      config.module.rules.push(
        {
          test: /\.md$/,
          include: path.resolve(__dirname, 'content'),
          loader: 'frontmatter-markdown-loader',
          options: {
            // mode: [Mode.VUE_COMPONENT, Mode.META],
            markdownIt: markdownRenderer(),
          },
        }
      )
    }
  },
}

function dynamicMarkdownRoutes () {
  return [].concat(
    ...markdownPaths.map(mdPath => {
      return glob.sync(`${mdPath}/*.md`, { cwd: 'content' })
        .map(filepath => `${mdPath}/${path.basename(filepath, '.md')}`)
    })
  )
}

function markdownRenderer () {
  const md = MarkdownIt({ html: true, breaks: true })
  md.use(require('markdown-it-prism'))
  return md
}

