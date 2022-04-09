function arr() {
  var nowTime = new Date();
  var goTime = new Date(2022, 5, 1);
  var time = goTime - nowTime;
  var day = Math.floor(time / 1000 / 60 / 60 / 24);
  var h = Math.floor((time / 1000 / 60 / 60) % 24);
  h = h > 9 ? h : "0" + h;
  var m = Math.floor((time / 1000 / 60) % 60);
  m = m > 9 ? m : "0" + m;
  var s = Math.floor((time / 1000) % 60);
  s = s > 9 ? s : "0" + s;
  var str = "申请时间剩余：" + day + "天" + h + "小时" + m + "分钟" + s + "秒";
  var div_ = document.getElementsByClassName("str_")[0];
  div_.innerHTML = str;
}

window.onload = function () {
  setInterval(arr, 1000);
  arr();
  anniu();
};

function anniu() {
  let button_ = document.getElementsByTagName("button")[0];
  let num_ = document.getElementsByClassName("num_")[0];
  let tai_ = document.getElementsByClassName("tai")[0];
  button_.onclick = function () {
    num_.innerHTML = parseInt(num_.innerHTML) + 1;
    tai_.innerHTML = parseInt(tai_.innerHTML) - 1;
  };
}
