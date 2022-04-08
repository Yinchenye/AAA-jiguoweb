// 封装ajax
// get方式
function get_(url_) {
  //     var ajax_ = new XMLHttpRequest();
  //     ajax_.open("GET", url_);
  //     ajax_.send();
  //     ajax_.onreadystatechange = function () {
  //       if (ajax_.readyState == 4) {
  //         if (ajax_.status == 200) {
  //           var data = JSON.parse(ajax_.responseText);
  //           console.log(data);
  //         }
  //       }
  //     };
  $.ajax({
    url: url_,
    type: "get",
    dataType: "json",
    async: false,
    success: function (data) {
      a = data;
      // console.log(data);
      // return data;
    },
  });
}
