<template>
  <div>
    <div class="wrapper">
      <article class="article">
        <h1 class="article-title">{{ article.attributes.title }}</h1>
        <div class="article-meta">
          <div class="article-date">{{ formatDate(article.attributes.date) }}</div>
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
        <div class="article-updated">最后更新时间: {{ formatDate(article.attributes.updated) }}</div>
        <div class="article-tags">
          <nuxt-link
            class="link"
            :to="`/tags/${tag}`"
            v-for="tag in article.attributes.tags"
            :key="tag"
          >{{tag}}</nuxt-link>
        </div>
      </article>

      <article class="article article-ps">
        <div>
          出于个人的考虑，移除了文章内的评论框。如果你想评论留言，请移步
          <nuxt-link to="/message">留言板</nuxt-link>。
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
  padding: 0 2%;
  .article {
    padding: 25px 3% 15px;
    margin-top: 20px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgb(0 0 0 / 5%);
    background: #fff;
    .article-title {
      margin: 0;
      color: #000;
      text-align: left;
      font-weight: 500;
      font-size: 1.4rem;
    }
    .article-meta {
      padding: 0;
      margin: 0;
      margin-top: 4px;
      border-bottom: 1px solid #eee;
      color: #6e7173;
      font-size: 0.94em;
      text-indent: 0.15em;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      opacity: 0.8;
      .article-date {
        margin-right: 12px;
        &::before {
          font-family: 'FontAwesome';
          content: '\f073';
          padding-right: 0.3em;
        }
      }
      .article-category {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        .link {
          margin-right: 6px;
        }
        &::before {
          font-family: 'FontAwesome';
          content: '\f07c';
          padding-right: 0.3em;
        }
      }
    }
    .article-content {
      font-size: 16px;
      line-height: 2;
      color: #444;
      padding-top: 15px;
      text-align: left;
      text-justify: distribute;
      word-break: normal;
      font-family: 'HYQiHei';
    }
    .article-updated {
      margin-top: 1rem;
      font-size: 0.96rem;
      color: #6e7173;
      background: #eee;
      padding-left: 10px;
    }
    .article-tags {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      margin-top: 2em;
      &::before {
        font-family: 'FontAwesome';
        content: '\f02b';
        margin-right: 10px;
      }
      .link {
        margin-right: 10px;
      }
    }
  }
  .article-ps {
    padding: 15px 3%;
    opacity: 0.9;
    font-size: 0.96rem;
    a {
      color: #0366d6;
      text-decoration: underline;
    }
  }
}

@media (max-width: 520px) {
  .wrapper {
    .article {
      .article-title {
        font-size: 1.2rem;
      }
    }
  }
}
</style>
