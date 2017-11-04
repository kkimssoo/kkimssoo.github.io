$("#hamburger").on("click", function(){
	$("#hamburger").toggleClass("open");
	$("#innernav").fadeToggle(200);

});


$(window).scroll(function() {     
    var scroll = $(window).scrollTop();
    if (scroll > 160) {
        $("header").addClass("active");
        $("#logo").addClass("active");
        $( "header img" ).replaceWith( "<span>FROM - COLLECT AND REMEMBER</span>" );
        $("nav").addClass("active");
    }
    else {
        $("header").removeClass("active");
        $("#logo").removeClass("active");
        $( "a span" ).replaceWith( "<img src='img/fromapp-logo.png'>" );
        $("nav").removeClass("active");
    }
});


$('.hero-carousel').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  arrows: true,
  cssEase: 'linear',
  prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
  nextArrow: '<button class="slick-next" aria-label="Next" type="button"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>'
});




$(".gallery").masonry({
  itemSelector: ".thumbnail",
  columnWidth: ".thumbnail",
  percentPosition: true
});



$(".gallery a").simpleLightbox({

});


