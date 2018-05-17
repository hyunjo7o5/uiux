$(function(){

	



	/*
	load 이벤트는 문서의 텍스트와 이미지등 모든 데이터를 메모리 적재완료한 시점에 작동
	*/
	$(".loading>p").fadeOut(); //기본 시간 0.4초(400)
	$(".loading").delay(350).fadeOut(800);
	$("#home").height($(window).height());//DOM트리 구성이 완료된 시점(ready)에 높이값설정
	
	$(window).on("load resize",function(){
		
		if($(window).width()>767){/*브라우저의 폭이>767*/
			$("h1").css({
			"margin-left":-$("h1").width()/2,
			"top":$("#home h2").offset().top-70
			});
		}else{
			$("h1").css({
			"margin-left":-$("h1").width()/2,
			"top":$("#home h2").offset().top-50
			});
			
		}
		
		
		
		
		$("#home").height($(window).height()); //pc 모드-인라인 방식으로 적용(특정도값 1000점)
		
	});
	
	
	
	
});