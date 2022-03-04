$(function () {

  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= 60) {
      $('header').addClass('scrollhead')
    } else {
      $('header').removeClass('scrollhead')
    }
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
      $('.opacity').css('display', 'block')
      i = 2
    } else {
      $('.nav-menu').removeClass('menu-show')
      $('.menu-icon').removeClass('menu-icon-show')
      $('.opacity').css('display', 'none')
      i = 1
    }
  })
  $('.opacity').click(function () {
    $('.nav-menu').removeClass('menu-show')
    $('.menu-icon').removeClass('menu-icon-show')
    $('.opacity').css('display', 'none')
    i = 1
  })

});

// console.log(
//   "%c love 蔡蔡 - 余万人中万幸得以相识",
//   "color:#fff;font-size:12px;font-weight:400;background:#2c3e50;padding:6px 4px;border-radius:6px;font-family:'Noto Sans SC', sans-serif"
// )

