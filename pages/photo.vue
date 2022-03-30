<template>
  <div>
    <PageSidebar />
    <HeaderMe />
    <div class="wrapper">
      <div class="archive">
        <h2>{{ article.attributes.title }}</h2>
        <div class="article-content markdown-body" v-html="article.html"></div>
        <div id="photo">
          <p v-for="item in list" :key="item.id">
            <img v-lazy="item.url" />
            <span>{{ item.date }} - {{ item.text }}</span>
          </p>
        </div>
        <Imgbig />
      </div>
    </div>
  </div>
</template>

<script>
import list from "@/components/js/photolist"
import HeaderMe from "@/components/HeaderMe";
import PageSidebar from '@/components/PageSidebar';
import Imgbig from "@/components/Imgbig";
export default {
  components: {
    HeaderMe,
    PageSidebar,
    Imgbig,
  },
  data () {
    return {
      list: []
    }
  },
  created () {
    this.list = list
  },
  async asyncData ({ params }) {
    // 调用 photo.md 内的数据
    const article = await import(`~/content/photo.md`);
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
      line-height: 1.8;
      color: inherit;
      margin-top: 20px;
    }
    #photo {
      margin-top: 20px;
    }
  }
}
</style>