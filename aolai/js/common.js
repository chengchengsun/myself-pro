$(function(){
  	
  head();	
  menu();
  //getContent();
})
function getContent(){
  $('#getContent').html(getCookie('usename')+'&nbsp;&nbsp;欢迎您！')	
}
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&二级菜单
 function menu(){
		  $('.Allpro').mouseover(function(){
			$('.erji').show();  
		  });
		  $('.Allpro').mouseout(function(){
			  $('.erji').hide();  
		  });
		  $('.erji').mouseover(function(){
		  $(this).show();  
		 });
		 $('.erji').mouseout(function(){
		  $(this).hide();
		  $('.sanji').hide();  
		 });
		$('.erji').children().mouseover(function(){
		  var $that=$(this);
		  //console.log($that.index());
		  $(this).addClass('active1').siblings().removeClass('active1');
		  $('.sanji').show();
		  $('.sanji').children().eq($that.index()).show();  
		  $('.sanji').children().eq($that.index()).siblings().hide();
		});
		$('.sanji').mouseover(function(){
		   var $that=$(this);
		   $('.sanji').show();
		   $('.erji').show();
		});
		$('.sanji').mouseout(function(){
		   var $that=$(this);
		   $('.sanji').hide();
		   $('.erji').hide();
		 })	
   } 	
//**************************************************
//$$$$$$$$$$$$$头部$$$$$$$$$$$$$$$$$$$$$$$$$   
function head(){
  $('.guanzhu').hover(
			function(){
				$('.guanzhuImg').show();	
			},
			function(){
				$('.guanzhuImg').hide();
			}
	);
	$('.guanzhuImg').hover(function(){
		   $(this).show();
	});
		//我的奥莱
	$('.My_al').hover(
		  function(){
				$('.myal').show();
				//$(this).children().eq(0).children().eq(0).css('transform','-180')
		  },
		  function(){
				$('.myal').hide();
		 }
	);
	$('.myal').hover(function(){
	   $(this).show();	
	});
		//满减图片的点击	
	$('#closeReduce').click(function(){
		  $('#reduce').css('display','none')	
	});
	   //二维码的关闭
    $('.gb').click(function(){
	   $('.ewm').hide();   
    });
  //购物车
  $('.shopCar').hover(
      function(){
	   $('.shopCar_div').fadeIn()},
	  function(){
	  $('.shopCar_div').fadeOut()  
	  }
  )
//$$$$$$$$$$$头部结束$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$		
}
//划过
function top0(){
  $('#return').hover(function(){
	  $('#return1').attr('src','../img/indexImg/images/rList_25.gif')  
  },function(){
	  $('#return1').attr('src','../img/indexImg/images/rList_24.gif')
  })
  $("#return").click(function(){
	 $('html,body').animate({'scrollTop':'0'},300) 
  })
} 
