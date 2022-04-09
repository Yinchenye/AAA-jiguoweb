window.onload = function () {
  var aaa = null;
  var num = 60;
  $(".getCode").on("click", function () {
    if (num == 0) {
      clearInterval(aaa);
      $(".getCode").text("获取验证码");
      num = 60;
    } else {
      clearInterval(aaa);
      aaa = setInterval(function () {
        num--;
        $(".getCode").text(num + "秒后重新发送");
      }, 1000);
    }
  });
};

$(".submit").on("click", function () {
  if ($(".imgCode").val() == "" && $(".code").val() == "") {
    alert("验证码不能为空");
    return false;
  } else if ($(".psw1").val() != $(".psw2").val()) {
    alert("密码不一样，请重新填写");
    return false;
  } else if ($(".user").val() < 8 && $(".psw1").val() < 8) {
    alert("用户名和密码均不能小于8位数");
    return false;
  }
});
