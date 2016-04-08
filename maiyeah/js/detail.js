$(function(){
	showuser();
	
/*放大镜效果的显示-----------------*/
	$(".layer").hover(function(er){
		$("#bigdiv").css("display","block");
	});
	$(".layer").mouseout(function(){
		$("#bigdiv").css("display","none");			
	});
	$(".layer").mousemove(function(er){
		var e = er || event;
		var reX=e.offsetX- $(".floater").width()/2;
		var reY=e.offsetY-$(".floater").height() / 2;
		if(reX<=0){reX=0;}
		if(reX>=200){reX=200;}
		if(reY<=0){reY=0;}
		if(reY>=200){reY=200;}
		$(".floater").css("left", reX + "px");
		$(".floater").css("top", reY + "px");
		$("#bigdiv>img").css("left", -reX / ($(".layer").width()) * ($("#bigdiv>img").width()) + "px");
		$("#bigdiv>img").css("top", -reY / ($(".layer").height()) * ($("#bigdiv>img").height()) + "px");
	
	});
	
	
/*分享到-------------------------*/
	$("#spareto").mouseover(function(){
		$("#detaildepart").css("display","block")
	});
	$(".detailspare").mouseout(function(){
		$("#detaildepart").css("display","none");
	});
	
/*---------相关品牌推荐部分的显示----------------------------------------------------------*/
	$(".xsphcon").hover(function(){
		var num=$(this).index();console.log(num);
		$(".xsphcommod").css({"display":"block"});
		$(".xsphshow").css({"display":"none"})
		$(".xsphshow").eq(num-1).css({"display":"block"})
		$(".xsphcommod").eq(num-1).css({"display":"none"});
	});
	
/*右侧浮动显示与隐藏-----start----及描述标题的吸顶显示*/
	
	var distTop;
	var relTop=$(".xiding").offset().top+$(".xiding").height();
	//console.log(relTop)
	window.onscroll = function() {
			distTop = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset;
			var rightside = document.getElementById("rightside");
			if (distTop == 0) {
				rightside.style.display = "none";
			} else {
				rightside.style.display = "block";
			}
			
			if(distTop>=relTop){
				$(".xidingtrue").css("display","block");
			}else{
				$(".xidingtrue").css("display","none");
			}
		}
	
	/*回到顶部-------------------------*/
	getClassName("myback")[0].onclick = function() {
		document.body.scrollTop = document.documentElement.scrollTop = window.pageYOffset = 0;

	}
	
	/*小标快的显示与隐藏-----------*/
	showandhide.mouhover({
		act: $(".account"),
		pos: $(".myact"),
		actclass: "acchover"

	});
	showandhide.mouhover({
		act: $(".collect"),
		pos: $(".mycoll"),
		actclass: "collhover"

	});
	showandhide.mouhover({
		act: $(".scaning"),
		pos: $(".myscan"),
		actclass: "scanhover"

	});
	showandhide.mouhover({
		act: $(".telephone"),
		pos: $(".mytell"),
		actclass: "telehover"

	});
	showandhide.mouhover({
		act: $(".kefu"),
		pos: $(".mykefu"),
		actclass: "kefuhover"

	});
	showandhide.mouhover({
		act: $(".saoma"),
		pos: $(".saowei"),
		actclass: "saohover"

	});
	showandhide.mouhover({
		act: $(".backtop"),
		pos: $(".myback"),
		actclass: "backhover"

	});
/*商品详情描述切换------------------------------------*/
	showmodule.show({
		
			Control: $(".xiding1"),
			positive: $(".spms"),
			Type: "hover",
			classname: "xidingspe",
			initial: true
	});
	
	$(".xiding1").hover(function(){
		var numm=$(this).index();
		if(numm!=0){
		$(".detaildown").css({"min-height":"1400px","_height":"1400px"});	
			
		}else{
			$(".detaildown").css({"min-height":"6580px"});
		}
	});
	
	
	/*加入购购车-------------------------*/
	var $pursrc=$("#bigdiv>img").attr("src");
	setCookie("goodpic",$pursrc,10);
	$("#addpurcar").click(function(){
		var $purcount=$("#purchasecount").val();
		setCookie("goodcount",$purcount,10);
		var $spgg=$(".detguispe").text();
		setCookie("goodgg",$spgg,10);
		var $spmich=$(".smatit1").text();
		setCookie("goodname",$spmich,10);		
		var $xgzg=$(".xgzg").text();
		setCookie("goodori",$xgzg,10);		
		var $mayj=$(".mayejia").html();
		setCookie("goodprice",$mayj,10);
		
		
	//window.location.replace("purchasecar.html");
	$("#qq").css({"display":"block","opacity":"1"});
	var topdis=$("#addfloat").offset().top+70;
	
	$("#qq").animate({
		left:"100%",top:topdis+"px",opacity:"0"
	},1000, "swing",function(){
	$("#qq").css({"left":"650px","top":"718px","display":"none"});	
	//console.log($("#qq").css("left"))	
		
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	});/*click事件的结尾-----------*/
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});