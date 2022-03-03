<template>
  <aside class="aside">
    <div class="wrapper">
      <div class="widget">
        <div class="gg">
          <nuxt-link to="/">
            <img src="https://img.imhan.cn/author.png" />
          </nuxt-link>
          <h1>子舒</h1>
          <p>
            不如吃茶去。
            <nuxt-link to="/about">more...</nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.aside {
  position: sticky;
  height: 0;
  top: 30px;
  margin-left: 102%;
  .wrapper {
    width: 240px;
    word-wrap: break-word;
    border-left: 1px solid #eee;
    padding-bottom: 20px;
    .widget {
      padding: 10px 4%;
      border-radius: 4px;
      opacity: 1;
      transition: all 0.2s linear;
      opacity: 0.8;
      &:hover {
        opacity: 1;
      }
      .gg {
        font-size: 15px;
        text-align: left;
        a {
          display: inline-block;
          img {
            border-radius: 50%;
            height: 80px;
          }
        }
        h1 {
          font-size: 20px;
          font-weight: 600 !important;
          padding: 10px 0 18px;
          color: #181818;
        }
        p {
          color: #000;
          a {
            color: #24a19c;
          }
        }
      }
    }
  }
}
@media (max-width: 1308px) {
  .aside {
    display: none;
  }
}
</style>
