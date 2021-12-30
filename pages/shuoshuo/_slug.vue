<template>
  <div class="wrapper">
    <article class="article" v-for="article in articles" :key="article.attributes.title">
      <div class="article-meta">
        <div class="article-date">
          子舒于
          <span>{{ article.attributes.date }}</span> 发布的动态
        </div>
      </div>
      <div class="article-content markdown-body" v-html="article.summary"></div>
    </article>
  </div>
</template>

<script>
import { perHomeCount } from '@/config'
import { getArticles, formatDate } from '@/util'
export default {
  async asyncData () {
    const context = await require.context('~/content/shuoshuo', true, /\.md$/)
    // console.log(context(context.keys()[0]))
    const articles = await context.keys().map(key => ({
      ...context(key),
      summary: context(key).html.split('<!-- more -->')[0],
      path: `/shuoshuo/${key.replace('.md', '').replace('./', '')}`
    }))
    // TODO 使用脚本来生成文章，默认添加标题和时间，根据生成时的创建时间来排序
    articles.sort((a, b) => new Date(b.attributes.date).getTime() - new Date(a.attributes.date).getTime())
    return { articles: getArticles(1, perHomeCount, articles), allArticles: articles }
  },
  methods: {
    // updatePage (page) {
    //   this.currentPage = page
    //   this.articles = getArticles(page, perHomeCount, this.allArticles)
    // },
    formatDate (date) {
      return formatDate(date)
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 0 2%;
  margin-top: 20px;
  .article {
    padding: 10px 3% 15px;
    border-radius: 4px;
    background: #fff;
    box-shadow: 0 2px 2px rgb(0 0 0 / 5%);
    transition: all 0.2s linear;
    margin-bottom: 30px;
    &:hover {
      box-shadow: 0 0 6px 4px rgb(0 0 0 / 5%);
    }
    .article-meta {
      padding: 0;
      margin: 0;
      color: #6e7173;
      border-bottom: 1px solid #eee;
      font-size: 1.1rem;
      text-indent: 0.15em;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      opacity: 0.8;
      .article-date {
        margin-right: 12px;
        span {
          font-style: italic;
          color: #518db4;
        }
      }
    }
    .article-content {
      font-size: 15px;
      line-height: 1.77;
      color: #444;
      padding-top: 15px;
      text-align: justify;
      text-justify: distribute;
      font-family: 'HYQiHei';
    }
  }
}
</style>
