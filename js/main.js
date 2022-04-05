var nums = new Array();

$(document).ready(function () {
	newgame();
});

//开始新游戏
function newgame() {
	init();

	//在随机的两个单元格生成数字
	generateOneNumber();
	generateOneNumber();
}

//初始化页面
function init() {
	//初始化单元格位置
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 4; j++) {
			var gridCell = $('#grid-cell-' + i + '-' + j);
			gridCell.css('top', getPosTop(i, j));
			gridCell.css('left', getPosLeft(i, j));
		}
	}

	//初始化二维数组
	for (var i = 0; i < 4; i++) {
		nums[i] = new Array();
		for (var j = 0; j < 4; j++) {
			nums[i][j] = 0;
		}
	}
	//动态创建上层单元格并初始化
	updateView();
}

//更新上层单元格视图
function updateView() {
	//删除上层所有单元格，初始化页面
	$('.number-cell').remove();

	for (var i = 0; i < 4; i++) {   //动态生成上层单元格
		for (var j = 0; j < 4; j++) {
			$('#grid-container').append('<div class="number-cell" id="number-cell-' + i + '-' + j + '"></div>');  //append()-添加元素

			var numberCell = $('#number-cell-' + i + '-' + j);  //获取单元格位置
			if (nums[i][j] == 0) {
				numberCell.css('width', '0px');
				numberCell.css('height', '0px');
				numberCell.css('top', getPosTop(i, j)+50);
				numberCell.css('left', getPosLeft(i, j)+50);
			} else {
				numberCell.css('width', '100px');
				numberCell.css('height', '100px');
				numberCell.css('top', getPosTop(i, j));
				numberCell.css('left', getPosLeft(i, j));
				numberCell.css('background-color', getNumberBackgroundColor(nums[i][j]));
				numberCell.css('color', getNumberColor(nums[i][j]));
				numberCell.text(nums[i][j]);
			}
		}
	}
}

/*
在随机的单元格生成一个随机数
1.在空余的单元格随机找一个
2.随机生成2or4
*/
function generateOneNumber() {
	//判断是否还有空间，如果没有空间直接返回
	if(noSpace(nums)){
		return;
	}
	//随机生成一个位置
	let count = 0;
	let temp = new Array();
	for(var i=0;i<4;i++){
		for(var j=0;j<4;j++){
			if(nums[i][j]==0){
				temp[count] = i*4+j; //2*4+3=11 ==> 11/4=2;11%4=3;
				count++;
			}
		}
	}
	let pos = Math.floor(Math.random()*count); //[0,1)*6  = [0,5]
	let randx = Math.floor(temp[pos]/4);  //floor()向下取整
	let randy = Math.floor(temp[pos]%4);

	 //随机产生一个随机数
	 let randNum = Math.random()<0.8?2:4;

	 //在随机位置上显示随机数字
	 nums[randx][randy] = randNum;
	 showNumberWidthAnimation(randx,randy,randNum);
}