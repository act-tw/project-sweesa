$(function() {
	(function() {
		var data = [
			{href:"#1",src:"http://www.appguru.com.tw/appguru/wp-content/uploads/2014/10/ACU_Screenshot_Landmark_Versailles_GallerieDeGlace.jpg"},
			{href:"#2",src:"http://cdn.wallxd.com/517f1a9579aa491598.jpg"},
			{href:"#3",src:"http://image.tianjimedia.com/uploadImages/2013/170/MZR7YHP2HM65.jpg"},
			{href:"#4",src:"http://cdn.wallxd.com/517d42fc432c531882.jpg"},
			{href:"#5",src:"http://tw.wallpaperswiki.org/wallpapers/2012/10/%E5%87%A1%E7%88%BE%E8%B3%BD%E5%AE%AE%E8%8A%B1%E5%9C%92-%E6%B3%95%E5%9C%8B-1080x1920.jpg"}
		]; //get data

		(function() {
			var html = "";
			for (var i = 0, max = data.length; i < max; i++) {
				html += "<a style=\"z-index:" + (0 - i) + "\" href=\"" + data[i].href + "\"><img src=\"" + data[i].src + "\"></a>";
			}
			$(".index>.fade").html(html);
		})(); //build html
		(function() {
			var html = "";
			for (var i = 0, max = data.length; i < max; i++) {
				html += "<span";
				if (i === 0) {
					html += " class=\"active\"";
				}
				html += "></span>";
			}
			$(".index>.navi").html(html);
		})(); //build navi
		(function() {
			var img = new Image();
			img.onload = function() {
				$(".index>.fade").height($(".index>.fade>a>img").eq(0).height());
			}
			img.src = $(".index>.fade>a>img").eq(0).attr("src");
			$(window).resize(function() {
				$(".index>.fade").height($(".index>.fade>a:visible>img").eq(0).height());
			});
		})(); //reset height
		(function() {
			var sid = null;
			function set(index) {
				var nowat = $(".index>.navi>span").index($(".index>.navi>span.active"));
				if (index === 0) {
					$(".index>.fade>a").eq(0).fadeIn(function() {
						$(".index>.fade>a").show();
					});
				} else if (nowat > index) {
					$(".index>.fade>a").eq(index).fadeIn(function() {
						$(".index>.fade>a:gt(" + index + ")").show();
					});
				} else {
					$(".index>.fade>a:lt(" + index + ")").not($(".index>.fade>a").eq(nowat)).hide();
					$(".index>.fade>a").eq(nowat).fadeOut();
				}
				navi(index)
			}
			function navi(index) {
				$(".index>.navi>span.active").removeClass();
				$(".index>.navi>span").eq(index).addClass("active");
			}
			function run() {
				var index = 0;
				if ($(".index>.fade>a:visible").length === 1) {
					index = 0;
					$(".index>.fade>a").eq(0).fadeIn(function() {
						$(".index>.fade>a").show();
					});
				} else {
					index = $(".index>.fade>a").index($(".index>.fade>a:visible").eq(0).next());
					$(".index>.fade>a:visible").eq(0).fadeOut();
				}
				navi(index)
				sid = setTimeout(run, 3000);
			}
			sid = setTimeout(run, 3000);
			$(".index>.navi>span").click(function() {
				if (sid !== null) {
					clearTimeout(sid);
					sid= null;
				}
				set($(this).index());
				sid = setTimeout(run, 3000);				
			});
		})(); //run
	})(); //fade

	(function() {
		var data= [
			{href:"#1",src:"http://www.sqrb.com.cn/images/2008-05/07/xin_160505071626241348917.jpg"},
			{href:"#2",src:"http://i3.sinaimg.cn/travel/U3330P704T2D48210F101DT20081223135319.jpg"},
			{href:"#3",src:"http://www.pk88.com.tw/images/ptphoto/V/V-A002L.jpg"},
			{href:"#4",src:"http://www.wadoupicture.com/up_files/yh10.jpg"},
			{href:"#5",src:"http://data.travel.china.com/travelhtml/pic/200903/p12382508588061.jpg"},
			{href:"#6",src:"http://www.book-hotel.cn/uploadfile/images/2009-05/1241684781.jpg"}
		];

		(function() {
			var html = "";
			for (var i = 0, max = data.length; i < max; i++) {
				html += "<a href=\"" + data[i].href + "\"><img src=\"" + data[i].src + "\"></a>";
			}
			for (var i = 0, max = data.length; i < max; i++) {
				html += "<a href=\"" + data[i].href + "\"><img src=\"" + data[i].src + "\"></a>";
			}
			$(".index>.rota>.inbox").html(html);
		})(); //build html
		(function() {
			var count=0;
			for (var i = 0, max = data.length; i < max; i++) {
				var img = new Image();
				img.onload = img.onerror = function() {
					count++;
					if (count === max) {
						ready();
					}
				};
				img.src=data[i].src;
			}
			/*
			var rid = null;
			$(window).resize(function() {
				if (rid !== null) {
					clearTimeout(rid);
					rid = null;
				}
				rid = setTimeOut(function() {
					ready();
				},200);

				
			});
*/
			function ready() {
				(function() {
					var width=0;
					$(".index>.rota>.inbox>a>img").each(function() {
						width += $(this).width();
					});
					$(".index>.rota>.inbox").width(width);
				})(); //set inbox width
				(function() {
					var height = $(".index>.rota>.inbox>a>img").height();
					$(".index>.rota").height(height);
					$(".index>.rota>.inbox>a").height(height);
					$(window).resize(function() {
						var width = $(window).width();
						width = width>1920 ? 1920 : width<1024 ? 1024 : width;
						$(".index>.rota").width(width);
					}).resize();
				})(); //set rota and a height
				(function() {
					var maxWidth = 1920;
					var windowWidth = $(window).width();
					if (windowWidth>maxWidth) {
						windowWidth=maxWidth;
					}
					console.log(windowWidth);
					var center = parseInt((windowWidth / 2) - ($(".index>.rota>.inbox>a>img").width()/2),10);
					$(".index>.rota>.inbox").css("margin-left", 0);
					var isMoved = false;
					while(!isMoved) {
						$(".index>.rota>.inbox>a>img").each(function() {
							if (($(window).width()-maxWidth)/2>0) {
								if ($(this).offset().left-(($(window).width()-maxWidth)/2) === center) {
									isMoved = true;
								} 
							} else {
								if ($(this).offset().left === center) {
									isMoved = true;
								} 	
							}
						});
						if (!isMoved) {
							var marginLeft = parseInt($(".index>.rota>.inbox").css("margin-left"),10);
							if (marginLeft>maxWidth) {
								marginLeft=0;
							}
							$(".index>.rota>.inbox").css("margin-left", marginLeft-1);
						}
					}
				})(); //set image move to center
				(function() {
					$(".index>.rota>.flag").css("top",-($(".index>.rota>.inbox>a>img").height()/2)-29);
				})(); //set flag top
				(function() {
					$(".index>.rota>.inbox").css("left",0);
					var sid = null;
					function run(isNext) {
						if (!$(".index>.rota>.inbox").is(":animated")) {
							if (isNext || isNext === undefined) {
								$(".index>.rota>.inbox").stop().animate({
									"left": "-=" + $(".index>.rota>.inbox>a>img").width()
								}, function() {
									var left = parseInt($(".index>.rota>.inbox").css("left"));
									if (left <= $(".index>.rota>.inbox>a>img").width() * -data.length) {
										$(".index>.rota>.inbox").css("left", 0);
									}
								});
							} else if (isNext === false) {
								var left = parseInt($(".index>.rota>.inbox").css("left"));
								if (left === 0) {
									$(".index>.rota>.inbox").css("left",$(".index>.rota>.inbox>a>img").width() * -data.length);
								}
								$(".index>.rota>.inbox").stop().animate({
									"left": "+=" + $(".index>.rota>.inbox>a>img").width()
								});

							}
						}
						if (isNext === undefined) {
							sid = setTimeout(run, 3000);	
						}
					}
					sid = setTimeout(run,3000);

					$(".index>.rota").mouseenter(function() {
						$(".index>.rota>.flag").show();
						if (sid!== null) {
							clearTimeout(sid);
							sid=null;
						}
					}).mouseleave(function() {
						$(".index>.rota>.flag").hide();
						sid = setTimeout(run,3000);
					});
					$(".index>.rota>.right").click(function(){
						run(true);
					});
					$(".index>.rota>.left").click(function(){
						run(false);
					});
				})(); //run
			} //ready function
		})();
	})(); //rota
});