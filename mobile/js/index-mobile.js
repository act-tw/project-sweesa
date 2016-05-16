$(function() {
	var isLocal = /^file\:\/\/\//i.test(location.href);
	(function() {
		function next(img,url,hasEffect) {
			if (hasEffect) {
				$(".rotate>a").first().fadeOut(1000,function() {
					$(this).remove();
					$(".rotate").append("<a><img src=\"" + img + "\" width=\"100%\"></a>");	
				});
				
			} else {
				$(".rotate>a").first().remove();
				$(".rotate").append("<a><img src=\"" + img + "\" width=\"100%\"></a>");	
			}
			

		}


		function getdata(data) {
			
	


			var i=0;
			setInterval(function() {
				if (i>=data.length) {
					i=0;
				}

				next(data[i][0],data[i][1],true);

				i++;
			},2000);
			next(data[i++][0],data[i++][1]);
			next(data[i++][0],data[i++][1]);


		}
		if (isLocal) {
			getdata([["http://123.sweesa.com/new/1.jpg",""],["http://123.sweesa.com/new/2.jpg",""],["http://123.sweesa.com/new/3.jpg",""],["http://123.sweesa.com/new/4.jpg",""],["http://123.sweesa.com/new/5.jpg",""],["http://123.sweesa.com/new/6.jpg",""],["http://123.sweesa.com/new/7.jpg",""],["http://123.sweesa.com/new/8.jpg",""]]);
		} else {
			$.getJSON("../../../../common/customhtml.ashx?code=CacoAdRotator", getdata);
		}
	})(); //rotate



});