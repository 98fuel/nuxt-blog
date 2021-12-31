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
    title: '子舒的博客',
    meta: [
      { charset: 'utf-8' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover' },
      { hid: 'description', name: 'description', content: '子舒 | 个人博客 | Blog | Markdown | Vue | Nuxt' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://cdn.xiabanlo.cn/list/jquery3.6.0.js' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/reset.scss',
    '@/assets/css/app.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
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
  }
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
