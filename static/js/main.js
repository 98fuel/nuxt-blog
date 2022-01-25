$(function () {
  var s1 = '2020-06-14';
  s1 = new Date(s1.replace(/-/g, "/"));
  s2 = new Date();
  var days = s2.getTime() - s1.getTime();
  var number_of_days = parseInt(days / (1000 * 60 * 60 * 24));
  document.getElementById('days').innerHTML = number_of_days;
});

console.log(
  "%c love 蔡蔡 - 余万人中万幸得以相识",
  "color:#fff;font-size:14px;font-weight:400;background:#2c3e50;padding:2px 4px;border-radius:6px;"
)
