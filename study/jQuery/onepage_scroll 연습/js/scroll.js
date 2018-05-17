$(document).ready(function(){

	var $article = $("article");
	
	var nowIdx = 0;
	
	var aniFlag = false;
	
	$article.height($(window).height());
	$article.css("line-height", $(window).height()+"px");
	
	//console.log($("nav").height());
	
	$(window).on("resize".function(){
		$article.height($(window).height());
		$article.css("line-height", $(window).height()+"px");
	});
	
	$(window).on("load",function(){
		$(".gnb>li>a").eq(0).parent().addClass("on");
		$("html, body").stop().animate({"scrollTop":0});
	});
	
	
	
	
	$(".gnb>li>a").eq(0).on("click",function(evt){
		$("html,body").stop().animate({"scrollTop":$(".cont0").offset().top});
		$(".gnb>li>a").eq(0).parent().addClass("on").siblings().removeClass("on");
		evt.preventDefault();
	});
	
	$(".gnb>li>a").eq(1).on("click",function(evt){
		$("html,body").stop().animate({"scrollTop":$(".cont1").offset().top});
		$(".gnb>li>a").eq(1).parent().addClass("on").siblings().removeClass("on");
		evt.preventDefault();
	});
	$(".gnb>li>a").eq(2).on("click",function(evt){
		$("html,body").stop().animate({"scrollTop":$(".cont2").offset().top});
		$(".gnb>li>a").eq(2).parent().addClass("on").siblings().removeClass("on");
		evt.preventDefault();
	});
	$(".gnb>li>a").eq(3).on("click",function(evt){
		$("html,body").stop().animate({"scrollTop":$(".cont3").offset().top});
		$(".gnb>li>a").eq(3).parent().addClass("on").siblings().removeClass("on");
		evt.preventDefault();
	});
	$(".gnb>li>a").eq(4).on("click",function(evt){
		$("html,body").stop().animate({"scrollTop":$(".cont4").offset().top});
		$(".gnb>li>a").eq(4).parent().addClass("on").siblings().removeClass("on");
		evt.preventDefault();
	});
	
	$(window).on("mousewheel DOMMouseScroll",function(evt){
		
		if(aniFlag==false){
			
			if(evt.originalEvent.wheelDelta>0 || evt.originalEvent.detail<0){
				if(nowIdx>0){
					nowIdx = nowIdx -1;}
			}else{
				if(nowIdx<4){
					nowIdx = nowIdx+1;}
			}
			
			console.log(nowIdx);
			
			$(".gnb>li>a").eq(nowIdx).parent().addClass("on").siblings().removeClass("on");
			
			aniFlag= true;
			
			$("html, body").stop().animate({"scrollTop":$("article").eq(nowIdx).offset().top},
			function(){
				aniFlag=false;
				
			});
			
		}
		
	});
	
	
});

	


