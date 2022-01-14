<template>
  <aside class="aside">
    <div class="wrapper">
      <div class="widget">
        <div class="gg">
          <nuxt-link to="/">
            <img src="https://cdn.jsdelivr.net/gh/Nov8nana/cdn/img/author.png" />
          </nuxt-link>
          <div>
            <h3>子舒</h3>
            <p>前端开发...</p>
            <nuxt-link to="/about">more...</nuxt-link>
          </div>
        </div>

        <ul class="share">
          <li>
            <i class="fa fa-map-marker"></i>
            <a>杭州</a>
          </li>
          <li>
            <i class="fa fa-github"></i>
            <a href="https://github.com/Nov8nana" target="_blank">Github</a>
          </li>
          <li>
            <i class="fa fa-envelope"></i>
            <a href="mailto:shuxhan@163.com">shuxhan@163.com</a>
          </li>
          <li>
            <i class="fa fa-link"></i>
            <a href="/">我的博客</a>
          </li>
        </ul>
      </div>
      <!-- <div class="widget">
        <div class="widget-title">
          <i class="fa fa-folder-o">分类</i>
        </div>
        <ul class="category-list">
          <li class="category-list-item" v-for="category in categories" :key="category">
            <nuxt-link class="link" :to="`/categories/${category}`">{{category}}</nuxt-link>
          </li>
        </ul>
      </div>-->

      <!-- <div class="widget">
        <div class="widget-title">
          <i class="fa fa-tag">标签</i>
        </div>
        <div class="tag-list">
          <nuxt-link class="tag-item" :to="`/tags/${tag}`" v-for="tag in tags" :key="tag">{{tag}}</nuxt-link>
        </div>
      </div>

      <div class="widget">
        <div class="widget-title">
          <i class="fa fa-file-o">最近文章</i>
        </div>
        <ul class="article-list">
          <li
            class="article-list-item"
            v-for="article in rencentArticles"
            :key="article.attributes.title"
          >
            <nuxt-link class="link" :to="article.path">{{ article.attributes.title }}</nuxt-link>
          </li>
        </ul>
      </div>-->
    </div>
  </aside>
</template>

<script>
export default {
  data () {
    return {
      categories: [],
      tags: [],
      rencentArticles: []
    }
  },
  methods: {
    getCategories (articles) {
      const categories = []
      articles.forEach(article => {
        article.attributes.categories.forEach(category => {
          if (categories.filter(item => item === category).length === 0) {
            categories.push(category)
          }
        })
      })
      return categories
    },
    getTags (articles) {
      const tags = []
      articles.forEach(article => {
        article.attributes.tags.forEach(tag => {
          if (tags.filter(item => item === tag).length === 0) {
            tags.push(tag)
          }
        })
      })
      return tags
    }
  },
  async fetch () {
    const context = await require.context('~/content/posts', true, /\.md$/)
    const articles = await context.keys().map(key => ({
      ...context(key),
      path: `/posts/${key.replace('.md', '').replace('./', '')}`
    }))
    articles.sort((a, b) => new Date(b.attributes.date).getTime() - new Date(a.attributes.date).getTime())
    this.rencentArticles = articles.slice(0, 5)
    this.categories = this.getCategories(articles)
    this.tags = this.getTags(articles)
  },
};
</script>

<style lang="scss" scoped>
.aside {
  width: 100%;
  height: 100%;
  .wrapper {
    word-wrap: break-word;
    position: sticky;
    top: 20px;
    .widget {
      padding: 10px 4%;
      border-radius: 4px;
      opacity: 0.8;
      transition: all 0.2s linear;
      &:hover {
        opacity: 1;
      }
      .widget-title {
        color: #6e7173;
        line-height: 2.7;
        margin-top: 0;
        border-bottom: 1px solid #ddd;
        i::before {
          padding-right: 6px;
        }
      }
      .gg {
        font-size: 15px;
        a {
          display: block;
          img {
            border-radius: 50%;
            height: 80px;
          }
        }
        div {
          h3 {
            font-weight: 600;
            padding: 6px 0 3px;
          }
        }
      }
      .share {
        margin-left: -4px;
        li {
          display: flex;
          align-items: center;
          font-size: 14px;
          padding: 1px 0;
          i {
            width: 20px;
            font-size: 12px;
            margin-right: 2px;
            display: flex;
            justify-content: center;
          }
          a {
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
      ul {
        list-style: none;
        padding: 0;
        margin: 14px 0;
        li {
          margin: 5px 0;
          line-height: 1.5;
          font-size: 14px;
        }
      }
      .tag-list {
        display: flex;
        flex-wrap: wrap;
        margin: 14px 0;
        .tag-item {
          line-height: 26px;
          padding: 0px 5px;
          margin: 3px;
          border: 1px solid #808080;
          border-radius: 5px;
          color: #555;
          &:hover {
            color: #fff;
            border: 1px solid #808080;
            background: #808080;
          }
        }
      }
    }
  }
}
@media (max-width: 900px) {
  .aside {
    .wrapper {
      .widget {
        .gg {
          display: flex;
          div {
            margin-left: 2rem;
            h3 {
              padding-top: 0;
            }
          }
        }
        .share {
          display: none;
        }
      }
    }
  }
}
</style>
