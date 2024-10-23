$(function () {
    var siteSticky = function () {
      $(".js-sticky-header").sticky({ topSpacing: 0 });
    };
    siteSticky();
  
    var siteMenuClone = function () {
      $(".js-clone-nav").each(function () {
        var $this = $(this);
        $this
          .clone()
          .attr("class", "site-nav-wrap")
          .appendTo(".site-mobile-menu-body");
      });
  
      setTimeout(function () {
        var counter = 0;
        $(".site-mobile-menu .has-children").each(function () {
          var $this = $(this);
  
          $this.prepend('<span class="arrow-collapse collapsed">');
  
          $this.find(".arrow-collapse").attr({
            "data-toggle": "collapse",
            "data-target": "#collapseItem" + counter,
          });
  
          $this.find("> ul").attr({
            class: "collapse",
            id: "collapseItem" + counter,
          });
  
          counter++;
        });
      }, 1000);
  
      $("body").on("click", ".arrow-collapse", function (e) {
        var $this = $(this);
        var targetSelector = $this.attr("data-target");  // Get the target from data-target attribute
        var target = $(targetSelector);  // Use the selector to find the target element
  
        if (target.hasClass("show")) {
          $this.removeClass("active");
          target.removeClass("show");
        } else {
          // Close any other open items in the same level
          $this.closest("ul").find(".collapse").removeClass("show");
          $this.closest("ul").find(".arrow-collapse").removeClass("active");
  
          // Add active and show to the current item
          $this.addClass("active");
          target.addClass("show");
        }
        e.preventDefault();
      });
  
      $(window).resize(function () {
        var $this = $(this),
          w = $this.width();
  
        if (w > 768) {
          if ($("body").hasClass("offcanvas-menu")) {
            $("body").removeClass("offcanvas-menu");
          }
        }
      });
  
      $("body").on("click", ".js-menu-toggle", function (e) {
        var $this = $(this);
        e.preventDefault();
  
        if ($("body").hasClass("offcanvas-menu")) {
          $("body").removeClass("offcanvas-menu");
          $this.removeClass("active");
        } else {
          $("body").addClass("offcanvas-menu");
          $this.addClass("active");
        }
      });
  
      // click outside offcanvas
      $(document).mouseup(function (e) {
        var container = $(".site-mobile-menu");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
          if ($("body").hasClass("offcanvas-menu")) {
            $("body").removeClass("offcanvas-menu");
          }
        }
      });
    };
    siteMenuClone();
  });
  
  $(document).ready(function() {
    // Function to check if an element is in the viewport
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    // Animate the section when it comes into view
    function animateOnScroll() {
      const $bestSellerSection = $('.best-seller-section');

      if (isElementInViewport($bestSellerSection[0])) {
        // Trigger the animation for the section
        $bestSellerSection.css('opacity', '1').css('transform', 'scale(1)');

        // Trigger the animation for product cards
        $bestSellerSection.find('.product-card').each(function(index) {
          $(this).delay(index * 100).animate({ opacity: 1, transform: 'scale(1)' }, 500);
        });

        // Remove the scroll event listener after the animation has triggered
        $(window).off('scroll', animateOnScroll);
      }
    }

    // Bind the scroll event
    $(window).on('scroll', animateOnScroll);

    // Trigger the animation when the page loads if the section is in the viewport
    animateOnScroll();
  });

  $(document).ready(function() {
    // Function to check if an element is in the viewport
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    // Animate the news section when it comes into view
    function animateOnScroll() {
      const $newsSection = $('.news-section');

      if (isElementInViewport($newsSection[0])) {
        // Fade in the section
        $newsSection.css('opacity', '1');

        // Animate the news cards with slide in and fade effect
        $newsSection.find('.news-card').each(function(index) {
          $(this).delay(index * 200).css({
            opacity: 1,
            transform: 'translateX(0)',
            animation: 'slideIn 0.5s forwards' // Use the defined animation
          });
        });

        // Remove the scroll event listener after the animation has triggered
        $(window).off('scroll', animateOnScroll);
      }
    }

    // Bind the scroll event
    $(window).on('scroll', animateOnScroll);

    // Trigger the animation when the page loads if the section is in the viewport
    animateOnScroll();
  });

  $(document).ready(function() {
    // Function to check if an element is in the viewport
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    // Animate the features section when it comes into view
    function animateOnScroll() {
      const $featuresSection = $('.features-section');

      if (isElementInViewport($featuresSection[0])) {
        // Fade in the section
        $featuresSection.css('opacity', '1');

        // Animate each feature card with fade and slide effect
        $featuresSection.find('.feature').each(function(index) {
          $(this).delay(index * 200).css({
            opacity: 1,
            animation: 'fadeInSlideUp 0.5s forwards' // Use the defined animation
          });
        });

        // Remove the scroll event listener after the animation has triggered
        $(window).off('scroll', animateOnScroll);
      }
    }

    // Bind the scroll event
    $(window).on('scroll', animateOnScroll);

    // Trigger the animation when the page loads if the section is in the viewport
    animateOnScroll();
  });

  