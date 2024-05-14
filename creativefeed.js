$(document).ready(function () {

  //Feed hover over image to show video
  var breakpoint = 470;
  if (window.innerWidth > breakpoint) {
    $(function () {
      $(".viewer")
        .mouseenter(function () {
          var $el = $(this);
          $el.find(".thumb").hide();
          $el.find("video").show()[0].play();
        })
        .mouseleave(function () {
          var $el = $(this);
          $el.find(".thumb").show();
          $el.find("video").hide()[0].pause();
        });
    });

    //Feed hover over image to show video
    $(function () {
      $(".imgviewer")
        .mouseenter(function () {
          var $el = $(this);
          $el.find(".thumb").hide();
          $el.find(".thumb2").show();
        })
        .mouseleave(function () {
          var $el = $(this);
          $el.find(".thumb").show();
          $el.find(".thumb2").hide();
        });
    });
  }

  // Get the text element
  const textElement = document.getElementById("disappear");

  // Set a timeout to hide the text after 10 seconds
  setTimeout(() => {
    textElement.style.display = "none";
  }, 5000); // 5000 milliseconds = 5 seconds
});
