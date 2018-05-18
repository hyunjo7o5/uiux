$(document).ready(function(){
	
	//console.log("연결성공");
	
	/*
	각  section 요소의 top 값(top값=문서/브라우저/body 로 부터의 거리)을
	구할때 사용되는 jQuery 메소드 == ?offset().top
	*/
	
	var  top_container_0 = $(".container_0").offset().top;
	var  top_container_1 = $(".container_1").offset().top;
	var  top_container_2 = $(".container_2").offset().top;
	var  top_container_3 = $(".container_3").offset().top;
	var  top_container_4 = $(".container_4").offset().top;
	var  top_container_5 = $(".container_5").offset().top;
	
	console.log("top_container_0 = ", top_container_0);
	console.log("top_container_1 = ", top_container_1);
	console.log("top_container_2 =", top_container_2);
	console.log("top_container_3 =", top_container_3);
	console.log("top_container_4 =", top_container_4);
	console.log("top_container_5 =", top_container_5);
	
	//0번째 메뉴 - li 클릭 이벤트 구문
	
	$(".gnb>li>a").eq(0).on("click", function(evt){
		
		$("html, body").animate({scrollTop:top_container_0});
		evt.preventDefault(); //앵커태그의 기본기능 무력화
	});
	
	$(".gnb>li>a").eq(1).on("click",function(evt){
		$("html, body").animate({scrollTop:top_container_1-50});
		evt.preventDefault();
	});
	
	$(".gnb>li>a").eq(2).on("click", function(evt){
		$("html, body").animate({scrollTop:top_container_2-50});
		evt.preventDefault();
	});
	
	$(".gnb>li>a").eq(3).on("click",function(evt){
		$("html, body").animate({scrollTop:top_container_3-50});
		evt.preventDefault();
	});
	
	$(".gnb>li>a").eq(4).on("click",function(evt){
		$("html, body").animate({scrollTop:top_container_4-50});	
		evt.preventDefault();
	});
	
	$(".gnb>li>a").eq(5).on("click",function(evt){
		$("html, body").animate({scrollTop:top_container_5-50});
		evt.preventDefault();
		});
		
		
		//문서가 load(된 시점에) 이벤트 구문
		/*$(window).on("load", function(){
			
			$("html, body").animate({scrollTop:0});
			$(".gnb>li>a").eq(0).parent().addClass("on"); //첫번째 메뉴 활성화
		
			
		});*/
		
	
	
	//스크롤 이벤트 구문 - 주체는 항상 $(window)
	$(window).on("scroll",function(){
		
		/*
		만약 $(window).scrollTop()  값이 700보다 크다면
		$(nav)에게 .n-fixed 클래스를 추가하고 
		$(".container_1")에게 margin-top:50px
		그렇지 않으면 (700보다 작을 시)
		$(nav)에게서 .n-fixed 클래스를 제거한다.
		$(".container_1")에게 margin-top:0
		*/
		
		/*
		if($(window).scrollTop()>top_container_1-50){
			$("nav").addClass("n-fixed");
			$(".container_1").css("margin-top","100px");
		}else{
			$("nav").removeClass("n-fixed");
			$(".container_1").css("margin-top","0px");
		}
		*/
		
		
		if($(window).scrollTop()>=top_container_0){
			$(".gnb>li>a").eq(0).parent().addClass("on").siblings().removeClass("on");
		}
		
		
		if($(window).scrollTop()>=top_container_1-50){
			$(".gnb>li>a").eq(1).parent().addClass("on").siblings().removeClass("on");
		}
		
		
		if($(window).scrollTop()>=top_container_2-50){
			$(".gnb>li>a").eq(2).parent().addClass("on").siblings().removeClass("on");
		}
		
		if($(window).scrollTop()>=top_container_3-50){
			$(".gnb>li>a").eq(3).parent().addClass("on").siblings().removeClass("on");
		}
		
		if($(window).scrollTop()>=top_container_4-50){
			$(".gnb>li>a").eq(4).parent().addClass("on").siblings().removeClass("on");
		}
		
		if($(window).scrollTop()>=top_container_5-50){
			$(".gnb>li>a").eq(5).parent().addClass("on").siblings().removeClass("on");
		}
		
		
	});
	
	var lightbox_idx = 0;//몇번째 라이트 박스인지를 알려주는 인덱스
	
	$(".click>a").on("click",function(evt){
		
		lightbox_idx = $(".click>a").index(this);
		
		$(".shadow").show();
		$(".lightbox").show();
		$(".sub").eq(lightbox_idx).show();
		evt.preventDefault();		
	});
/*	
	$(".click>a").eq(0).on("click",function(evt){
		lightbox_idx = 0;
		$(".shadow").show();
		$(".lightbox").show();
		$(".lightbox1").show();
		evt.preventDefault();
	});
	
	$(".click>a").eq(1).on("click",function(evt){
		lightbox_idx = 1;
		$(".shadow").show();
		$(".lightbox").show();
		$(".lightbox2").show();
		evt.preventDefault();
	});
	
	$(".click>a").eq(2).on("click",function(evt){
		lightbox_idx = 2;
		$(".shadow").show();
		$(".lightbox").show();
		$(".lightbox3").show();
		evt.preventDefault();
	});
	
	$(".click>a").eq(3).on("click",function(evt){
		lightbox_idx = 3;
		$(".shadow").show();
		$(".lightbox").show();
		$(".lightbox4").show();
		evt.preventDefault();
	});
*/	
	
	
	$(".clse").on("click",function(){
		$(".sub").eq(lightbox_idx).hide();
		$(".lightbox").hide();
		$(".shadow").hide();
		
	});
			
	//부모(.shadow) 영역으로의 이벤트 전파 stop
	$(".lightbox").on("click",function(evt){
		evt.stopPropagation();
	});
	
	
	
	
	
});



















