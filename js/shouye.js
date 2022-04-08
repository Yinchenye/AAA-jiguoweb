window.onload = function () {
  //   get_("http://192.168.184.1:3000/report/hot");
  //   console.log(a);
  //   var html = template("tpl", {
  //     data_: a,
  //   });
  //   var div1 = document.getElementsByClassName("fourth_content")[0];
  //   div1.innerHTML = html;
  // };
  $(function () {
    // 返回顶部
    $(".back").on("click", function () {
      $("html,body").stop().animate(
        {
          scrollTop: 0,
        },
        "fast"
      );
    });
  });
};
