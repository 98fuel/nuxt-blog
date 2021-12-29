<template>
  <div class="wrapper">
    <div class="archive">
      <h2>{{ article.attributes.title }}</h2>
      <div class="article-content markdown-body" v-html="article.html"></div>
    </div>
  </div>
</template>

<script>
export default {
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
  padding: 0 2%;
  .archive {
    padding: 25px 3% 15px;
    margin-top: 20px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgb(0 0 0 / 5%);
    background: #fff;
    .article-content {
      font-family: 'HYQiHei';
      line-height: 2;
      color: #444;
      margin-top: 20px;
    }
  }
}
</style>