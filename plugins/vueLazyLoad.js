import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad, {
  preLoad: 1.33, // 预加载的宽高比，4:3
  error: '', // 加载失败时使用的图片
  loading: 'https://img.imhan.cn/loading.gif', // 加载时的loading图
  attempt: 2 //尝试加载次数
})