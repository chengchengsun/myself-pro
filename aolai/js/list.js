// JavaScript Document

$(function(){
	list();
	control1($('.number'));
    good();
	setGood();
	tz();
	getContent();
})
function getContent(){
  $('#getContent').html(getCookie('usename')+'&nbsp;&nbsp;欢迎您！')	
}
function list(){
	$('#main > .left > .list > .fst').each(function(index){
		$(this).click(function(){
			$('#main > .left > .list > ul').css('display','none');
			$('#main > .left > .list > ul').eq(index).css('display','block');
		})
	})
}
//图片划过效果
function good(){
	$('.good').hover(function(){
		$(this).css({'borderColor':'#c80a28','borderWidth':'2px','padding':'0px'});
		$(this).find('.top').css('height','auto');
	},function(){
		$(this).css({'borderColor':'#ddd','borderWidth':'1px','padding':'1px'});
		$(this).find('.top').css('height','315px');
	})
	
}
//设置index
function setGood(){
	$('.container > .good').each(function(index){
		$(this).css({'left':252*(index%4)+'px','zIndex':100-index});
	})
}
//销量的排序
var Istop;
bgimg1 = 0;
function control1(obj){	
	obj.click(function(){
		//定义一个空数组
		var arr = [];
		var $length = $('.good').size();
		//销量
		var $volume;
		var $index;
		if(bgimg1 == 3){
			//按钮样式
			bgimg1 = 1;
		    $(this).attr("title","点击按降序排列")
		    //将所有商品块按销量降序排列放入数组
			for(var j=0;j<$length;j++){
				$index = 0;
				//第一个数量
				$volume = parseInt($('.good').eq(0).find('.bot').find('.ldiv').find('.sp1').text());
				for(var i=0;i<$length;i++){
					if($volume >= parseInt($('.good').eq(i).find('.bot').find('.ldiv').find('.sp1').text())){
						//销量的最大值
						$volume = parseInt($('.good').eq(i).find('.bot').find('.ldiv').find('.sp1').text());
						//最大值对应的下标
						$index = i;
					}
				}
				arr.push($('.good').eq($index))
				$('.good').eq($index).remove();
			}
		}else{
			//按钮样式
			bgimg1 = 3;
			$(this).attr("title","点击按升序排列")
			//将所有商品块按销量升序排列放入数组
			for(j=0;j<$length;j++){
				$index = 0;
				$volume = parseInt($('.good').eq(0).find('.bot').find('.ldiv').find('.sp1').text());
				//alert(typeof($price))
				for(i=0;i<$length;i++){
					if($volume <= parseInt($('.good').eq(i).find('.bot').find('.ldiv').find('.sp1').text())){
						$volume = parseInt($('.good').eq(i).find('.bot').find('.ldiv').find('.sp1').text());
						$index = i;
					}
				}
				arr.push($('.good').eq($index))
				$('.good').eq($index).remove();
			}
		}
		//插入新序列
		var n = 0;
		for(j=0;j<10;j++){
			for(i=0;i<4;i++){
				$('.container').eq(j).append(arr[n])
				n++;
			}
		}
	//重置样式
	setGood();
	})
}
function tz(){
  $('.tz').click(function(){
	  alert(0)
	window.location='detail.html'; 
	 
  })	
}