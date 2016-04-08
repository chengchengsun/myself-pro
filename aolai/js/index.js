$(function(){
    indexmenu(); 
	banner();
	showXf();
	leftxf();
	stair();
	Totop();
	top_Ul();
	showXfr();
	top0();
	chan();
	wfgd();
	border1();
	border2();
	border3()
	border4()
	border5()
	border6()
	border7()
})
function getContent(){
  $('#getContent').html(getCookie('usename')+'&nbsp;&nbsp;欢迎您！')	
}
   //二级菜单	
function indexmenu(){
	
  /*$('.Allpro1').mouseover(function(){
	  $('.erji1').show();  
  });
  $('.Allpro1').mouseout(function(){
	  $('.erji1').hide();  
  });
  $('.erji1').mouseover(function(){
	  $(this).show();  
  });
  $('.erji1').mouseout(function(){
	  $('.sanji1').hide();  
  });*/
  $('.erji1').children().mouseover(function(){
	  var $that=$(this);
	  $(this).addClass('active1').siblings().removeClass('active1');
	  $('.sanji1').show();
	  $('.sanji1').children().eq($that.index()).show();  
	  $('.sanji1').children().eq($that.index()).siblings().hide();
  });
  $('.erji1').children().mouseout(function(){
	  $(this).removeClass('active1');
	  $('.sanji1').hide(); 
  })
  $('.sanji1').children().mouseover(function(){
	   var $that=$(this);
	   $('.sanji1').show();
	   $('.erji1').children().eq($(this).index()).addClass('active1');
  });
  $('.sanji1').children().mouseout(function(){
	   var $that=$(this);
	   $('.sanji1').hide();
	   $('.erji1').children().eq($(this).index()).removeClass('active1');
  })
}
//倒计时
function downCount(){
    var time=26049;
	var $show=$('<span></span>');
	$('.qianggou_P').append($show) ;
	function daojishi(){
	   var hour=parseInt(time/3600); //小时数
	   var minu=parseInt(time%3600/60);//分钟
	   var sec=(time%60);//秒数
	   function toDouble(data){
			if(data<=10){
			return  data='0'+data  
			}else{
			  return data=data	
			}	
	   }
	   toDouble(hour);
	   toDouble(minu);
	   toDouble(sec);
	   $show.html(toDouble(hour)+'时'+toDouble(minu)+'分'+toDouble(sec)+'秒');
	   time--; 
	}
	setInterval(daojishi,1000)
//倒计时结束	
 }
   
function banner(){
      var $index=0;
	  var $length=$('.bg').children().size();
	  //alert($length)
	  picPlay();
	  timer=setInterval(bgChange,3000)
	  function picPlay(){
		  $('.bg').children().eq($index).find('.bannerimg1').stop().animate({'left':'320'},500,          function(){
				$('.bg').children().eq($index).find('.bannerimg2').stop().animate({'right':'60'                },500)	 
		  }) 
	  }
	  function bgChange(){
		 $index++;
		 if($index==$length){
		    $index=0;	
		 } 
		 $('.bg').children().eq($index).show().siblings().hide();
		 picPlay();
		 $('.bg').children().eq($index).siblings().find('.bannerimg1').css('left','200px');
		 $('.bg').children().eq($index).siblings().find('.bannerimg2').css('right','20px');
		 navChange();
	  }
	  //小按钮的操作
	  function navChange(){
		$('.nav > li').eq($index).addClass('navactive').siblings().removeClass('navactive        ');
	  }  
	  $('.nav > li').each(function(index){
		  $(this).click(function(){
			  clearInterval(timer);
		      $index=index-1;
		      bgChange()
		      timer=setInterval(bgChange,3000)   
		  })
	  })
}
function showXf(){
	$(window).scroll(function(){
	   var	$top=$(window).scrollTop()
       if($top>600){
	   $('#xf').show();   
       }else
	   {
	   $('#xf').hide();   
        }		
	})
}

function showXfr(){
	$(window).scroll(function(){
	   var	$top=$(window).scrollTop()
       if($top>600){
	   $('.bepi').show();   
       }else
	   {
	   $('.bepi').hide();   
        }		
	})
}


function leftxf(){
	$('#xf > li').each(function(index){
	  var length=$('#xf > li').size();
	  $(this).click(function(){
		  for(var i=0;i<length;i++){
			 $('#xf > li').removeClass('active'+(i+1));
		  }  
		  $(this).addClass('active'+(index+1))
	  })   
   })
}
//楼梯
function stair(){
  var isClick=false;	
  $('#xf > li').each(function(index){
	  $(this).click(function(){
		  isClick=true;
	     $('body,html').animate({scrollTop:$('.louti').children().eq(index).offset().top},300,function(){
		isClick=false;	 
		 })      })
  })
  $(window).scroll(function(){
	  if(!isClick){
		   $('.louti > ul').each(function(index){
		   var height=$(this).offset().top;
		   if($(window).scrollTop()>height-$(this).height()/2){
			   for(var i=0;i<10;i++){
			 $('#xf > li').removeClass('active'+(i+1));
		  }  
			   $('#xf > li').eq($(this).index()).addClass('active'+(index+1))  
		   }  
	  })
	  
	      
	  }
	  

  })
}
//吸顶广告
 function  Totop(){
	 $(window).scroll(function(){
	    if($(window).scrollTop()>=1000){
	     $('#xd').css('display','block');
		 $('.erji').css('display','none')	
	    }else{
	    $('#xd').css('display','none')
	    }	 	 
	})
   
 }
 function top_Ul(){
    $('#ts_P').hover(
	   function(){
	   	   
	   $('#ts_ul').show()
	   },
	   function(){
	   $('#ts_ul').hide()
	   }	
	);
	$('#ts_ul').hover(function(){
	   	$(this).show();
		$('#ts_P').show();
	},function(){
	    $(this).hide();
	})	 
 }
 function chan(){
   $('td').hover(function(){
		$(this).find('.img1').css('display','none');
		$(this).find('.img2').css('display','inline-block');
	},function(){
		$(this).find('.img2').css('display','none');
		$(this).find('.img1').css('display','inline-block');
	})	 
	 
}
//无缝滚动
function wfgd(){
  var oDiv=document.getElementById('wfgd');
  var oUl=document.getElementById('ulgd');
  var aLi=oUl.getElementsByTagName('li');
  //var oLeft=document.getElementById('left');
  //var oRight=document.getElementById('right');
  oUl.innerHTML+=oUl.innerHTML;
  var iSpeed=3;
  oUl.style.width=aLi[0].offsetWidth*aLi.length+'px';	
  //alert(oUl.style.width)
	   timer=setInterval(move,80)
	   function move(){
		   if(oDiv.scrollLeft>=oUl.offsetWidth/2){
			   oDiv.scrollLeft=0;
		   }
		   else if(oDiv.scrollLeft<=0){
			  oDiv.scrollLeft=oUl.offsetWidth/2    
		   } 
		   oDiv.scrollLeft+=iSpeed;  
	   }
	   /*oLeft.onclick=function(){
		   iSpeed=3;   
	   }
	   oRight.onclick=function(){
		   iSpeed=-3;
	   }
  */
    oDiv.onmouseover=function(){
		clearInterval(timer)
	}
    oDiv.onmouseout=function(){
	   timer=setInterval(move,80)	
	}
}
function border1(){
   $('#border1 img').each(function(index){
	   $(this).hover(function(){
		  $(this).css('border','2px solid red')   
	   },function(){
		  $(this).css('border','2px solid white') 
	  })   
   })	
}
function border2(){
   $('#border2 img').each(function(index){
	   $(this).hover(function(){
		  $(this).css('border','2px solid orange')   
	   },function(){
		  $(this).css('border','2px solid white') 
	  })   
   })	
}
function border3(){
   $('#border3 img').each(function(index){
	   $(this).hover(function(){
		  $(this).css('border','2px solid red')   
	   },function(){
		  $(this).css('border','2px solid white') 
	  })   
   })	
}
function border4(){
   $('#border4 img').each(function(index){
	   $(this).hover(function(){
		  $(this).css('border','2px solid #ff0')   
	   },function(){
		  $(this).css('border','2px solid white') 
	  })   
   })	
}
function border5(){
   $('#border5 img').each(function(index){
	   $(this).hover(function(){
		  $(this).css('border','2px solid #c0a')   
	   },function(){
		  $(this).css('border','2px solid white') 
	  })   
   })	
}
function border6(){
   $('#border6 img').each(function(index){
	   $(this).hover(function(){
		  $(this).css('border','2px solid #bfa')   
	   },function(){
		  $(this).css('border','2px solid white') 
	  })   
   })	
}
function border7(){
   $('#border7 img').each(function(index){
	   $(this).hover(function(){
		  $(this).css('border','2px solid #0cd')   
	   },function(){
		  $(this).css('border','2px solid white') 
	  })   
   })	
}