$(document).ready(function() {

	$('.next').click(function(event) {
		var currentImage = $('.img.curry');
		var currentImageIndex = $('.img.curry').index();
		var nextImageIndex=currentImageIndex+1;
		var nextImage=$('.img:eq('+ nextImageIndex+')');
		currentImage.fadeOut('1000',function(){
					if(nextImageIndex==($('.img:last').index()+1)){
						$('.img:first').fadeIn(1000);
						$('.img:first').addClass('curry');
					}else{
						nextImage.fadeIn(1000);
						nextImage.addClass('curry');
					}
		});
		currentImage.removeClass('curry');
	});

	$('.prev').click(function(event) {
		var currentImage = $('.img.curry');
		var currentImageIndex = $('.img.curry').index();
		var prevImageIndex=currentImageIndex-1;
		var prevImage=$('.img').eq(prevImageIndex);
		currentImage.fadeOut('1000',function(){
					if(prevImageIndex==($('.img:first').index()-1)){
						$('.img:last').fadeIn(1000);
						$('.img:last').addClass('curry');
					}else{
						prevImage.fadeIn(1000);
						prevImage.addClass('curry');
					}
		});
		currentImage.removeClass('curry');
	});

});