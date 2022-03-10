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

  var str = '';
  function nuxt_shuoshuo () {
    $.ajax({
      url: 'http://81.69.240.210/api/nuxt_shuoshuo.php',
      type: 'get',
      dataType: 'json',
      async: false,
      success: function (data) {
        $.each(data, function (i, item) {
          // console.log(item)
          list = "<div class='item'>"+
          "<p class='item-date'>" + item.created + "</p>"+
          "<p class='item-text'>"+item.text + "</p>"+
          "</div>"
          str += list;
        }),
          $("#nuxt_shuoshuo").html(str);
        console.log('数据请求成功')
      },
      error: function () {
        console.log('数据请求失败')
      }

    });
  }

  nuxt_shuoshuo();
  // $('#nuxt_shuoshuo_nav').click(function () {
  //   $('#nuxt_shuoshuo').html('1')
  //   console.log('nuxt_shuoshuo()')
  //   setTimeout(function () {
  //     nuxt_shuoshuo()
  //   }, 1000)
  // })


});



