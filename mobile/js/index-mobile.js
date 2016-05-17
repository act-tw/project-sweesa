$(function() {
	var isTest = true;
	var isLocal = /^file\:\/\/\//i.test(location.href);
	(function() {
		function dot() {
			$(".rotatedot>span.active").removeClass();
			$(".rotatedot>span").eq($(".rotate>a:first>img").attr("alt")).addClass("active");
		}
		function next(img,url,index,hasEffect) {
			var link = "<a href=\"" + url + "\"><img src=\"" + img + "\" width=\"100%\" alt=\"" + index + "\"></a>";
			if (hasEffect) {
				$(".rotate>a").first().fadeOut("slow",function() {
					$(".rotate").append(link);
					$(this).remove();
					dot();
				});
			} else {
				$(".rotate").append(link);
				$(".rotate>a").first().remove();
				dot();
			}
		}
		function getdata(data) {
			(function() {
				var html="";
				for (var i=0,max=data.length;i<max;i++) {
					$(".rotatepreload").append("<img src=\"" + data[i][0] + "\">");
					html+="<span";
					if (i===0) {
						html+= " class=\"active\"";
					}
					html+="></span>";
				}
				$(".rotatedot").html(html);
			})();
			(function() {
				var i=0;
				setInterval(function() {
					if (i>=data.length) {
						i=0;
					}
					next(data[i][0],data[i][1],i,true);
					i++;
				},2000);
				next(data[i][0],data[i][1],i);
				i++;
				next(data[i][0],data[i][1],i);
				i++;
				$(".rotatedot>span").click(function() {
					var nowat = parseInt($(".rotate>a:first>img").attr("alt")),
						index = $(this).index();
					if (nowat !== index) {
						$(".rotate>a:last").attr("href",data[index][1]).find(">img").attr({src:data[index][0],alt:index});
						next(data[index][0],data[index][1],index,true);
						i = index;
					}
				});
			})();
			(function() {
				var isTouch = false,
					move = 0;
				function prev() {
					$(".rotatedot>span.active").prev().click();
				}
				function next() {
					$(".rotatedot>span.active").next().click();
				}
                if ("ontouchstart" in document.documentElement) {
                    isTouch = true;
                }
                $(".rotate").on(isTouch ? "touchstart" : "mousedown", "img" , function (e) {
                    if (e.type === "mousedown") {
                        move = e.pageX;
                    } else {
                        move = e.originalEvent.touches[0].pageX;
                    }
                });
                $(".rotate").on(isTouch? "touchmove": "mousemove", "img", function (e) {
                    var target;
                    if (e.type === "mousemove") {
                        target = e.pageX;
                    } else {
                        target = e.originalEvent.touches[0].pageX;
                    }
                    if (move !== 0 && Math.abs(target - move) > 50) {
                        if (target < move) {
                            next();
                        } else {
                            prev();
                        }
                        move = 0;
                    }
                });
			})();
		}
		if (isLocal || isTest) {
			getdata([["http://123.sweesa.com/new/1.jpg",""],["http://123.sweesa.com/new/2.jpg",""],["http://123.sweesa.com/new/3.jpg",""],["http://123.sweesa.com/new/4.jpg",""],["http://123.sweesa.com/new/5.jpg",""],["http://123.sweesa.com/new/6.jpg",""],["http://123.sweesa.com/new/7.jpg",""],["http://123.sweesa.com/new/8.jpg",""]]);
		} else {
			$.getJSON("../../../../common/customhtml.ashx?code=CacoAdRotator", getdata);
		}
	})(); //rotate



});