<template>
  <div class="wrapper">
    <div class="archive">
      <div class="article-content">
        <input v-model="searchQuery" type="search" autocomplete="off" placeholder="文章关键词" />
        <ul v-if="articles.length">
          <li v-for="article of articles" :key="article.slug">
            <NuxtLink :to="article.path+'/'">{{ article.title }}</NuxtLink>
            <!-- 在url地址后加一个/，配置全站的url格式，防止错乱 -->
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchQuery: '',
      articles: []
    }
  },
  watch: {
    async searchQuery (searchQuery) {
      if (!searchQuery) {
        this.articles = []
        return
      }
      this.articles = await this.$content('posts') // posts 是文章所在的文件夹的名称
        .limit(10)
        .search(searchQuery)
        .fetch()
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  min-height: 300px;
  .archive {
    padding: 25px 2% 15px;
    .article-content {
      margin-top: 16px;
      input {
        width: 100%;
        background-color: #edf2f7;
        color: #2f495e;
        outline: none;
        border: none;
        border-radius: 30px;
        padding: 4px 20px;
        box-sizing: border-box;
        transition: all 0.1s linear;
        &:focus {
          box-shadow: 3px 2px 10px rgb(0 0 0 / 20%);
        }
      }
      ul {
        margin-top: 6px;
        list-style: none;
        li {
          a {
            display: block;
            padding: 6px 14px;
            line-height: 1.6;
            transition: all 0.2s linear;
            &:hover {
              background: #edf2f7;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 520px) {
  .wrapper {
    .archive {
      .search {
        ul {
          li {
            a {
              border-bottom: 1px solid #ddd;
            }
          }
        }
      }
    }
  }
}
</style>