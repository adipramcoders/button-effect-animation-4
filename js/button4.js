$(document).ready(function(){
	var b6trance=0;
	$(".b6subcont1").click(function(){
		if(b6trance==0)
			{
				$(".b6trans").css({transform:"translateY(-3rem)",});
				setTimeout(function(){
					$(".b6trans").css({transform:"translateY(-6rem)",});
					$(".tick").css({"animation-name":"checkmark","animation-duration": "1s","animation-timing-function": "ease"});
				}, 2000);

			}
		else
			{
				
			}
	});
});