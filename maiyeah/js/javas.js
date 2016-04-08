$(function() {

	showuser();

	/*无缝滚动-------------------------------*/
	var num = 0;
	var prenum = 0;
	var prompt = $('.prompt li');
	var showphoto = $(".menu-img img");
	var len = showphoto.size() - 1;
	//鼠标经过圆点	
	prompt.on("click", function() {

		clearInterval(timer);
		num = $(this).index();
		scroll();
		prenum = num;
		autoplay();
	});
	//点击右侧按钮
	$(".arrow").click(function() {
		clearInterval(timer);
		num++;
		if (num > len) {
			num = 0;
			prenum = len;
		}
		scroll();
		prenum = num;
		autoplay();
	});
	autoplay();
	//定时器
	function autoplay() {
		timer = setInterval(function() {
			num++;
			if (num > len) {
				num = 0;
				prenum = len;
			}
			scroll();
			prenum = num;
		}, 4000);
	};

	function scroll() {

		prompt.eq(num).addClass("active").siblings().removeClass("active");

		//左移
		if (num > prenum || (num == 0 && prenum == len)) {
			showphoto.eq(prenum).stop(true).animate({
				"left": "-1380px"
			});
			showphoto.eq(num).css("left", "1308px").stop(true).animate({
				"left": "0"
			});
		}
	}



	/*二级菜单--------------------------------*/
	var num1;
	$(".menu-box li").on("mouseover", function(e) {
		num1 = $(this).index();
		var that = this;
		$(".menu-box li").each(function(i) {
			$(this).removeClass("white");
			$(".menu1-menu2").eq(i).css("display", "none");
		})
		if (num1 != 0) {
			$(this).addClass("white");
			$(".menu1-menu2").eq(num1 - 1).css("display", "block");
			$(".menu1-menu2").on("mouseout", function() {
				$(this).css("display", "none");
				$(that).removeClass("white");
			})
		}
		$(".menu-box li").on("mouseout", function(e) {
			$(that).removeClass("white");
			$(".menu1-menu2").eq(num1 - 1).css("display", "none");
		});
	});




	/*加载更多--------------------------------------*/

	var flag = true,
		firstint = true;
	$(".openprefore").on("click", function() {
		if (flag) {
			if (firstint) {
				$(".openprefore").addClass("closeprefore");
				var str = $.ajax({
					url: "newcommodity.html",
					dataType: "html",
					async: false
				});
				$(".loadmore")[0].innerHTML = str.responseText;
				firstint = false;
				flag = false;
			} else {
				$(".openprefore").addClass("closeprefore");
				$(".loadmore").css("display", "block");
				flag = false;
			}

		} else {
			$(".loadmore").css("display", "none");
			$(".openprefore").removeClass("closeprefore");
			flag = true;
		}

	});


	/*热门品牌----------*/
	showmodule.show({
		Control: $(".hotnav li"),
		positive: $(".abroad"),
		Type: "mouseover",
		classname: "navspe",
		initial: true
	});
	/*美妆热销------------------*/
	showmodule.show({
		Control: $(".makenav li"),
		positive: $(".mianmo"),
		Type: "mouseover",
		classname: "navspe",
		initial: true


	});
	/*亲子母婴------------------*/
	showmodule.show({
		Control: $(".qinzinav li"),
		positive: $(".wanju"),
		Type: "mouseover",
		classname: "navspe",
		initial: true


	});
	/*小价标显示-----------------------------*/
	var nums = 0;
	$(".makecon td").on("mouseover", function() {
		$(".maprice").css("display", "none");
		$(this).find("p:hidden").css("display", "block");
	});

	$(".makecon").on("mouseout", function() {
		$(".maprice").css("display", "none");
	});





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







	/*左右浮动项的显示与隐藏----------------------------*/
	var distTop;
	window.onscroll = function() {
			distTop = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset;
			var rightside = document.getElementById("rightside");
			var leftside = document.getElementById("leftside");
			if (distTop == 0) {
				rightside.style.display = "none";
				leftside.style.display = "none";
			} else {
				rightside.style.display = "block";
				leftside.style.display = "block";
			}
		}
		/*回到顶部-------------------------*/


	getClassName("myback")[0].onclick = function() {
		document.body.scrollTop = document.documentElement.scrollTop = window.pageYOffset = 0;

	}

	/*回到顶部---------the  end----------*/
	/*名品专场---------------------------*/
	showandhide.mouhover({
		act: $(".spe2 span"),
		pos: $(".mingpin"),
		actclass: "spehover"

	});




});