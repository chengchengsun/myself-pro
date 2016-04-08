// JavaScript Document
$(function(){
   num();
   del(); 
     	
})
function getContent(){
  $('#getContent').html(getCookie('usename')+'&nbsp;&nbsp;欢迎您！')	
}
function num(){
	
	var l = $('.goodList > ul > li').length;
	var n = [];
	for(i=0;i<l;i++){
		n.push($('.goodList > ul > li').eq(i).find('.t3').find('input').val());
	}
	$('.add').each(function(index){
	    $(this).click(function(){
			n[index]++;
			$('.goodList > ul > li').eq(index).find('.t3').find('input').val(n[index]);
			calculate();
		})
	})
	$('.sub').each(function(index){
	    $(this).click(function(){
			n[index]--;
			if(n[index]<0){
				n[index] = 0;
			}
			$('.goodList > ul > li').eq(index).find('.t3').find('input').val(n[index]);
			calculate();
		})
	})
	calculate();
	function calculate(){
	var tp = 0;
	var tn = 0;
	for(i=0;i<l;i++){
		$('.t4').eq(i+1).text('￥'+n[i]*parseInt($('.dj').eq(i).text())+'.00');
		tp+=n[i]*parseInt($('.dj').eq(i).text());
		tn += parseInt(n[i]);
	}
	$('.price').text('￥'+tp);
	$('.num').text(tn);
	}
}
function del(){
	var l = $('.goodList > ul > li').length;
	$('.del').each(function(index){
		$(this).click(function(){
			$('.goodList > ul > li').eq(index).remove();
			del();
			num();
		})
	})
	
}
