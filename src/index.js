$(document).ready(function () {
  $(".my-slider").each(function () {
    $(this).slick({
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      speed: 300,
      infinite: false,
      autoplay: false,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  });
});

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

// Implementasi JavaScript untuk meng-handle accordion
document.addEventListener("DOMContentLoaded", function () {
  function setupPanel(panelNumber) {
    var panelCheckbox = document.getElementById("panel-" + panelNumber);
    var panelTrigger = document.getElementById(
      "panel-" + panelNumber + "-trigger"
    );

    panelTrigger.addEventListener("click", function () {
      panelCheckbox.checked = !panelCheckbox.checked;
    });
  }

  // Setup each panel
  setupPanel(1);
  setupPanel(2);
  setupPanel(3);
});

function toggleModal() {
  document.getElementById("modal").classList.toggle("hidden");
}
