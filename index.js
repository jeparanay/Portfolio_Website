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

  //Keyboard-navigation tip: shown once ever, the first time a visitor lands on
  //any project page (identified by having both a "previous" and "next" link).
  //Persisted in localStorage, so it won't show again unless they clear site data.
  //Desktop only (arrow-key navigation isn't relevant on a touch/mobile layout) -
  //a mobile visit doesn't consume the flag, so a later desktop visit still shows it.
  if ($(".previous").length && $(".next").length && window.innerWidth > 768) {
    try {
      if (!localStorage.getItem("keyboardTipSeen")) {
        localStorage.setItem("keyboardTipSeen", "1");

        var $tip = $(
          '<div class="keyboard-tip">' +
            '<div class="keyboard-tip-arrows">← →</div>' +
            '<div class="keyboard-tip-text">Use arrow keys to switch projects</div>' +
          '</div>'
        );
        $("body").append($tip);

        // Force a reflow so the browser registers the opacity:0 starting state
        // before we add the class that transitions it in (avoids relying on
        // requestAnimationFrame, which browsers pause in a backgrounded tab).
        $tip[0].offsetHeight;
        $tip.addClass("keyboard-tip-visible");

        setTimeout(function () {
          $tip.removeClass("keyboard-tip-visible");
          setTimeout(function () {
            $tip.remove();
          }, 400); // matches the CSS opacity transition duration
        }, 5000);
      }
    } catch (e) {
      // localStorage unavailable (e.g. private browsing) - skip the tip silently.
    }
  }

  //Hamburger Nav on click
  $(".hamburger").on("click", function () {
    $(".header .hamburgernav")
      .toggleClass("show")
      .animate({ opacity: 1 }, "fast");
  });

  // Scroll-triggered animations for project cards
  function initScrollAnimations() {
    const allCards = document.querySelectorAll(".fade-in");
    
    // Automatically fade in the first row of images on page load
    // Wait for hero text animations to complete (last one finishes around 1.4s)
    function fadeInFirstRow() {
      // Get the first row - typically the first 2 projects (col-lg-6 each)
      const firstRowCards = Array.from(allCards).slice(0, 3);
      
      // Hero text animations: line (0.2s), name (0.4s), role (0.6s), description (0.8s + 0.6s = 1.4s)
      // Start images after hero animations complete, around 1.5s
      const baseDelay = 1500;
      
      firstRowCards.forEach(function(card, index) {
        setTimeout(function() {
          card.classList.add("visible");
        }, baseDelay + (index * 150)); // Stagger: 1.5s, 1.65s
      });
    }

    // Check if IntersectionObserver is supported
    if ("IntersectionObserver" in window) {
      const observerOptions = {
        root: null,
        rootMargin: "0px 0px -100px 0px",
        threshold: 0.1
      };

      const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            // Check if this card is already visible (from first row)
            if (!entry.target.classList.contains("visible")) {
              entry.target.classList.add("visible");
            }
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      // Observe all project cards with fade-in class
      allCards.forEach(function (card) {
        observer.observe(card);
      });

      // Fade in first row immediately on page load
      fadeInFirstRow();
    } else {
      // Fallback for browsers without IntersectionObserver
      $(".fade-in").each(function () {
        $(this).addClass("visible");
      });
    }
  }

  // Initialize scroll animations
  initScrollAnimations();
});

// Toggle work description expand/collapse
function toggleWorkDescription(id) {
  const expandable = document.getElementById(id + '-expandable');
  
  if (expandable) {
    expandable.classList.toggle('expanded');
  }
}
