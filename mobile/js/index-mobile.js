$(function() {
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
					var nowat = parseInt($(".rotate>a:first>img").attr("alt"));
					var index = $(this).index();
					if (nowat !== index) {
						$(".rotate>a:last").attr("href",data[index][1]).find(">img").attr({src:data[index][0],alt:index});
						next(data[index][0],data[index][1],index,true);
					}
				});
			})();
			(function() {
				
			})();
		}
		if (isLocal) {
			getdata([["http://123.sweesa.com/new/1.jpg",""],["http://123.sweesa.com/new/2.jpg",""],["http://123.sweesa.com/new/3.jpg",""],["http://123.sweesa.com/new/4.jpg",""],["http://123.sweesa.com/new/5.jpg",""],["http://123.sweesa.com/new/6.jpg",""],["http://123.sweesa.com/new/7.jpg",""],["http://123.sweesa.com/new/8.jpg",""]]);
		} else {
			$.getJSON("../../../../common/customhtml.ashx?code=CacoAdRotator", getdata);
		}
	})(); //rotate



});