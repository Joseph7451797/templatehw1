$(window).load(function() {
    $('.flexslider').flexslider({
    	animation: "fade",
    	slideshowSpeed: 5000,
    	randomize: true,
    	pauseOnAction: true,            
    	pauseOnHover: true,
    	customDirectionNav: $(".custom-navigation a")  
    });

    $('.words-slider').flexslider({
    	animation: "slide",
    	slideshowSpeed: 8000,
    	pauseOnAction: true,            
    	pauseOnHover: true 
    });
});