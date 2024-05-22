$(document).ready(function () {
  // Check window width
  var breakpoint = 768;

  // Feed hover over image to show video if window width is greater than breakpoint
  if (window.innerWidth > breakpoint) {
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
  }

  // Function to check if the device is a mobile device based on screen size
  function isMobileDevice() {
    return window.matchMedia("(max-width: 768px)").matches;
  }

  // Check if the device is a mobile device
  if (isMobileDevice()) {
    // Remove the video element if it's a mobile device
    const videoContainer = document.querySelector("video");
    if (videoContainer) {
      videoContainer.parentNode.removeChild(videoContainer);
    }
  }

  // Get the text element
  const textElement = document.getElementById("disappear");

  // Set a timeout to hide the text after 10 seconds
  setTimeout(() => {
    textElement.style.display = "none";
  }, 5000); // 5000 milliseconds = 5 seconds
});
