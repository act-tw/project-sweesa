$(function() {
	var isLocal = /^file\:\/\/\//i.test(location.href),
		$window = $(window),
		$document = $(document),
		$menu = $(".menu"),
		$menubox = $(".menubox"),
		$topbtn = $(".topbtn"),
		$htmlbody = $("html,body");
	$menu.click(function() {
		var left = parseInt($menubox.css("left")),
			width = parseInt($menubox.css("width"));
		if (left === 0) {
			$menubox.css("left", -width);
		} else {
			$menubox.css("left", 0);
		}
	});
	$menubox.click(function(e) {
		e.stopPropagation();
	});
	$document.click(function() {
		var left = parseInt($menubox.css("left")),
			width = parseInt($menubox.css("width"));
		if (left === 0) {
			$menubox.css("left", -width);
		}
	});
	$topbtn.click(function() {
		$htmlbody.stop().animate({
			"scrollTop": 0
		}, "slow");
	});
	$window.scroll(function() {
		var top = $(this).scrollTop();
		if (top > 0) {
			if ($topbtn.is(":hidden")) {
				$topbtn.stop().fadeIn();
			}
		} else {
			if ($topbtn.is(":visible")) {
				$topbtn.stop().fadeOut();
			}
		}
	});
	(function() {
		function getdata(cartlist) {
			var count = 0;
			try {
				if (cartlist[0].MerName) {
					for (var i = 0, max = cartlist.length; i < max; i++) {
						count += cartlist[i].Num;
					}
				}
			} catch (e) {}
			$(".cart>a").text(count);
		}
		if (isLocal) {
			getdata([{
				MerNo: "S5230212",
				MerNo1: "5230212",
				MerName: "--test--MLB-波士頓紅襪隊爆裂效果T恤(男)",
				Color: "紫",
				Size: "M",
				Price: 616,
				Num: 1,
				PhotoSmPath: "http://www.ohho.com.tw/GOGO/MLB/2012SS/220x220/5230212-780.jpg",
				ColorPhotoPath: "http://www.ohho.com.tw/GOGO/色塊/-550.jpg"
			}]);
		} else {
			$.getJSON("../../../../Common/CartList.ashx", getdata);
		}
	})();
	(function() {
		function getdata(wishlist) {
			var count = 0;
			try {
				if (wishlist[0].MerName) {
					for (var i = 0, max = wishlist.length; i < max; i++) {
						count += 1;
					}
				}
			} catch (e) {}
			$(".wish>a").text(count);
		}
		if (isLocal) {
			getdata([{
				tidno: 17,
				MerNo1: "5230212",
				MerName: "--test--MLB-波士頓紅襪隊爆裂效果T恤(男)",
				Color: "灰",
				Size: "2XL",
				Price: 616,
				PhotoSmPath: "http://www.ohho.com.tw/GOGO/MLB/2012SS/220x220/5230212-850.jpg",
				DetailUrl: "itemDetail.aspx?mNo1=5230212",
				merOrderNum: 0,
				ColorPhotoPath: "http://www.ohho.com.tw/GOGO/色塊/-900.jpg"
			}])
		} else {
			$.getJSON("../Ajax/CartCmd.ashx?method=GetTraceList&returntype=json", getdata);
		}
	})();
	(function() {
		function QueryString(name) {
			var data = window.location.search.substring(1).split("&");
			for (i = 0; i < data.length; i++) {
				var key = data[i].split("=");
				if (key[0].toUpperCase() == name.toUpperCase()) {
					return key[1];	
				} 
			}
			return "";
		}
		function getlink(data,m) {
			var html="";
			if (!m) {
				if (data.SubClass.length>0) {
					html += data.Name;
				} else {
					if (data.ShowType === 2 || data.ShowType === 3) {
						html += "<a href=\"" + data.V1 + "\"";
                        if (data.ShowType === 3) {
                            html += " target=\"_blank\"";
                        }
                        html += ">" + data.Name + "</a>";
					} else {
						html += "<a href=\"../Shop/itemList.aspx?m=" + data.Idno + "\">" + data.Name + "</a>";			
					}
				}
			} else {
				if (data.List.length>0) {
					html += data.Name;
				} else {
					if (data.ShowType === 2 || data.ShowType === 3) {
						html += "<a href=\"" + data.V1 + "\"";
                        if (data.ShowType === 3) {
                            html += " target=\"_blank\"";
                        }
                        html += ">" + data.Name + "</a>";
					} else {
						html += "<a href=\"../Shop/itemList.aspx?m=" + m + "&p=" + data.Idno + "\">" + data.Name + "</a>";	
					}
					
				}
			}
			return html;
		}
		function getdata(data) {
			var html="";
			for(var i=0,imax=data.length;i<imax;i++) {
				html+="<div class=\"level1";
				if (data[i].SubClass.length>0) {
					if (QueryString("m")===data[i].Idno.toString()) {
						html+=" minus";
					} else {
						html+=" plus";	
					}
				}
				html+="\">" + getlink(data[i]);
				if (data[i].SubClass.length>0) {
					for(var j=0,jmax=data[i].SubClass.length;j<jmax;j++) {
						html+="<div class=\"level2";
						if (data[i].SubClass[j].List.length>0) {
							var list = data[i].SubClass[j].List.map(function(a) {
  								return a.Idno.toString();
							});
							if (list.indexOf(QueryString("p"))>-1) {
								html+=" minus";
							} else {
								html+=" plus";	
							}

						} else {
							if (QueryString("p")===data[i].SubClass[j].Idno.toString()) {
								html+=" selected";
							}
						}
						html+="\">" + getlink(data[i].SubClass[j],data[i].Idno);
						if (data[i].SubClass[j].List.length>0) {
							for (var k=0,kmax=data[i].SubClass[j].List.length;k<kmax;k++) {
								html+="<div class=\"level3";
								if (QueryString("p")===data[i].SubClass[j].List[k].Idno.toString()) {
									html+=" selected";
								}								
								html+="\">" + getlink(data[i].SubClass[j].List[k],data[i].Idno) + "</div>";
							}
						}
						html+="</div>";
					}
				}
				html+="</div>";
			}
			$(".menudata").html(html).on("click", ".plus,.minus",function(e) {
				if ($(this).is(".plus")) {
					$(this).removeClass("plus").addClass("minus");
				} else {
					$(this).removeClass("minus").addClass("plus");
				}
				e.stopPropagation();
			});
			$(".level2").click(function(e) {
				if(!$(this).hasClass("plus") && !$(this).hasClass("minus")) {
					$(".level2,.level3").removeClass("selected");
					$(this).addClass("selected");
					e.stopPropagation();
				}
			});
			$(".level3").click(function(e) {
				$(".level2,.level3").removeClass("selected");
				$(this).addClass("selected");
				e.stopPropagation();
			});
		}
		if (isLocal) {
			getdata([{"Idno":23,"Name":"NEW ARRIVAL","MouseoverName":"","PhotoPath":"","MainPhoto":"","ShowType":0,"OrderNum":1,"V1":"","SubClass":[{"Idno":63,"Name":"TOP","MouseoverName":"上衣","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":2,"Level":0,"List":[{"Idno":72,"Name":"TEE","MouseoverName":"","TopIdno":63,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":21,"Level":0,"List":[]},{"Idno":73,"Name":"CHIFFON","MouseoverName":"","TopIdno":63,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":22,"Level":0,"List":[]},{"Idno":70,"Name":"SHIRT","MouseoverName":"","TopIdno":63,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":23,"Level":0,"List":[]},{"Idno":71,"Name":"KNIT","MouseoverName":"","TopIdno":63,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":24,"Level":0,"List":[]},{"Idno":74,"Name":"OTHERS","MouseoverName":"","TopIdno":63,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":25,"Level":0,"List":[]}]},{"Idno":75,"Name":"OUTER","MouseoverName":"外套","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":4,"Level":0,"List":[{"Idno":80,"Name":"OTHERS","MouseoverName":"","TopIdno":75,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":44,"Level":0,"List":[]}]},{"Idno":81,"Name":"BOTTOM","MouseoverName":"下半身","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":5,"Level":0,"List":[{"Idno":82,"Name":"DENIM","MouseoverName":"","TopIdno":81,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":51,"Level":0,"List":[]},{"Idno":83,"Name":"PANTS","MouseoverName":"","TopIdno":81,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":52,"Level":0,"List":[]},{"Idno":85,"Name":"SKIRT","MouseoverName":"","TopIdno":81,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":54,"Level":0,"List":[]}]},{"Idno":86,"Name":"DRESS / JUMPSUIT","MouseoverName":"洋裝 / 連身","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":6,"Level":0,"List":[{"Idno":87,"Name":"DRESS","MouseoverName":"","TopIdno":86,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":61,"Level":0,"List":[]},{"Idno":88,"Name":"JUMPSUIT","MouseoverName":"","TopIdno":86,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":62,"Level":0,"List":[]}]},{"Idno":89,"Name":"BASIC","MouseoverName":"內搭","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":7,"Level":0,"List":[{"Idno":91,"Name":"TOP","MouseoverName":"","TopIdno":89,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":71,"Level":0,"List":[]}]},{"Idno":92,"Name":"ACC","MouseoverName":"配件","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":8,"Level":0,"List":[{"Idno":95,"Name":"BAG","MouseoverName":"","TopIdno":92,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":81,"Level":0,"List":[]},{"Idno":96,"Name":"SHOES","MouseoverName":"","TopIdno":92,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":82,"Level":0,"List":[]}]},{"Idno":172,"Name":"MADE IN KOREA","MouseoverName":"正韓空運","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":9,"Level":0,"List":[]},{"Idno":69,"Name":"NEW IN","MouseoverName":"新品優惠","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":2,"V1":"http://www.sweesa.com/Shop/itemList.aspx?m=22&p=177&smfp=1&&o=4&sa=1","ordernum":10,"Level":0,"List":[]},{"Idno":219,"Name":"IN STOCK","MouseoverName":"快速到貨","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":10,"Level":0,"List":[]}]},{"Idno":25,"Name":"LAST WEEK","MouseoverName":"","PhotoPath":"","MainPhoto":"","ShowType":0,"OrderNum":2,"V1":"","SubClass":[{"Idno":186,"Name":"TOP","MouseoverName":"上衣","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":1,"Level":0,"List":[{"Idno":194,"Name":"TEE","MouseoverName":"","TopIdno":186,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":11,"Level":0,"List":[]},{"Idno":195,"Name":"CHIFFON","MouseoverName":"","TopIdno":186,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":12,"Level":0,"List":[]},{"Idno":197,"Name":"SHIRT","MouseoverName":"","TopIdno":186,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":13,"Level":0,"List":[]},{"Idno":196,"Name":"KNIT","MouseoverName":"","TopIdno":186,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":14,"Level":0,"List":[]},{"Idno":198,"Name":"OTHERS","MouseoverName":"","TopIdno":186,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":15,"Level":0,"List":[]}]},{"Idno":187,"Name":"OUTER","MouseoverName":"外套","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":3,"Level":0,"List":[{"Idno":199,"Name":"COAT&JACKET","MouseoverName":"","TopIdno":187,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":31,"Level":0,"List":[]},{"Idno":200,"Name":"BLAZER","MouseoverName":"","TopIdno":187,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":33,"Level":0,"List":[]},{"Idno":202,"Name":"OTHERS","MouseoverName":"","TopIdno":187,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":34,"Level":0,"List":[]}]},{"Idno":188,"Name":"BOTTOM","MouseoverName":"下半身","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":4,"Level":0,"List":[{"Idno":206,"Name":"DENIM","MouseoverName":"","TopIdno":188,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":41,"Level":0,"List":[]},{"Idno":205,"Name":"PANTS","MouseoverName":"","TopIdno":188,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":42,"Level":0,"List":[]},{"Idno":203,"Name":"SKIRT","MouseoverName":"","TopIdno":188,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":44,"Level":0,"List":[]}]},{"Idno":189,"Name":"DRESS/ JUMPSUIT","MouseoverName":"洋裝 / 連身","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":5,"Level":0,"List":[{"Idno":207,"Name":"DRESS","MouseoverName":"","TopIdno":189,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":51,"Level":0,"List":[]},{"Idno":208,"Name":"JUMPSUIT","MouseoverName":"","TopIdno":189,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":52,"Level":0,"List":[]}]},{"Idno":190,"Name":"BASIC","MouseoverName":"內搭","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":6,"Level":0,"List":[{"Idno":209,"Name":"TOP","MouseoverName":"","TopIdno":190,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":61,"Level":0,"List":[]}]},{"Idno":191,"Name":"ACC","MouseoverName":"配件","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":7,"Level":0,"List":[{"Idno":212,"Name":"BAG","MouseoverName":"","TopIdno":191,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":71,"Level":0,"List":[]},{"Idno":211,"Name":"SHOES","MouseoverName":"","TopIdno":191,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":72,"Level":0,"List":[]}]},{"Idno":192,"Name":"MADE IN KOREA","MouseoverName":"正韓空運","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":8,"Level":0,"List":[]}]},{"Idno":27,"Name":"WHIMS","MouseoverName":"","PhotoPath":"","MainPhoto":"","ShowType":2,"OrderNum":3,"V1":"http://www.sweesa.com/Shop/itemList.aspx?m=27&p=236","SubClass":[{"Idno":236,"Name":"NEW","MouseoverName":"本周最新","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":1,"Level":0,"List":[]},{"Idno":233,"Name":"CLOTHES","MouseoverName":"衣著","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":3,"Level":0,"List":[]},{"Idno":234,"Name":"ACC","MouseoverName":"配件","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":4,"Level":0,"List":[]}]},{"Idno":20,"Name":"ALL","MouseoverName":"","PhotoPath":"","MainPhoto":"","ShowType":0,"OrderNum":4,"V1":"","SubClass":[{"Idno":30,"Name":"TOP","MouseoverName":"上衣","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":1,"Level":0,"List":[{"Idno":35,"Name":"TEE","MouseoverName":"","TopIdno":30,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":11,"Level":0,"List":[]},{"Idno":36,"Name":"CHIFFON","MouseoverName":"","TopIdno":30,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":12,"Level":0,"List":[]},{"Idno":38,"Name":"SHIRT","MouseoverName":"","TopIdno":30,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":13,"Level":0,"List":[]},{"Idno":37,"Name":"KNIT","MouseoverName":"","TopIdno":30,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":14,"Level":0,"List":[]},{"Idno":52,"Name":"OTHERS","MouseoverName":"","TopIdno":30,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":15,"Level":0,"List":[]}]},{"Idno":33,"Name":"OUTER","MouseoverName":"外套","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":3,"Level":0,"List":[{"Idno":45,"Name":"COAT & JACKET","MouseoverName":"","TopIdno":33,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":31,"Level":0,"List":[]},{"Idno":47,"Name":"KNIT","MouseoverName":"","TopIdno":33,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":32,"Level":0,"List":[]},{"Idno":46,"Name":"BLAZER","MouseoverName":"","TopIdno":33,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":33,"Level":0,"List":[]},{"Idno":53,"Name":"OTHERS","MouseoverName":"","TopIdno":33,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":34,"Level":0,"List":[]}]},{"Idno":32,"Name":"BOTTOM","MouseoverName":"下半身","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":4,"Level":0,"List":[{"Idno":44,"Name":"DENIM","MouseoverName":"","TopIdno":32,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":41,"Level":0,"List":[]},{"Idno":43,"Name":"PANTS","MouseoverName":"","TopIdno":32,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":42,"Level":0,"List":[]},{"Idno":42,"Name":"LEGGING","MouseoverName":"","TopIdno":32,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":43,"Level":0,"List":[]},{"Idno":41,"Name":"SKIRT","MouseoverName":"","TopIdno":32,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":44,"Level":0,"List":[]}]},{"Idno":31,"Name":"DRESS / JUMPSUIT","MouseoverName":"洋裝 / 連身","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":5,"Level":0,"List":[{"Idno":39,"Name":"DRESS","MouseoverName":"","TopIdno":31,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":51,"Level":0,"List":[]},{"Idno":40,"Name":"JUMPSUIT","MouseoverName":"","TopIdno":31,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":52,"Level":0,"List":[]}]},{"Idno":54,"Name":"BASIC","MouseoverName":"內搭","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":6,"Level":0,"List":[{"Idno":55,"Name":"TOP","MouseoverName":"","TopIdno":54,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":61,"Level":0,"List":[]},{"Idno":56,"Name":"LEGGING","MouseoverName":"","TopIdno":54,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":62,"Level":0,"List":[]}]},{"Idno":34,"Name":"ACC","MouseoverName":"配件","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":7,"Level":0,"List":[{"Idno":49,"Name":"BAG","MouseoverName":"","TopIdno":34,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":71,"Level":0,"List":[]},{"Idno":48,"Name":"SHOES","MouseoverName":"","TopIdno":34,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":72,"Level":0,"List":[]},{"Idno":50,"Name":"HAT","MouseoverName":"","TopIdno":34,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":73,"Level":0,"List":[]},{"Idno":51,"Name":"BELT","MouseoverName":"","TopIdno":34,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":74,"Level":0,"List":[]},{"Idno":180,"Name":"SOCKS","MouseoverName":"","TopIdno":34,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":75,"Level":0,"List":[]},{"Idno":98,"Name":"GLASSES","MouseoverName":"","TopIdno":34,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":76,"Level":0,"List":[]},{"Idno":174,"Name":"BEAUTY","MouseoverName":"","TopIdno":34,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":77,"Level":0,"List":[]}]},{"Idno":173,"Name":"MADE IN KOREA","MouseoverName":"正韓空運","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":2,"V1":"http://www.sweesa.com/Shop/itemList.aspx?m=26&p=223&smfp=1&&o=4&sa=1","ordernum":8,"Level":0,"List":[]},{"Idno":27,"Name":"SWEESA MADE","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":9,"Level":0,"List":[]}]},{"Idno":21,"Name":"BEST","MouseoverName":"","PhotoPath":"","MainPhoto":"","ShowType":0,"OrderNum":5,"V1":"","SubClass":[{"Idno":158,"Name":"BEST ITEMS","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":2,"V1":"http://www.sweesa.com/Shop/itemList.aspx?m=21&p=158&smfp=1&&o=4&sa=1","ordernum":1,"Level":0,"List":[]},{"Idno":59,"Name":"RESTOCK","MouseoverName":"熱銷補貨到","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":2,"V1":"http://www.sweesa.com/Shop/itemList.aspx?m=21&p=59&smfp=1&&o=4&sa=1","ordernum":2,"Level":0,"List":[]}]},{"Idno":22,"Name":"SALE","MouseoverName":"","PhotoPath":"","MainPhoto":"","ShowType":0,"OrderNum":6,"V1":"","SubClass":[{"Idno":177,"Name":"NEW IN","MouseoverName":"新品優惠","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":1,"Level":0,"List":[]},{"Idno":61,"Name":"SET","MouseoverName":"組合優惠","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":2,"Level":0,"List":[]},{"Idno":220,"Name":"SPECIAL","MouseoverName":"特別優惠","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":3,"Level":0,"List":[]},{"Idno":178,"Name":"IN STOCK","MouseoverName":"現貨優惠","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":4,"Level":0,"List":[]}]},{"Idno":26,"Name":"STYLE","MouseoverName":"","PhotoPath":"","MainPhoto":"","ShowType":0,"OrderNum":7,"V1":"","SubClass":[{"Idno":235,"Name":"LACE","MouseoverName":"蕾絲緹花","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":2,"V1":"http://www.sweesa.com/Shop/itemList.aspx?m=26&p=235&smfp=1&&o=4&sa=1","ordernum":1,"Level":0,"List":[]},{"Idno":232,"Name":"Black X White","MouseoverName":"黑 X 白","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":2,"V1":"http://www.sweesa.com/Shop/itemList.aspx?m=26&p=232&smfp=1&&o=4&sa=1","ordernum":2,"Level":0,"List":[]},{"Idno":229,"Name":"Rose Quartz X Serenity","MouseoverName":"流行粉藍","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":2,"V1":"http://www.sweesa.com/Shop/itemList.aspx?m=26&p=229&smfp=1&&o=4&sa=1","ordernum":3,"Level":0,"List":[]},{"Idno":228,"Name":"SIMPLE","MouseoverName":"簡約","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":2,"V1":"http://www.sweesa.com/Shop/itemList.aspx?m=26&p=228&smfp=1&&o=4&sa=1","ordernum":4,"Level":0,"List":[]},{"Idno":223,"Name":"KOREA","MouseoverName":"正韓空運","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":2,"V1":"http://www.sweesa.com/Shop/itemList.aspx?m=26&p=223&smfp=1&&o=4&sa=1","ordernum":5,"Level":0,"List":[]},{"Idno":227,"Name":"STRIPE","MouseoverName":"條紋","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":2,"V1":"http://www.sweesa.com/Shop/itemList.aspx?m=26&p=227&smfp=1&&o=4&sa=1","ordernum":6,"Level":0,"List":[]},{"Idno":224,"Name":"DENIM","MouseoverName":"單寧","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":2,"V1":"http://www.sweesa.com/Shop/itemList.aspx?m=26&p=224&smfp=1&&o=4&sa=1","ordernum":7,"Level":0,"List":[]},{"Idno":225,"Name":"CHIFFON","MouseoverName":"雪紡","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":2,"V1":"http://www.sweesa.com/Shop/itemList.aspx?m=26&p=225&smfp=1&&o=4&sa=1","ordernum":8,"Level":0,"List":[]},{"Idno":226,"Name":"KNIT","MouseoverName":"針織","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":2,"V1":"http://www.sweesa.com/Shop/itemList.aspx?m=26&p=226&smfp=1&&o=4&sa=1","ordernum":9,"Level":0,"List":[]}]}]);
		} else {
			$.getJSON("../../../../common/ajax/menucmd.ashx?t=mobile", getdata);
		}
	})();
	(function() {
		$("#main-content").css("min-height",$window.height() - $(".header").height() - $(".footer").height());
	})(); //adjust
});