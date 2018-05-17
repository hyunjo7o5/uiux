$(document).ready(function(){
	
	//alert("연결확인~!");
	
	console.log("연결확인~!");
	
	/* 
	시나리오==레시피
	썸네일을 클릭했을 때
	썸네일에 매칭되는 큰 이미지명으로
	.screen>img 의 src  속성값이 변경
	*/

	
	$("header>nav>ul>li").on("click",function(){
		
		console.log("이미지클릭~!");
		
		//이번에 클릭한 녀석의 인덱스 값?
		
		//$(this).index()
		
		//li를 클릭했을때 몇 번째 것인지 알수만 있다면...좋겠다. => index(0,1,2,3~)+1
		
		//"images/big"+($(this).index()+1)+".jpg"

				
		
		$(".screen>img").attr("src","images/big"+($(this).index()+1)+".jpg");
		
	});
		
	
});