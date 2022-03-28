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

class Wave {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.simplex = new SimplexNoise();
    this.speedY = 0;
    this.speedX = 0;


    this.init();
  }

  init () {
    this.reset();
    this.loop();
  }

  reset () {
    this.w = window.innerWidth;
    this.h = window.innerHeight;
    this.canvas.width = this.w;
    this.canvas.height = this.h;
    this.count = Math.ceil(this.w / Math.floor(Math.random() * 40 + 10));
  }

  loop () {
    var This = this;

    function drawloop () {
      window.requestAnimationFrame(drawloop);
      This.ctx.clearRect(0, 0, This.w, This.h);
      This.speedX = 0;
      This.speedY += 0.01; //每次渲染需要更新波峰波谷值

      //连续绘制三次波浪线
      This.draw('white', 'screen');
      // This.draw('green', 'screen');
      // This.draw('blue', 'screen');
    }

    drawloop();
  }

  draw (color, comp) {


    var amp = 22; //波浪幅度 可以通过函数传递参数更改不同的幅度

    this.ctx.beginPath();

    for (var i = 0; i <= this.count; i++) {
      this.speedX += 0.05;
      var x = i * (this.w / this.count);
      var y = this.h / 2 + this.simplex.noise2D(this.speedX, this.speedY) * amp;
      this.ctx[i === 0 ? 'moveTo' : 'lineTo'](x, y);
    }

    this.ctx.lineTo(this.w, -this.h);
    this.ctx.lineTo(0, -this.h);
    this.ctx.closePath();
    this.ctx.fillStyle = color;
    this.ctx.globalCompositeOperation = comp;
    this.ctx.fill();
  }
}

new Wave();


