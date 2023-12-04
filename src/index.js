$(".click").click(function () {
  var $heartIcon = $(this).find("span");

  if ($heartIcon.hasClass("fa-heart")) {
    $(this).removeClass("active");
    setTimeout(
      function () {
        $(this).removeClass("active-2");
      }.bind(this),
      30
    );
    $(this).removeClass("active-3");
    setTimeout(function () {
      $heartIcon.removeClass("fa-heart");
      $heartIcon.addClass("fa-heart-o");
    }, 15);
  } else {
    $(this).addClass("active");
    $(this).addClass("active-2");
    setTimeout(function () {
      $heartIcon.addClass("fa-heart");
      $heartIcon.removeClass("fa-heart-o");
    }, 150);
    setTimeout(
      function () {
        $(this).addClass("active-3");
      }.bind(this),
      150
    );
    // Additional code (if needed) for $(".info").addClass("info-tog");
    setTimeout(function () {
      // Additional code (if needed) for $(".info").removeClass("info-tog");
    }, 1000);
  }
});
