$(function() {
	var isTest = true;
	var isLocal = /^file\:\/\/\//i.test(location.href);
	(function() {
		var $rotate = $(".rotate");
		function dot() {
			$(".navi>span.active").removeClass();
			$(".navi>span").eq($(".rotate>a:first>img").attr("alt")).addClass("active");
		}
		function next(img,url,index,hasEffect) {
			var link = "<a href=\"" + url + "\"><img src=\"" + img + "\" width=\"100%\" alt=\"" + index + "\"></a>";
			if (hasEffect) {
				$rotate.find(">a").first().fadeOut("slow",function() {
					$rotate.append(link);
					$(this).remove();
					dot();
				});
			} else {
				$rotate.append(link);
				$rotate.find(">a").first().remove();
				dot();
			}
		}
		function getdata(data) {
			(function() {
				var html="";
				for (var i=0,max=data.length;i<max;i++) {
					$(".preload").append("<img src=\"" + data[i][0] + "\">");
					html+="<span";
					if (i===0) {
						html+= " class=\"active\"";
					}
					html+="></span>";
				}
				$(".navi").html(html);
			})();
			(function() {
				var i=0;
				function run() {
					if (i>=data.length) {
						i=0;
					}
					next(data[i][0],data[i][1],i,true);
					i++;
				}
				var sid = setInterval(run,2000);
				next(data[i][0],data[i][1],i);
				i++;
				next(data[i][0],data[i][1],i);
				i++;
				$(".navi>span").click(function() {
					var nowat = parseInt($(".rotate>a:first>img").attr("alt")),
						index = $(this).index();
					if (nowat !== index) {
						$rotate.find(">a").last().attr("href",data[index][1]).find(">img").attr({src:data[index][0],alt:index});
						next(data[index][0],data[index][1],index,true);
						i = index;
					}
				});

				$rotate.add(".navi>span").hover(function() {
					clearInterval(sid);
				},function() {
					sid = setInterval(run,2000);
				});

			})();
			(function() {
				var isTouch = false,
					move = 0;
				function prev() {
					$(".navi>span.active").prev().click();
				}
				function next() {
					$(".navi>span.active").next().click();
				}
                if ("ontouchstart" in document.documentElement) {
                    isTouch = true;
                }
                $rotate.on(isTouch ? "touchstart" : "mousedown", "img" , function (e) {
                    if (e.type === "mousedown") {
                        move = e.pageX;
                    } else {
                        move = e.originalEvent.touches[0].pageX;
                    }
                    e.stopPropagation();
                });
                $rotate.on(isTouch? "touchmove": "mousemove", "img", function (e) {
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
                    e.stopPropagation();
                });
			})();
		}
		if (isLocal || isTest) {
			getdata([["http://123.sweesa.com/new/1.jpg",""],["http://123.sweesa.com/new/2.jpg",""],["http://123.sweesa.com/new/3.jpg",""],["http://123.sweesa.com/new/4.jpg",""],["http://123.sweesa.com/new/5.jpg",""],["http://123.sweesa.com/new/6.jpg",""],["http://123.sweesa.com/new/7.jpg",""],["http://123.sweesa.com/new/8.jpg",""]]);
		} else {
			$.getJSON("../../../../common/customhtml.ashx?code=CacoAdRotator", getdata);
		}
	})(); //rotate
	(function() {
		function getdata(data) {
			var $outbox = $(".index>.event>.outbox"),
				$inbox = $(".index>.event>.outbox>.inbox"),
				html="";
			for(var i=0,max=data.length;i<max;i++) {
				html+="<a href=\"" + data[i][2] + "\"><img src=\"" + data[i][0] + "\"></a>";
			}
			$inbox.html(html);
			$(window).resize(function() {
				$inbox.find(">a").width(Math.floor($outbox.width()/2));
				$inbox.width(Math.floor($outbox.width()/2)*data.length);
			}).resize();
			function next() {
				if (!$inbox.is(":animated")) {
					var inboxWidth = $inbox.width();
					var left = parseInt($inbox.css("left"));
					var width = $outbox.width();
					if (0-inboxWidth+width>=left) {
						left = 0;
					} else {
						if (inboxWidth+left-width>=width) {
							left = left - width;	
						} else {
							left = left - (inboxWidth+left-width);
						}
					}
					$inbox.animate({left:left});
				}
			}
			function back() {
				if (!$inbox.is(":animated")) {
					var inboxWidth = $inbox.width();
					var left = parseInt($inbox.css("left"));
					var width = $outbox.width();
					if (left>=0) {
						left = left - (inboxWidth+left-width);
					} else {
						if (left+width<=0) {
							left = left + width;
						} else {
							left = 0;
						}
					}
					$inbox.animate({left:left});
				}
			}
			var sid = setInterval(next,3000);
			$(".index>.event>.flagright").click(next);
			$(".index>.event>.flagleft").click(back);
			$(".index>.event>.outbox>.inbox,.index>.event>.flagright,.index>.event>.flagleft").hover(function() {
				clearInterval(sid);
			},function() {
				sid = setInterval(next,3000);
			});
		}
		if (isLocal || isTest) {
			getdata([["\thttp://123.sweesa.com/new/left01.jpg","\thttp://123.sweesa.com/new/left01-1.jpg",""],["\thttp://123.sweesa.com/new/left02.jpg","\thttp://123.sweesa.com/new/left02-1.jpg","\thttps://www.facebook.com/SWEESA.tw/"],["\thttp://456.sweesa.com/medium/left03.jpg","\thttp://456.sweesa.com/medium/left03-1.jpg","http://www.sweesa.com/Shop/itemList.aspx?m=22&p=178&smfp=1&&o=4&sa=1"],["http://www.7iaoshou.com/products_thumbnail_img/234/1454046883905.jpg","",""],["http://pic.kximg.cc/pic/app/44/46/1194_171444636_rating-366x355.jpeg","",""],["http://i2.wp.com/www.mydesy.com/wp-content/uploads/2014/05/50-Tree-Houses10.jpg?fit=750%2C355","",""],["http://ecx.images-amazon.com/images/I/51M62w7GXGL._SY355_.jpg","",""]]);
		} else {
			$.getJSON("../../../../common/customhtml.ashx?code=CacoAdSelector", getdata);
		}
	})(); //tips
});