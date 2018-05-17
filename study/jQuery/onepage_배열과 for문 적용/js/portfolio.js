$(document).ready(function(){
	
	var top_container = [
	$(".container_0").offset().top,
	$(".container_1").offset().top,
	$(".container_2").offset().top,
	$(".container_3").offset().top,
	$(".container_4").offset().top,
	$(".container_5").offset().top,
	];
	
	var nowIdx = 0;
	
	$(".gnb>li>a").on("click", function(evt){
		nowIdx = $(".gnb>li>a").index(this);
		$("html, body").animate({"scrollTop" : top_container[nowIdx]});
		evt.preventDefault();
	});

	$(window).on("load",function(){
		$("html, body").animate({"scrollTop" :0});
		$(".gnb>li>a").eq(0).parent().addClass("on").siblings().removeClass("on");
	});
	
});



















