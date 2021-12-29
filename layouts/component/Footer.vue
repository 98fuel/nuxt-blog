<template>
  <footer class="footer">
    <div class="wrapper">
      Copyright © 2020 -2021
      <a href="/">子舒的博客</a>,
      基于 vue + nuxt.js 构建而成，
      <a
        href="https://github.com/Nov8nana/nuxt-blog"
        target="_blank"
      >Github</a> 地址。
    </div>

    <!-- 返回顶部 -->
    <div
      class="back_top top-btn"
      @mouseover="enterBackTop"
      @mouseout="outBackTop"
      ref="backTop"
      :style="{ opacity: opacity }"
      v-show="gotop"
      @click="handleScrollTop"
    >
      <div>
        <i></i>
        <i></i>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: ['ele'],
  data () {
    return {
      opacity: '1',
      gotop: false,
      scrollHeight: 200,
      scrollTop: 0
    };
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll, true);
  },
  methods: {
    enterBackTop () {
      this.opacity = '1';
    },
    outBackTop () {
      this.opacity = '1';
    },
    handleScroll (e) {
      const that = this;
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      that.scrollTop > this.scrollHeight
        ? (this.gotop = true)
        : (this.gotop = false);
    },
    handleScrollTop () {
      const that = this;
      const timer = setInterval(() => {
        const ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  width: 75%;
  margin-top: 1.8em;
  .wrapper {
    line-height: 2.5;
    color: #6e7173;
    padding: 0.8em 0 1.6em;
    text-align: center;
  }
  .top-btn {
    position: fixed;
    right: 40px;
    bottom: 60px;
    -ms-flex-pack: center;
    -ms-flex-align: center;
    align-items: center;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 5px 5px 0 rgb(0 0 0 / 10%);
    // display: none;
    // opacity: 0;
    height: 40px;
    justify-content: center;
    transition: all 0.4s ease;
    width: 40px;
    z-index: 1;
    &:hover {
      cursor: pointer;
      background: #c1c1c1;
    }
    div {
      position: relative;
      width: 100%;
      height: 100%;
      i {
        position: absolute;
        top: 18px;
        background: #666;
        width: 16px;
        height: 2px;
      }

      i:nth-child(1) {
        transform: rotate(-45deg);
        left: 7px;
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
      }

      i:nth-child(2) {
        transform: rotate(45deg);
        right: 7px;
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -o-transform: rotate(45deg);
      }
    }
  }
}
@media print, screen and (max-width: 48em) {
  .footer {
    width: 100%;
  }
}
</style>
