$(function () {
  // 点击变色
  $(".title span").on("click", function () {
    $(this).addClass("border-bottom").siblings().removeClass("border-bottom");
  });
  $(".little-title span").on("click", function () {
    $(this).addClass("span_style").siblings().removeClass("span_style");
  });

  get_("http://192.168.184.1:3000/useing/public");
  var html = template("tpl", {
    data: a,
  });
  var show_ = document.getElementsByClassName("show")[0];
  show_.innerHTML = "";
  show_.innerHTML = html;

  var i = 1;
  // 点击大众试用
  $(".zuixin").on("click", function () {
    i = 1;
  });
  // 点击体验师专享
  $(".zuire").on("click", function () {
    i = 2;
  });

  // 全部板块
  $(".all").on("click", function () {
    if (i == 1) {
      get_("http://192.168.184.1:3000/useing/public");
      var html = template("tpl", {
        data: a,
      });
      var show_ = document.getElementsByClassName("show")[0];
      show_.innerHTML = "";
      show_.innerHTML = html;
    } else {
      get_("http://192.168.184.1:3000/useing/master");
      var html = template("tpl", {
        data: a,
      });
      var show_ = document.getElementsByClassName("show")[0];
      show_.innerHTML = "";
      show_.innerHTML = html;
    }
  });

  // 申请中板块
  $(".apply").on("click", function () {
    if (i == 1) {
      get_("http://192.168.184.1:3000/useing/master");
      var html = template("tpl", {
        data: a,
      });
      var show_ = document.getElementsByClassName("show")[0];
      show_.innerHTML = "";
      show_.innerHTML = html;
    } else {
      get_("http://192.168.184.1:3000/useing/public");
      var html = template("tpl", {
        data: a,
      });
      var show_ = document.getElementsByClassName("show")[0];
      show_.innerHTML = "";
      show_.innerHTML = html;
    }
  });
  // 试用中板块
  $(".try").on("click", function () {
    if (i == 1) {
      get_("http://192.168.184.1:3000/useing/public");
      var html = template("tpl", {
        data: a,
      });
      var show_ = document.getElementsByClassName("show")[0];
      show_.innerHTML = "";
      show_.innerHTML = html;
    } else {
      get_("http://192.168.184.1:3000/useing/master");
      var html = template("tpl", {
        data: a,
      });
      var show_ = document.getElementsByClassName("show")[0];
      show_.innerHTML = "";
      show_.innerHTML = html;
    }
  });
  // 已结束板块
  $(".over").on("click", function () {
    if (i == 1) {
      get_("http://192.168.184.1:3000/useing/master");
      var html = template("tpl", {
        data: a,
      });
      var show_ = document.getElementsByClassName("show")[0];
      show_.innerHTML = "";
      show_.innerHTML = html;
    } else {
      get_("http://192.168.184.1:3000/useing/public");
      var html = template("tpl", {
        data: a,
      });
      var show_ = document.getElementsByClassName("show")[0];
      show_.innerHTML = "";
      show_.innerHTML = html;
    }
  });
});
