$(document).ready(function(){
	
	var nowIdx = 0; /*보여지는 슬라이드에 해당하는 인덱스 번호 0, 1, 2*/
	
	//1-메인메뉴
	$(".gnb>li").on("click",function(){
		$(this).addClass("on").siblings().removeClass("on");
		$(this).children(".submenu").slideDown();
		$(this).siblings().children(".submenu").slideUp();
	});//각 메뉴별 클릭시 해당 서브메뉴를 펼치고, 마우스 아웃 상태에서도 서브메뉴 유지

	$(".submenu>li").on("click",function(){
		$(this).parent().slideUp();
		$(this).parents("li").removeClass("on");
		return false;//부모로의 클릭이벤트 전달을 막음
	});//서브메뉴 클릭시 기존에 펼처진 서브메뉴를 사라지게함
	
	
	
	
	//2-슬라이드 배너(페이드 스타일)
	setInterval(function(){
		
		//현재 보이고 있는 슬라이드는 사라진다.-fadeOut 
		$(".slides-container>li").eq(nowIdx).fadeOut();

		//다음번 슬라이드 인덱스 번호추출
		if(nowIdx==2){
			nowIdx = 0;
		}else{
			nowIdx = nowIdx + 1;
				}
		//다음번 인덱스에 해당하는 슬라이드는 나타난다.-fadeIn
		$(".slides-container>li").eq(nowIdx).fadeIn();

	},2000);//setInterval()은 2초 간격으로 자동 실행 함수
		




	//3-팝업창
	$(".new2>p").on("click",function(){
		$(".popup").show();
	});//요소를 클릭했을때 팝업 띄우기-show

	$(".popup button").on("click",function(){
		$(".popup").hide();
	});//닫기 버튼을 클릭했을 때 팝업 숨기기-hide
	

});