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

  // Scroll-triggered animations for project cards
  function initScrollAnimations() {
    const allCards = document.querySelectorAll(".fade-in");
    
    // Automatically fade in the first row of images on page load
    // Wait for hero text animations to complete (last one finishes around 1.4s)
    function fadeInFirstRow() {
      // Get the first row - typically the first 2 projects (col-lg-6 each)
      const firstRowCards = Array.from(allCards).slice(0, 2);
      
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

  // Typewriter effect for hero role text
  function initTypewriter() {
    const words = ['Product', 'User Experience'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typewriterElement = document.getElementById('typewriter-text');
    
    if (!typewriterElement) return;

    function type() {
      const currentWord = words[wordIndex];
      
      if (isDeleting) {
        // Remove character
        typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        
        if (charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          setTimeout(type, 500); // Pause before typing next word
          return;
        }
      } else {
        // Add character
        typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        
        if (charIndex === currentWord.length) {
          isDeleting = true;
          setTimeout(type, 2000); // Pause at complete word
          return;
        }
      }
      
      // Typing speed
      const typingSpeed = isDeleting ? 100 : 150;
      setTimeout(type, typingSpeed);
    }
    
    // Start typing after hero animations complete (around 1.5s)
    setTimeout(function() {
      type();
    }, 1500);
  }

  // Initialize typewriter effect
  initTypewriter();
});

// Toggle work description expand/collapse
function toggleWorkDescription(id) {
  const expandable = document.getElementById(id + '-expandable');
  
  if (expandable) {
    expandable.classList.toggle('expanded');
  }
}
