$(function(){
	var icoLi = $("#ico_list").find("li");
	var txtLi = $("#text_list").find("h2");
	var picLi = $("#pic_list").find("li");
	var picUl = $("#pic_list");
	var icoUl = $("#ico_list").find("ul");
	var cUlLeft = 0;
	var iC = 0;
	var timer = null;
	var txtUl = $("#text_list")

	icoLi.click(function(){
		var iC = $(this).index();
		tab(iC);
	});
	
	function autoPlay(){
		iC++;
		var ulLeft = icoUl.position().left;
		if(iC>=icoLi.length/2){
			iC=0;
			if(ulLeft != 0){
				icoUl.animate({left:0},500,"linear");
			}
		}else if(iC>=icoLi.length/4){
			if(ulLeft != -525){
				icoUl.animate({left:-525},500,"linear");
			}
		}else{
			if(ulLeft != 0){
				icoUl.animate({left:0},500,"linear");
			}
		}
		tab(iC);
	}
	
	function tab(iC){
		icoLi.eq(iC).siblings().removeClass("active");
		icoLi.eq(iC).addClass("active");
		txtLi.eq(iC).parent().parent().find("h2.show").removeClass("show");
		txtLi.eq(iC).addClass("show");
		picLi.eq(iC).siblings().css("opacity","0");
		picLi.eq(iC).css("opacity","1");
	}
	
	timer = setInterval(autoPlay,3000)
	
	picUl.mouseover(function(){
		clearInterval(timer);
	});
	picUl.mouseleave(function(){
		timer = setInterval(autoPlay,3000);
	});

});