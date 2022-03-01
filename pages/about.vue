<template>
  <div class="body">
    <Header />
    <div class="container">
      <div class="wrapper">
        <div class="archive">
          <h2>{{ article.attributes.title }}</h2>
          <div class="article-content markdown-body" v-html="article.html"></div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  components: {
    Header,
    Footer
  },
  async asyncData ({ params }) {
    // 调用 about.md 内的数据
    const article = await import(`~/content/about.md`);
    return {
      article
    };
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  .archive {
    padding: 25px 2% 15px;
    .article-content {
      font-size: inherit;
      line-height: 2;
      color: inherit;
      margin-top: 20px;
    }
  }
}
</style>