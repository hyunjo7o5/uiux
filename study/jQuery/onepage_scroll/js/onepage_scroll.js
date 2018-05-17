$(document).ready(function(){
	
	var $article = $("article");
	
	var nowIdx = 0; //현재 선택된 메뉴의 인덱스 번호
	
	var aniFlag = false; //페이지가 animate 중인지 표시하는 역할( true : 이동중, false : 멈춤상태)
	
	$article.height($(window).height()); //article의 높이값에 브라우저의 높이값이 적용되는 코드
	
	// $article.css("height",$(window).height())
	$article.css("line-height",$(window).height()+"px"); //세로중앙정렬
	
	
	/*console.log($("nav").height());
	하나의 어떤 값을 알고싶을때 console 로 확인하면 좋음*/
	
	$(window).on("resize",function(){
		$article.height($(window).height()); //article의 높이값에 브라우저의 높이값이 적용되는 코드
	
		$article.css("line-height",$(window).height()+"px");
		
	});
	
	//1-문서가 load(된 시점) 이벤트 구문
	$(window).on("load",function(){
		$(".gnb>li>a").eq(0).parent().addClass("on");
		$("html, body").stop().animate({"scrollTop" : 0});
		
	});
	//2-스크롤 이벤트 구문 
	$(window).on("scroll", function(){
		
	/*	if($(window).scrollTop()>=$(".cont0").offset().top){
			$(".gnb>li>a").eq(0).parent().addClass("on").siblings().removeClass("on");
		} 
		
		if($(window).scrollTop()>=$(".cont1").offset().top){
			$(".gnb>li>a").eq(1).parent().addClass("on").siblings().removeClass("on");
		} 
		
		if($(window).scrollTop()>=$(".cont2").offset().top){
			$(".gnb>li>a").eq(2).parent().addClass("on").siblings().removeClass("on");
		} 
		
		if($(window).scrollTop()>=$(".cont3").offset().top){
			$(".gnb>li>a").eq(3).parent().addClass("on").siblings().removeClass("on");
		} 
		
		if($(window).scrollTop()>=$(".cont4").offset().top){
			$(".gnb>li>a").eq(4).parent().addClass("on").siblings().removeClass("on");
		} 
	*/
		
	});
	//0번째 메뉴-li에 대한 클릭 이벤트 구문
	$(".gnb>li>a").eq(0).on("click",function(evt){
		
		$("html, body").stop().animate({"scrollTop" :$(".cont0").offset().top});
		$(".gnb>li>a").eq(0).parent().addClass("on").siblings().removeClass("on");	
		evt.preventDefault();
	});
	//1번째 메뉴-li에 대한 클릭 이벤트 구문
	$(".gnb>li>a").eq(1).on("click",function(evt){
		
		$("html, body").stop().animate({"scrollTop" :$(".cont1").offset().top});
		$(".gnb>li>a").eq(1).parent().addClass("on").siblings().removeClass("on");	
		evt.preventDefault();
	});
	//2번째 메뉴-li에 대한 클릭 이벤트 구문
	$(".gnb>li>a").eq(2).on("click",function(evt){
		
		$("html, body").stop().animate({"scrollTop" :$(".cont2").offset().top});
		$(".gnb>li>a").eq(2).parent().addClass("on").siblings().removeClass("on");
		evt.preventDefault();
	});
	//3번째 메뉴-li에 대한 클릭 이벤트 구문
	$(".gnb>li>a").eq(3).on("click", function(evt){
		
		$("html, body").stop().animate({"scrollTop":$(".cont3").offset().top});
		$(".gnb>li>a").eq(3).parent().addClass("on").siblings().removeClass("on");
		evt.preventDefault();
		
	});
	//4번째 메뉴-li에 대한 클릭 이벤트 구문
	$(".gnb>li>a").eq(4).on("click",function(evt){
		
		$("html, body").stop().animate({"scrollTop" :$(".cont4").offset().top});
		$(".gnb>li>a").eq(4).parent().addClass("on").siblings().removeClass("on");
		evt.preventDefault();
	});
	
	
	
	//마우스휠 스크롤에 대한 이벤트 구문
	$(window).on("mousewheel DOMMouseScroll",function(evt){
		
		//console.log("마우스휠성공");
		
		//console.log(evt.originalEvent.wheelDelta);
		
		if(aniFlag==false){
			
			if(evt.originalEvent.wheelDelta>0 || evt.originalEvent.detail<0){//위쪽으로 휠 스크롤 : 플러스값 180
				if(nowIdx>0){
				nowIdx = nowIdx -1;}
			} else{//아래쪽으로 휠 스크롤 : 마이너스값 -180
				if(nowIdx<4){
				nowIdx = nowIdx + 1;}
			}
			
			console.log(nowIdx);
			//선택된 메뉴 활성화 표시
			$(".gnb>li>a").eq(nowIdx).parent().addClass("on").siblings().removeClass("on");
			
			aniFlag = true;
			
			//해당 article 영역으로 문서를 animate()
			$("html, body").stop().animate({"scrollTop": $("article").eq(nowIdx).offset().top}, function(){
				
				//animate가 끝나면 실행되는 함수
				aniFlag=false;
				
			});
			
		}
		
	});
	
});







