<template>
  <aside class="aside">
    <div class="wrapper">
      <div class="widget">
        <div class="gg">
          <nuxt-link to="/">
            <img src="https://cdn.jsdelivr.net/gh/Nov8nana/cdn/img/author.png" />
          </nuxt-link>
          <div>
            <h3>子舒</h3>
            <p>记录我的生活...</p>
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
            <a href="https://github.com/Nov8nana" target="_blank">Github</a>
          </li>
          <li>
            <i class="fa fa-envelope"></i>
            <a href="mailto:shuxhan@163.com">shuxhan@163.com</a>
          </li>
          <li>
            <i class="fa fa-link"></i>
            <a href="/">我的博客</a>
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
    top: 20px;
    border-right: 1px solid #eee;
    .widget {
      padding: 10px 4%;
      border-radius: 4px;
      opacity: 0.6;
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
        margin-left: -4px;
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
