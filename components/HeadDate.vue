<template>
  <div class="wrapper">
    <div class="article">
      <div class="head_date">
        北京时间现在是
        <span>{{nowTime}}</span> ，欢迎来到我的博客! 首次加载时间可能较长，请谅解。
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nowTime: []
    }
  },
  mounted () {
    this.nowTimes();
  },
  beforeDestroy () {
    this.clear();
  },
  methods: {
    timeFormate (timeStamp) {
      let year = new Date(timeStamp).getFullYear();
      let month = new Date(timeStamp).getMonth() + 1 < 10 ? "0" + (new Date(timeStamp).getMonth() + 1) : new Date(timeStamp).getMonth() + 1;
      let date = new Date(timeStamp).getDate() < 10 ? "0" + new Date(timeStamp).getDate() : new Date(timeStamp).getDate();
      let hh = new Date(timeStamp).getHours() < 10 ? "0" + new Date(timeStamp).getHours() : new Date(timeStamp).getHours();
      let mm = new Date(timeStamp).getMinutes() < 10 ? "0" + new Date(timeStamp).getMinutes() : new Date(timeStamp).getMinutes();
      let ss = new Date(timeStamp).getSeconds() < 10 ? "0" + new Date(timeStamp).getSeconds() : new Date(timeStamp).getSeconds();
      this.nowTime = year + "年" + month + "月" + date + "日  " + "星期" + '日一二三四五六'.charAt(new Date().getDay()) + " " + hh + ":" + mm + ':' + ss;
    },
    nowTimes () {
      this.timeFormate(new Date());
      setInterval(this.nowTimes, 1000);
      this.clear()
    },
    clear () {
      clearInterval(this.nowTimes)
      this.nowTimes = null;
    }
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 0 2% 3px;
  .article {
    padding: 10px 1% 10px;
    margin-top: 20px;
    border-radius: 4px;
    box-shadow: 0 0 5px 1px rgb(0 0 0 / 5%);
    background: #fff;
    .head_date {
      color: rgba(61, 59, 59, 0.7);
      // span {
      //   color: rgb(61, 59, 59);
      // }
    }
  }
}
</style>
