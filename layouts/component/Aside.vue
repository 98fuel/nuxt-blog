<template>
  <aside class="aside">
    <div class="wrapper">
      <div class="widget">
        <div class="gg">
          <nuxt-link to="/">
            <img src="https://img.imhan.cn/author.png" />
          </nuxt-link>
          <h3>子舒</h3>
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
  .wrapper {
    width: 240px;
    word-wrap: break-word;
    position: fixed;
    right: 5%;
    top: 130px;
    border-left: 1px solid #eee;
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
        h3 {
          font-size: 20px;
          font-weight: 600 !important;
          padding: 10px 0 18px;
          color: #000;
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
