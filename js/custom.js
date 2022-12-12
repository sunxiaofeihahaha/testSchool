$("#slider .flexslider").flexslider({
    animation: "fade",
	slideshowSpeed: 8000,
	animationSpeed: 800, 
	touch: true,
	easing: 'swing',
	start: function (slider) {
		$(".loading").removeClass("loading");
	},
	before: function (slider) {
        slider.pause();
        slider.play();
    },
});

$("#picslider .flexslider").flexslider({
	animation: "slide",
    animationLoop: true,
    slideshow: false,
    controlNav: false,
    animationSpeed: 400,
    itemWidth: 125,
    itemMargin: 1,
	minItems: 2,
    maxItems: 5,
    touch: true
});

$('#primary-menu-trigger').click(function () {
    $('body').toggleClass('nav-open');
});

if($(window).width()>991){
	$('.page-gallery .col_one_fourth:nth-child(4n+1)').addClass('col_first');
	$('.page-gallery .col_one_third:nth-child(3n+1)').addClass('col_first');
}else{
	$('.page-gallery .col_one_fourth:nth-child(2n+1)').addClass('col_first');
	$('.page-gallery .col_one_third:nth-child(2n+1)').addClass('col_first');
}

