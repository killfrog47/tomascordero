$(window).resize(function() {
	var headerHeight = $('header').height(),
		logoHeight = $('.intro-box').height(),
		topCalc = (headerHeight / 2) - (logoHeight / 2);

	$('.intro-box').css('top', topCalc+'px');
});


$(function(){
	var headerHeight = $('header').height(),
		logoHeight = $('.intro-box').height(),
		topCalc = (headerHeight / 2) - (logoHeight / 2);

	$('.intro-box').css('top', topCalc+'px');

	$('.intro-box h1').hide().css('top', '0px').fadeIn(2000);

	
	
	// setTimeout(function(){
	// 	$('.intro-box h1').fadeOut(2000, function(){
	// 		$('nav.navigation').fadeIn(1000);
	// 	})
	// })
})