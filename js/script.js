$('.navbar-toggle').on('click',function(){
	if($(window).width() <= 991)
	{
		if(!$('.nav-list').hasClass('open'))
		{
			$('.nav-list').addClass('open');
			$('.wrapper').addClass('open');
			// $('.carousel-inner').addClass('open');
			// $('.carousel-indicators').addClass('open');
		}
		else
		{
			$('.nav-list').removeClass('open');
			$('.wrapper').removeClass('open');
			// $('.carousel-inner').removeClass('open');
			// $('.carousel-indicators').removeClass('open');
		}
	}
});
$('.slide-close').on('click',function(){
	$('.slide-show').css('display','none');
});
$('.slide-show-btn').on('click',function(){
	$('.slide-show').css('display','block');
});