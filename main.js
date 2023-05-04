$(function() {
  $(".slick-vertical").slick({
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    arrows: true,
    dots: true
  });
});

$(".slider").on("afterChange", function(event, slick, currentSlide) {
  $(".count").text("0" + parseInt(slick.currentSlide + 1));
});
