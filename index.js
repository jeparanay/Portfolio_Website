$(document).ready(function () {
  //Smooth scroll to the content of the project.
  $(function () {
    $("a[href*=\\#]").on("click", function (e) {
      e.preventDefault();
      $("html, body").animate(
        { scrollTop: $($(this).attr("href")).offset().top },
        500,
        "linear"
      );
    });
  });

  //Only play one video at a time. (defining element in viewport)
  $.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  //Only play one video at a time. (defining element in viewport)
  $(window).on("resize scroll", function () {
    $("video").each(function () {
      if ($(this).isInViewport()) {
        $(this)[0].play();
      } else {
        $(this)[0].pause();
      }
    });
  });

  //If user presses left and right arrow keys, go to previous and next pages
  $("body").keydown(function (e) {
    if (e.which == 37) {
      // left
      window.location = $(".previous").attr("href");
    } else if (e.which == 39) {
      // right
      window.location = $(".next").attr("href");
    }
  });

  //Hamburger Nav on click
  $(".hamburger").on("click", function () {
    $(".header .hamburgernav")
      .toggleClass("show")
      .animate({ opacity: 1 }, "fast");
  });
});
