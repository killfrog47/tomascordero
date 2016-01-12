$(window).resize(function() {
	var headerHeight = $('header').height(),
		logoHeight = $('.intro-box').height(),
		topCalc = (headerHeight / 2) - (logoHeight / 2);

	$('.intro-box').css('top', topCalc+'px');
});
var backgrounds = ['home-img-01.jpg','home-img-02.jpg','home-img-03.jpg','home-img-04.jpg','home-img-05.jpg','home-img-06.jpg','home-img-07.jpg','home-img-08.jpg'];

function change_bg(counter){
	var new_bg = backgrounds[counter];
	$('.background').delay('5000').fadeOut('250', function() {
		$(this).css('background-image', 'url(assets/images/home-page/'+new_bg);
	}).fadeIn('250');
	setTimeout(function(){
		if(counter >= (backgrounds.length - 1)){
			change_bg(0);
		}else{
			change_bg(counter + 1);
		}
	}, 5000);

}

$(function(){
	var headerHeight = $('header').height(),
		logoHeight = $('.intro-box').height(),
		topCalc = (headerHeight / 2) - (logoHeight / 2);

	$('.intro-box').css('top', topCalc+'px');

	// $('.intro-box h1').hide().css('top', '0px').fadeIn(2000);

	change_bg(0);
	
	// setTimeout(function(){
	// 	$('.intro-box h1').fadeOut(2000, function(){
	// 		$('nav.navigation').fadeIn(1000);
	// 	})
	// })
})