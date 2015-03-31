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

			function run() {
				var index = 0;
				(function() {
					if ($(".index>.fade>a:visible").length === 1) {
						index = 0;
						$(".index>.fade>a").eq(0).fadeIn(function() {
							$(".index>.fade>a").show();
						});
					} else {
						index = $(".index>.fade>a").index($(".index>.fade>a:visible").eq(0).next());
						$(".index>.fade>a:visible").eq(0).fadeOut();
					}
				})(); //fadein fadeout
				(function() {
					$(".index>.navi>span.active").removeClass();
					$(".index>.navi>span").eq(index).addClass("active");

				})(); //change navi dot
				sid = setTimeout(run, 3000);
			}
			sid = setTimeout(run, 3000);
		})(); //run



	})(); //rotator

});