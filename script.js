$(document).ready(function () {
    $(".icons")
      .hover(function () {
        $(this).css({
          "height": "6%",
          "width": "6%"
        });
      }, function () {
        $(this).css({
          "height": "5%",
          "width": "5%"
        });
      });
  });