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
  