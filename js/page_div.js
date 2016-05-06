$(function(){
	var oLi = $(".featurette");
	var AllPage = parseInt(oLi.length/5);
	var NowPage = 1;
	//alert(oLi.length);
	page({
		id:"page",
		nowNum:NowPage,
		allNum:AllPage,
		callBack:function(Now,All){
			//alert("当前页"+Now+", 总页数"+All);
			bRow = (Now-1)*5;
			eRow = Now*5;
			//alert("brow:"+bRow+", erow:"+eRow);
			oLi.css({display:"none",});
			for(var i=bRow;i<eRow;i++){
				oLi.eq(i).css({display:"block",});
			}					
		}
	});	
});
function page(opt){
	if(!opt.id){
		return false;
	}
	//alert(opt.id);
	var obj = $("#page");
	//var obj = document.getElementById(opt.id)
	var nowNum = opt.nowNum||1;
	var allNum = opt.allNum||5;
	var callBack = opt.callBack || function(){}
	
	if(nowNum>=4 && allNum>=6){
		var oA = $(document.createElement("a"));
		oA.attr("href","#"+1);
		oA.html("首页");
		obj.append(oA);
	}
	
	if(nowNum>1){
		var oA = $(document.createElement("a"));
		oA.attr("href","#"+(nowNum-1));
		oA.html("上一页");
		obj.append(oA);	
	}
	
	if(allNum<=5){
		for(var i=1;i<=5;i++){
			//var oA = obj.append()
			var oA = $(document.createElement("a"));
			oA.attr("href","#"+i);
			if(nowNum==i){
				oA.html(i);
			}else{
				oA.html("["+i+"]");
			}
			obj.append(oA);
		}
	
	}else{
		for(var i=1;i<=5;i++){
			var oA = $(document.createElement("a"));
			if(nowNum<3){	
				oA.attr("href","#"+i);
				if(nowNum==i){
					oA.html(i);
				}else{
					oA.html("["+i+"]");
				}
				obj.append(oA);		
			}else if(allNum-nowNum<3){
				var c = allNum-5+i; 	
				oA.attr("href","#"+c);
				if(allNum-nowNum==0&&i==5){
					oA.html(c);
				}else if(allNum-nowNum==1&&i==4){
					oA.html(c);
				}else{
					oA.html("["+c+"]");
				}
				obj.append(oA);			
			}else{
				var c = nowNum-3+i;
				oA.attr("href","#"+c);
				if(i==3){
					oA.html(c);
				}else{
					oA.html("["+c+"]");
				}
				obj.append(oA);					
			}
		}
	}
	
	if( (allNum - nowNum) >= 1 ){
		var oA = $(document.createElement('a'));
		oA.attr("href",'#' + (nowNum + 1));
		oA.html('下一页');
		obj.append(oA);
	}
	
	if( (allNum - nowNum) >= 3 && allNum>=6 ){		
		var oA = $(document.createElement('a'));
		oA.attr("href",'#' + allNum);
		oA.html('尾页');
		obj.append(oA);	
	}
	
	callBack(nowNum,allNum);
	
	var aA = obj.find('a');		
	for(var i=0;i<aA.length;i++){
		aA.eq(i).click(function(){				
			var nowNum = parseInt($(this).attr('href').substring(1));				
			obj.html("");				
			page({				
				id : opt.id,
				nowNum : nowNum,
				allNum : allNum,
				callBack : callBack,				
			});				
			return false;				
		});
	}
}