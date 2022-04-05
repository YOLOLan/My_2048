//通过动画显示数字
function showNumberWidthAnimation(i,j,randNumber){
    let numberCell=$('#number-cell-'+i+'-'+j);
    numberCell.css('background-color',getNumberBackgroundColor(randNumber));
    numberCell.css('color',getNumberColor(randNumber));
    numberCell.text(randNumber);

    numberCell.animate({
        width:'100px',
        height:'100px',
        top:getPosTop(i,j),
        left:getPosLeft(i,j)
    },500);
}