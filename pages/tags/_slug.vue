<template>
  <div class="wrapper">
    <div class="archive">
      <h1 class="title">正在查看 {{keyword}} 标签下的文章</h1>

      <div class="archive-list">
        <div class="archive-item" v-for="archive in archives" :key="archive.date">
          <h2 class="archive-time">{{archive.date}}</h2>
          <ul
            class="article-list"
            v-for="article in archive.articles"
            :key="article.attributes.title"
          >
            <li class="article-item">
              <span class="article-date">{{ formatDateArticle(article.attributes.date) }}</span>
              <nuxt-link
                class="article-link"
                :to="article.path"
                :title="article.attributes.title"
              >{{ article.attributes.title }}</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatArticles, formatDateArticle } from '@/util'
export default {
  async asyncData ({ isDev, route, store, env, params, query, req, res, redirect, error }) {
    const context = await require.context('~/content/posts', true, /\.md$/)
    let articles = await context.keys().map(key => ({
      ...context(key),
      date: context(key).attributes.date,
      path: `/posts/${key.replace('.md', '').replace('./', '')}`
    }))
    const keyword = route.params.slug
    articles = articles.filter(article => {
      return article.attributes.tags.indexOf(keyword) !== -1
    })
    return { archives: formatArticles(articles, articles.length), keyword }
  },
  methods: {
    formatDateArticle (date) {
      return formatDateArticle(date)
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 0 2%;
  .archive {
    padding: 25px 3% 15px;
    margin-top: 20px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgb(0 0 0 / 5%);
    background: #fff;
    .title {
      font-size: 20px;
      font-weight: normal;
      color: #888;
    }

    .archive-list {
      font-size: 16px;
      line-height: 2;
      padding-bottom: 0.8em;
      .archive-item {
        .archive-time {
          font-weight: 600;
          margin: 0;
          font-size: 1.5rem;
        }
        .article-list {
          list-style: none;
          margin: 15px 0;
          .article-item {
            .article-date {
              padding-right: 0.7em;
            }
          }
        }
      }
    }
  }
}
</style>
