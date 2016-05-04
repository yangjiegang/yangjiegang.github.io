$(function(){
	var icoLi = $("#ico_list").find("li");
	var txtLi = $("#text_list").find("h2");
	var picLi = $("#pic_list").find("li");
	var picUl = $("#pic_list");
	var icoUl = $("#ico_list").find("ul");
	var cUlLeft = 0;
	//var i = 0;
	var iC = 0;
	var timer = null;
	var txtUl = $("#text_list")
	
/*		for(i=0;i<icoLi.length;i++){
		//icoLi[i].index(i);
		//alert(icoLi[i]);
		icoLi[i].click(function(){
			alert(i);
			for(i=0;i<icoLi.length;i++){
				icoLi[i].removeClass("active");
			}
			alert($(this).index());
			$(this).addClass("active");
			//alert($(this).index());
			//i = $(this).index();
			//i = parseInt(i);
			//iC = $(this).index();
			//icoLi[iC].siblings().removeClass("active");
			//icoLi[iC].addClass("active");			
			//txtLi[iC].siblings().removeClass("active");
			//txtLi[iC].addClass("active");	
		});
	}*/
	
/*		function fixUlLeft(){
		//oBtnPrev.className=iNowUlLeft==0?'btn':'btn showBtn';
		//oBtnNext.className=iNowUlLeft==(aIcoLi.length-7)?'btn':'btn showBtn';
		miaovStartMove(icoUl, {left: -(icoLi.width()*cUlLeft)}, MIAOV_MOVE_TYPE.BUFFER);
	}*/

	icoLi.click(function(){		
		var iC = $(this).index();
		//alert(iC);
		tab(iC);
	});
	
	function autoPlay(){
		iC++;
		var ulLeft = icoUl.position().left;
		if(iC>icoLi.length){
			iC=0;
			if(ulLeft != 0){
				//icoUl.css("left",0)
				icoUl.animate({left:0},600,"linear");
			}
		}else if(iC>=7){
			if(ulLeft != -525){
				//icoUl.css("left",-525)
				icoUl.animate({left:-525},600,"linear");
			}
			//else{alert('ok')}
		}else{
			if(ulLeft != 0){
				//icoUl.css("left",0)
				icoUl.animate({left:0},600,"linear");
			}
		}
		tab(iC);
/*			if(iC<cUlLeft)
		{
			cUlLeft=iC;
		}
		else if(iC>=cUlLeft+7)
		{
			cUlLeft=iC-6;
		}			
		fixUlLeft();*/
		//autoPlay();
/*			function temp(iC){
			iC++;
			if(iC>icoLi.length){iC=0;};
			return iC;
		}
		function temp2(iC){
			alert(iC);
			tab(iC);
		}*/
		//for(iC=0;iC<icoLi.length;iC++){
		//setInterval(tab(iC),1000);
		//if(iC>icoLi.length){iC=0;}
		//else{setInterval(tab(iC),1000);}
		//else{iC++;alert(iC);}
		//}
	}
	
	function tab(iC){
		icoLi.eq(iC).siblings().removeClass("active");
		icoLi.eq(iC).addClass("active");
		//$("txtLi.show").removeClass("show");
		txtLi.eq(iC).parent().parent().find("h2.show").removeClass("show");
		txtLi.eq(iC).addClass("show");
		picLi.eq(iC).siblings().css("opacity","0");
		picLi.eq(iC).css("opacity","1");	
	}
	
	timer = setInterval(autoPlay,2000)
	
	picUl.mouseover(function(){
		clearInterval(timer);
	});
	picUl.mouseleave(function(){
		timer = setInterval(autoPlay,2000);
	});

});