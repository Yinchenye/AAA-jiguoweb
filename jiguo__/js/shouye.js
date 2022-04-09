$(function () {
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
});
