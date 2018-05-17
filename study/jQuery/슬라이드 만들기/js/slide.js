$(document).ready(function(){
	
	var nowIdx = 0; //현재 슬라이드의 인덱스 0~4
	
	var $indicator = $("#slides>.slides-pagination>li>a");
	

	
	//1단계 - 인디케이터에 대한 클릭 이벤트 구문
	
	$indicator.on("click", function(evt){
		
		//console.log("인디케이터 클릭성공");
		
		//1)이번에 클릭한 요소의 인덱스값을 추출
		nowIdx = $indicator.index(this);
		
		//2)해당 인디케이터 활성화 .on 클래스 추가
		$indicator.eq(nowIdx).parent().addClass("on").siblings().removeClass("on");
		
		//3)인덱스값에 매칭되는 슬라이드 위치로 이동
		$("#slides>.slides-container").stop().animate({
			"left" : -100*nowIdx + "%"
			
		});
		
		evt.preventDefault();
	});
	
	
	//2단계 - 이전, 다음 버튼에 대한 클릭 이벤트 구문
	$("#slides>.slides-prev").on("click",function(evt){
		
		//1)이전 슬라이드에 해당하는 인덱스 값을 추출
		if(nowIdx==0){
			nowIdx = 4;
		}else{
			nowIdx = nowIdx - 1;
		}
		
		//2)해당 인디케이터 활성화 .on 클래스 추가
		$indicator.eq(nowIdx).parent().addClass("on").siblings().removeClass("on");
		
		//3)인덱스값에 매칭되는 슬라이드 위치로 이동
		$("#slides>.slides-container").stop().animate({
			"left" : -100*nowIdx + "%"
			
		});
			
		evt.preventDefault();
	});
	
	$("#slides>.slides-next").on("click",function(evt){
		
		//1)다음 슬라이드에 해당하는 인덱스 값을 추출
		if(nowIdx==4){
			nowIdx = 0;
		}else{
			nowIdx = nowIdx + 1;
		}
		
		//2)해당 인디케이터 활성화 .on 클래스 추가
		$indicator.eq(nowIdx).parent().addClass("on").siblings().removeClass("on");
		
		//3)인덱스값에 매칭되는 슬라이드 위치로 이동
		$("#slides>.slides-container").stop().animate({
			"left" : -100*nowIdx + "%"
			
		});
			
		evt.preventDefault();
	});

	
	//3단계 - 자동실행
	
	var intervalId = setInterval(function(){
		
		//다음 버튼 클릭
		$("#slides>.slides-next").trigger("click"); //해당요소에 클릭이벤트 강제로 발생
		
	}, 2000);
	
	
	
	
	
});