$(document).ready(function(){

	var nowIdx = 0;
	
	setInterval(function(){
		$(".slides-container>li").eq(nowIdx).fadeOut();
		
		if(nowIdx==3){
			nowIdx = 0;
		}else{
			nowIdx = nowIdx + 1;
		}
		
		$(".slides-container>li").eq(nowIdx).fadeIn();
		
	},2000);
});