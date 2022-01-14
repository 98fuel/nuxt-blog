<template>
  <div>
    <div class="wrapper">
      <article class="article">
        <h1 class="article-title">{{ article.attributes.title }}</h1>
        <div class="article-meta">
          <div>子舒 /</div>
          <div class="article-date">{{ formatDate(article.attributes.date) }} /</div>
          <div class="article-category">
            <nuxt-link
              class="link"
              :to="`/categories/${category}`"
              v-for="category in article.attributes.categories"
              :key="category"
            >{{category}}</nuxt-link>
          </div>
        </div>
        <div class="markdown-body article-content" v-html="article.html"></div>
        <div class="article-other">
          <div class="article-updated">最后更新时间: {{ formatDate(article.attributes.updated) }}</div>
          <div class="article-tags">
            标签:
            <nuxt-link
              class="link"
              :to="`/tags/${tag}`"
              v-for="tag in article.attributes.tags"
              :key="tag"
            >{{tag}}</nuxt-link>
          </div>
        </div>
      </article>

      <article class="article article-ps">
        <div>
          出于个人的考虑，没有在文章内设置留言。如果你想评论，请移步
          <a href="/message">留言板</a>。
        </div>
      </article>
      <Imgbig />
    </div>
  </div>
</template>

<script>
import { formatDate } from '@/util'
import Imgbig from '@/components/Imgbig'

export default {
  components: {
    Imgbig,
  },
  async asyncData ({ params }) {
    const article = await import(`~/content/posts/${params.slug}.md`);
    return {
      article
    };
  },
  methods: {
    formatDate (date) {
      return formatDate(date)
    }
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  .article {
    padding: 25px 1% 15px;
    .article-title {
      margin: 0;
      color: #4e91a5;
      font-weight: 600;
      font-size: 22px;
      line-height: 1.2;
      padding: 8px 0;
    }
    .article-meta {
      padding: 0;
      margin: 0;
      color: #6e7173;
      border-bottom: 1px solid #eee;
      font-size: 0.94em;
      text-indent: 0.15em;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      opacity: 0.8;
      .article-date {
        margin-right: 0;
      }
      .article-category {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        .link {
          margin-right: 6px;
        }
      }
    }
    .article-content {
      font-size: 16px;
      line-height: 2;
      color: inherit;
      padding-top: 15px;
      word-break: normal;
      font-family: 'HYQiHei';
      color: #4e4e4e;
    }
    .article-other {
      margin: 2rem 0 1rem;
      font-size: 0.96rem;
      color: #6e7173;
      background: #f3f3f387;
      border-left: 2px solid #6e7173;
      padding-left: 10px;
      .article-tags {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
      }
      .link {
        margin-left: 10px;
      }
    }
  }
  .article-ps {
    padding: 0 1%;
    opacity: 0.9;
    font-size: 0.96rem;
    a {
      color: #0366d6;
      text-decoration: underline;
    }
  }
}
</style>
