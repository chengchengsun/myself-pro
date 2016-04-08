// JavaScript Document
$(function(){
    fixing();
    saving();
	way1();
	getContent();
	yes1();
	
})
function getContent(){
  $('#getContent').html(getCookie('usename')+'&nbsp;&nbsp;欢迎您！')	
}
//var $n0 = $('.newcell').eq(0);
function fixing(){
	$('.fix').each(function(index){
		$(this).click(function(){
			$(this).text('[保存修改信息]');
			$(this).addClass('fixed');
			$(this).removeClass('fix');
			$(this).parent().addClass('redBd')
			$(this).parent().find('.newcell').show();
			
		})
	})
}
function saving(){
	$('.fixed').each(function(index){
		$(this).click(function(){
			$(this).text('[修改]');
			$(this).addClass('fix');
			$(this).removeClass('fixed');
			$(this).parent().removeClass('redBd')
			$(this).parent().find('.newcell').hide();
		})
	})
	$('.yes').each(function(index){
		$(this).click(function(){
			$(this).parent().parent().find('.fixed').text('[修改]');
			$(this).parent().parent().find('fixed').addClass('fix');
			$(this).parent().parent().find('fixed').removeClass('fixed');
			$(this).parent().parent().removeClass('redBd')
			$(this).parent().parent().find('.newcell').hide();
		})
	})
}

//收货方式
function way1(){
        $("input[name='send']").click(function(){
		  $('.sendWaysp1').html($(this).val())
		})
}

function yes1(){
  $('.yes1').click(function(){
	  $('.useNewAdd').css('width','auto')
	  $('.useNewAdd').html('收货人  '+$('.cnee1').val()+'所在地区：北京市  东城区'+'详细地址:'+$('.dtadd1').val()+'电话：'+$('.pnb1').val()) 
	  
  })	
}









