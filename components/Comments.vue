<template>
  <div class="wrapper">
    <div class="archive">
      <h3>评论~</h3>
      <div id="tcomment">
        <a href="/message" class="reload">点击加载评论功能</a>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/twikoo@1.4.9/dist/twikoo.all.min.js"></script>
    </div>
  </div>
</template>

<script>

const envId = 'shuxhan-2gcz5b7m7f845ec3';
const el = '#tcomment';
export default {
  name: 'Comments',
  mounted () {
    this.initTwikoo()
  },
  methods: {
    initTwikoo () {
      try {
        twikoo.init({
          envId,
          el,
        })
      } catch (e) { }
    },
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  .archive {
    padding: 25px 1% 15px;
    margin-top: 20px;
    h3 {
      margin-bottom: 20px;
    }
    .reload {
      background: #000;
      color: #fff;
      padding: 4px 10px;
      border-radius: 4px;
      transition: all 0.2s linear;
      &:hover {
        opacity: 0.9;
      }
    }
  }
}
</style>