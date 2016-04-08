// JavaScript Document
$(function(){
	check();
	$('.zhuce').click(function(){
		tele(); 
		checkpwd();
		checkAgin();
		finalTest();
		sendUp();
	})
	//验证码
	$('.yzm').click(function(){
	  $(this).val(setCode())
    })
})
 function check(){
     //登录
  $('.txt1').focus(function(){
	  $('.txt1_1').css('display','block')  
   })
   $('.txt1').blur(function(){
	  $('.txt1_1').css('display','none')  
   })
   $('.txt2').focus(function(){
	  $('.txt2_1').css('display','block')  
   })
   $('.txt2').blur(function(){
	  $('.txt2_1').css('display','none')  
   })
   $('.txt22').focus(function(){
	  $('.txt2_2').css('display','block')  
   })
   $('.txt22').blur(function(){
	  $('.txt2_2').css('display','none')  
   })
   $('.txt3').focus(function(){
	  $('.txt3_3').css('display','block')  
   })
   $('.txt3').blur(function(){
	  $('.txt3_3').css('display','none')  
   })	 
 }
//验证码的获取
	function setCode(){
	//定义长度为72的存放验证码的数组arr
	var arr = ['a','b','c','d','e','f','g','h','i','g','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','0','A','B','C','D','E','F','G','H','I','G','K','L','M','N','O','P','Q','R','S','Y','U','V','W','X','Y','Z','我','爱','中','国','我','是','中','国','人']
	
	//构造btn点击函数
		//定义一个用于存放验证码的字符串
		var str = '';
		for(var i=0;i<4;i++){
		//取一个随机数，并且乘100，取整后得到一个2位数，存放到变量num中
		var iNum = parseInt(Math.random()*100);
		//判断获得的2位数是否大于71，若大于，则继续获取		
		while(iNum>71){
			iNum = parseInt(Math.random()*100);			
			}
		//将获取到2位数赋值给arr的下标，循环4次
		str+=arr[iNum];	
			}
		//将str赋值给txt的value值
		return str;
		
	}
//失去焦点的检验
    function clear(){
        $('input').focus(function(){
	    $(this).val('')   
        })
	}
//手机的验证
   function tele(){
	   var re=/^1[5|8|7|3]{1}\d{9}$/;  
		     if(re.test($('#usename').val())){
	   		    return true;
	         }else{
		     alert("手机号格式不正确，请重新输入");
			 return false;
			    
	         }    
   }	
//密码的验证
   function checkpwd(){
	  var re1=/^[\d | \w | \s]{6,20}$/;
		   if(re1.test($('#pwd').val()))
		   { 
			addCookie('password',$('#pwd').val(),30);
			return true;
	       }else{
		   alert('密码格式不正确');
		   return false  
	       }
   }
//密码的再次输入检验
function checkAgin(){
		//alert(getCookie('password'))
		if($('.txt22').val()==getCookie('password')){
	    return true;
	    }else{
	    alert('密码不一致，请重新输入');
		return false
		
	   }
}   
//最终检验
function finalTest(){
	if(checkpwd() && tele()&&checkyzm()&&checkAgin()){
		return true;
	}else{
	   return false;
	}
}
//上传用户名和密码至cookie
function sendUp(){
	if(finalTest()){
	   addCookie('usename',$('#usename').val(),30);
	   addCookie('password',$('#pwd').val(),30);
	   window.location='registerSuc.html';
	   return  true;  
	}else{
	  return false	
	}
}  
//验证码的核对
function checkyzm(){
   if($('.txt3').val()==$('.yzm').val()){
	 return true   
  }else{
	 alert('验证码不正确');
	 return false  
  }	
}