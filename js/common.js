//获取移动端尺寸
//let screeWidth = window.screen.availWidth;
let documentWidth = document. documentElement.clientWidth; //页面DOM宽度
let containerWidth = documentWidth*0.92; //容器的宽度92%；
let cellWidth = documentWidth*0.18; // 数字单元格宽度18%
let cellSpace = documentWidth*0.04; //间隔4%


//获取距离上边的位置
function getPosTop(i,j){
    //return 20+120*i;
    return cellSpace+(cellWidth+cellSpace)*i; 
}

//获取距离左边的位置
function getPosLeft(i,j){ 
    //return 20+120*j;
    return cellSpace+(cellWidth+cellSpace)*j; 
}

//获取数字背景颜色
function getNumberBackgroundColor(num){
    switch(num){
        case 2:return "#eee4da";break;
		case 4:return "#ede0c8";break;
		case 8:return "#f2b179";break;
		case 16:return "#f59563";break;
		case 32:return "#f67c5f";break;
		case 64:return "#f65e3b";break;
		case 128:return "#edcf72";break;
		case 256:return "#edcc61";break;
		case 512:return "#9c0";break;
		case 1024:return "#33b5e5";break;
		case 2048:return "#09c";break;
		case 4096:return "#a6c";break;
		case 8192:return "#93c";break;
    }
}

//获取数字字体颜色
function getNumberColor(num){
    if(num<=4){
        return '#776e65';
    }else{
        return '#fff';
    }
}

//判断是否没有空间
function noSpace(nums){
    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++){
            if(nums[i][j]==0){
                return false;
            }
        }
    }
    return true;
}

//判断是否可以左移
function canMoveLeft(nums){
    for(let i=0;i<4;i++){
        for(let j=1;j<4;j++){
            if(nums[i][j]!=0){
                if(nums[i][j-1]==0||nums[i][j-1]==nums[i][j]){
                    return true;
                }
            }
        }
    }
    return false;
}

//判断是否可以右移
function canMoveRight(nums){
    for(let i=0;i<4;i++){
        for(let j=0;j<3;j++){
            if(nums[i][j]!=0){
                if(nums[i][j+1]==0||nums[i][j+1]==nums[i][j]){
                    return true;
                }
            }
        }
    }
    return false;
}

//判断是否可以上移
function canMoveUp(nums){
    for(let i=1;i<4;i++){
        for(let j=0;j<4;j++){
            if(nums[i][j]!=0){
                if(nums[i-1][j]==0 || nums[i-1][j]==nums[i][j]){
                    return true;
                }
            }
        }
    }
    return false;
}

//判断是否可以下移
function canMoveDown(nums){
    for(let i=0;i<3;i++){
        for(let j=0;j<4;j++){
            if(nums[i][j]!=0){
                if(nums[i+1][j]==0 || nums[i+1][j]==nums[i][j]){
                    return true;
                }
            }
        }
    }
    return false;
}
//判断水平方向是否有障碍物
function noBlockHorizontal(row,col1,col2,nums){
     for(var i=col1+1;i<col2;i++){
         if(nums[row][i]!=0){
             return false;  //有障碍物
         }
     }
     return true;   //没有障碍物 
}

//判断垂直方向是否有障碍物
function noBlockVertical(col,row1,row2,nums){
    for(let i=row1+1;i<row2;i++){
        if(nums[i][col]!=0){
            return false;
        }
    }
    return true;
}
//更新分数
function updateScore(score){
    $('#score').text(score);
}

//判断是否不能移动
function noMove(nums){
    if(canMoveLeft(nums) || canMoveRight(nums) || canMoveUp(nums) || canMoveDown(nums)){
        return false;
    }
    return true;
}
/*
判断游戏是否结束
1.没有空单元格
2.不能移动
*/
function isGameOver(){
    if(noSpace(nums) && noMove(nums)){
        alert('Game Over!');
    }
}