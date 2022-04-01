var nums = new Array();

$(document).ready(function(){
	newgame();
});

//开始新游戏
function newgame(){
    init();
}

//初始化页面
function init(){
    //初始化单元格位置
    for(var i=0;i<4;i++){
		for(var j=0;j<4;j++){
			var gridCell=$('#grid-cell-'+i+'-'+j);	
			gridCell.css('top',getPosTop(i,j));
			gridCell.css('left',getPosLeft(i,j));
		}
	}
}
