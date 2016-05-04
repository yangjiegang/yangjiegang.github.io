function setTxt(content){
	var txt = document.getElementById("marquee");
	txt.innerHTML = content;
	//txt.text(content);
    //document.title = content;
}
function MARQUEE(){
    var msg = "这是一个跑马灯效果;这是一个跑马灯效果;这是一个跑马灯效果;这是一个跑马灯效果;这是一个跑马灯效果;这是一个跑马灯效果;";
    var space = "                                                                                            ";
    var str = msg + space;
    var interval = 500;
    var t = setInterval(function(){
        var firstWord = str.slice(0, 1);
        str = str.slice(1, str.length) + firstWord;
        setTxt(str);
    }, interval)
}
//window.onload = MARQUEE;