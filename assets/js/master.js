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
		$(this).css('background-image', 'url(/assets/images/home-page/'+new_bg);
	}).fadeIn('250');
	if(counter >= backgrounds.length - 1){
		counter = 0;
	}else{
		counter++;
	}
	setTimeout(function(){
		change_bg(counter);
	}, 5000);
}

function updateLoader(precentDone){
	if(precentDone < 100){
		$(".loadingBox .status").css('width', precentDone + '%');
	}else{
		$(".loadingBox").remove();
	}
}

// function preload(arrayOfImages) {
// 	var progress = 0,
// 		numberOfItems = arrayOfImages.length,
// 		precentDone = 0;

//     $(arrayOfImages).each(function () {
//         console.log(progress);
//         $('<img />').attr('src','assets/images/home-page/'+this).appendTo('.background');
//         if(progress >= 0){
//         	precentDone = progress/numberOfItems * 100;
//         }
//         updateLoader(precentDone);
//         progress++;
//     });
//     // $('.background img').eq(0).addClass('active');
// }
function preload(imageArray, index) {
        index = index || 0;
        if (imageArray && imageArray.length > index) {
            var img = new Image ();
            img.onload = function() {
                preload(imageArray, index + 1);
            }
            img.src = '/assets/images/home-page/' + imageArray[index];
        }else{
        	$('body').addClass('page-loaded');
        	change_bg(0);
        }
}
$(window).load(function() {
	preload(backgrounds);
});

$(function(){
	var headerHeight = $('header').height(),
		logoHeight = $('.intro-box').height(),
		topCalc = (headerHeight / 2) - (logoHeight / 2);

	

	// $('.background img').eq(0).addClass('active');

	$('.intro-box').css('top', topCalc+'px');

	// $('.intro-box h1').hide().css('top', '0px').fadeIn(2000);
	// if($('body').hasClass('page-loaded')){
	// 	change_bg(0);
	// }
	
	// setTimeout(function(){
	// 	$('.intro-box h1').fadeOut(2000, function(){
	// 		$('nav.navigation').fadeIn(1000);
	// 	})
	// })
})