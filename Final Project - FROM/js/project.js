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
  cssEase: 'linear'
});


// $('<p>Text</p>').appendTo('#Content');


    // $("<p>Hello</p>").appendTo("header");


    // $("header").append ("<span>Hello</span>");

    // $("#logo").attr("src", "" );

	// $( "#logo" ).append( "<p>Hello</p>" );
