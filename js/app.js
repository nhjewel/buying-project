// minimum two digits
function minTwoDigits(n) {
  return (n < 10 ? "0" : "") + n;
}

// ready
$(document).ready(function () {
  // sliders
  (function () {
    slider(".js-hero-1");

    function slider(className) {
      const el = $(className);
      if (el.length) {
        const slider = el.find(className + "-slider"),
          prevArrow = el.find(className + "-prev"),
          nextArrow = el.find(className + "-next"),
          current = el.find(className + "-current"),
          total = el.find(className + "-total"),
          dotsContainer = el.find(className + "-dots"),
          more = el.find(className + "-more"),
          play = el.find(className + "-play"),
          items = slider.find("> div");

        let dots = false;
        if (dotsContainer.length) {
          dots = true;
        }

        if (total.length) {
          total.text(minTwoDigits(items.length));
        }

        slider.slick({
          infinite: true,
          fade: true,
          prevArrow: prevArrow,
          nextArrow: nextArrow,
          dots: dots,
          appendDots: dotsContainer,
        });

        if (more.length) {
          slider.on("afterChange", function (event, slick, currentSlide) {
            more.attr("href", items.eq(currentSlide).data("more"));
          });
        }

        if (play.length) {
          slider.on("afterChange", function (event, slick, currentSlide) {
            play.attr("href", items.eq(currentSlide).data("play"));
          });
        }

        if (current.length) {
          slider.on("afterChange", function (event, slick, currentSlide) {
            let value = slider.slick("slickCurrentSlide") + 1;
            current.text(minTwoDigits(value));
          });
        }
      }
    }
  })();
});
