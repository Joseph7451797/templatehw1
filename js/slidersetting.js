$(window).load(function() {
    $('.flexslider').flexslider({
    	animation: "slide",
    	slideshowSpeed: 200000,
    	randomize: true,
    	pauseOnAction: true,            
    	pauseOnHover: true,
    	customDirectionNav: $(".custom-navigation a")  
    });
});