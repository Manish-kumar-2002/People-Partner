$(document).ready(function () {
    $('.hamburger').click(function () {
        $(this).toggleClass('active-btn');
        $('.nav').toggleClass('active-nav');
        $('.active-down').removeClass('active-down');
        $('.active-sub').removeClass('active-sub');
    });

    $('.icon-down').click(function () {
        $(this).toggleClass('active-down');
        $('.menu ul').toggleClass('active-sub');
    });

    $(window).on('resize', function () {
        if ($(window).width() > 767) {
            $('.hamburger').removeClass('active-btn');
            $('.nav').removeClass('active-nav');
            $('.icon-down').removeClass('active-down');
            $('.menu ul').removeClass('active-sub');
        }
    });


    $('.solution-slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        arrow:false
      });




      var slideWrapper = $(".banner-slider");
// When the slide is changing
function playPauseVideo(slick, control){
  var currentSlide, slideType, startTime, video;

  currentSlide = slick.find(".slick-current");
  slideType = currentSlide.attr("class").split(" ")[1];
  startTime = currentSlide.data("video-start");

  if (slideType === "video") {
    video = currentSlide.children("video").get(0);
    if (video != null) {
      if (control === "play"){
        video.play();
      } else {
        video.pause();
      }
    }
  }
}

// DOM Ready
$(function() {
  // Initialize
  slideWrapper.on("beforeChange", function(event, slick) {
    slick = $(slick.$slider);
    playPauseVideo(slick,"pause");
  });
  slideWrapper.on("afterChange", function(event, slick) {
    slick = $(slick.$slider);
    playPauseVideo(slick,"play");
  });


  //start the slider
  slideWrapper.slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    arrow:false,
    dots:true
  });
});


});


