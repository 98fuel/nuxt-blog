$(function () {
  new Artalk({
    el: "#Comments",
    pageTitle: "子舒的博客",
    server: 'https://artalk.imhan.cn/api',
    site: "子舒的博客",
    placeholder: '说点什么...',
    gravatar: {
      mirror: 'https://sdn.geekzu.org/avatar/',
      default: 'mp',
    },
    pagination: {
      pageSize: 15,   // 每页评论数
      readMore: true, // 加载更多 or 分页条
      autoLoad: false, // 自动加载 (加载更多)
    },
    heightLimit: {
      content: 200, // 评论内容限高
      children: 300, // 子评论区域限高
    },
    versionCheck: true, // 前端版本检测
  });

  var s1 = '2020-06-14';
  s1 = new Date(s1.replace(/-/g, "/"));
  s2 = new Date();
  var days = s2.getTime() - s1.getTime();
  var number_of_days = parseInt(days / (1000 * 60 * 60 * 24));
  document.getElementById('days').innerHTML = number_of_days;

  var i = 1;
  $('.menu-icon').click(function () {
    if (i == 1) {
      $('.nav-menu').addClass('menu-show')
      $('.menu-icon').addClass('menu-icon-show')
      console.log('显示')
      i = 2
    } else {
      $('.nav-menu').removeClass('menu-show')
      $('.menu-icon').removeClass('menu-icon-show')
      console.log('隐藏')
      i = 1
    }
  })
});

// console.log(
//   "%c love 蔡蔡 - 余万人中万幸得以相识",
//   "color:#fff;font-size:14px;font-weight:400;background:#2c3e50;padding:2px 4px;border-radius:6px;font-family:'Noto Sans SC', sans-serif"
// )
