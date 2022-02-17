<template>
  <aside class="aside">
    <div class="wrapper">
      <div class="widget">
        <div class="gg">
          <nuxt-link to="/">
            <img src="https://img.imhan.cn/author.png" />
          </nuxt-link>
          <div>
            <h3>子舒</h3>
            <p>路漫漫其修远兮，吾将上下而求索！</p>
            <nuxt-link to="/about">more...</nuxt-link>
          </div>
        </div>

        <ul class="share">
          <li>
            <i class="fa fa-map-marker"></i>
            <span>杭州</span>
          </li>
          <li>
            <i class="fa fa-github"></i>
            <a href="https://github.com/imhan0cn" target="_blank">Github</a>
          </li>
          <li>
            <i class="fa fa-envelope"></i>
            <a href="mailto:shuxhan@163.com">shuxhan@163.com</a>
          </li>
          <li>
            <i class="fa fa-link"></i>
            <a href="https://imhan.cn">我的博客</a>
          </li>
        </ul>
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
  width: 100%;
  height: 100%;
  .wrapper {
    word-wrap: break-word;
    position: sticky;
    top: 70px;
    border-right: 1px solid #eee;
    .widget {
      padding: 10px 4%;
      border-radius: 4px;
      opacity: 1;
      transition: all 0.2s linear;
      &:hover {
        opacity: 1;
      }
      .widget-title {
        color: #6e7173;
        line-height: 2.7;
        margin-top: 0;
        border-bottom: 1px solid #ddd;
        i::before {
          padding-right: 6px;
        }
      }
      .gg {
        font-size: 15px;
        text-align: center;
        a {
          display: inline-block;
          img {
            border-radius: 50%;
            height: 80px;
          }
        }
        div {
          h3 {
            font-weight: 600;
            padding: 6px 0 3px;
          }
        }
      }
      .share {
        padding: 0 10px;
        li {
          display: flex;
          align-items: center;
          font-size: 14px;
          padding: 1px 0;
          i {
            width: 20px;
            font-size: 12px;
            margin-right: 2px;
            display: flex;
            justify-content: center;
          }
          a {
            color: rgba(62, 57, 57, 0.87843);
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
      ul {
        list-style: none;
        padding: 0;
        margin: 14px 0;
        li {
          margin: 5px 0;
          line-height: 1.5;
          font-size: 14px;
        }
      }
      .tag-list {
        display: flex;
        flex-wrap: wrap;
        margin: 14px 0;
        .tag-item {
          line-height: 26px;
          padding: 0px 5px;
          margin: 3px;
          border: 1px solid #808080;
          border-radius: 5px;
          color: #555;
          &:hover {
            color: #fff;
            border: 1px solid #808080;
            background: #808080;
          }
        }
      }
    }
  }
}
@media (max-width: 900px) {
  .aside {
    .wrapper {
      .widget {
        opacity: 1;
        .gg {
          display: flex;
          div {
            margin-left: 2rem;
            text-align: left;
            h3 {
              padding-top: 0;
            }
          }
        }
        .share {
          display: none;
        }
      }
    }
  }
}
</style>
