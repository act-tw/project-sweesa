var isLocal = /^file\:\/\/\//i.test(location.href);

function initShoppingCart() {
	var cartlist = [{"MerNo":"S50111AJ","MerNo1":"50111AJ","MerName":"內磨毛羅紋邊棉質上衣","Color":"杏","Size":"F","Price":360,"Num":1,"PhotoSmPath":"http://456.sweesa.com/01/5427-1.jpg","ColorPhotoPath":""},{"MerNo":"S50730S","MerNo1":"50730S","MerName":"小直筒牛仔吊帶褲","Color":"黑","Size":"M","Price":580,"Num":1,"PhotoSmPath":"http://456.sweesa.com/07/0730-1.jpg","ColorPhotoPath":""},{"MerNo":"S50111AJ","MerNo1":"50111AJ","MerName":"內磨毛羅紋邊棉質上衣","Color":"杏","Size":"F","Price":360,"Num":1,"PhotoSmPath":"http://456.sweesa.com/01/5427-1.jpg","ColorPhotoPath":""},{"MerNo":"S50730S","MerNo1":"50730S","MerName":"小直筒牛仔吊帶褲","Color":"黑","Size":"M","Price":580,"Num":1,"PhotoSmPath":"http://456.sweesa.com/07/0730-1.jpg","ColorPhotoPath":""}];
	function getdata(cartlist) {
		var html = "";
		var count = 0;
		try {
			if (cartlist[0].MerName) {
				for (var i = 0; i < cartlist.length; i++) {
					html += "<table width=\"96%\">";
					html += "<tr>";
					html += "<td align=\"left\" width=\"100\"><img src=\"" + cartlist[i].PhotoSmPath + "\" width=\"85\" height=\"118\"></td>";
					html += "<td align=\"left\">";
					html += "<div>" + cartlist[i].MerName + "</div>";
					html += "<div>" + cartlist[i].Color + cartlist[i].Size + "</div>";
					html += "<div>TWD " + cartlist[i].Price + "</div>";
					html += "</td>";
					html += "<td width=\"30\">";
					html += "X" + cartlist[i].Num;
					html += "</td>";
					html += "</tr>";
					html += "</table>";
					count += cartlist[i].Num;
				}
			}
		} catch (err) {}
		$(".header>.control>.mybagbox>.mybaglist").html(html).attr("class","mybaglist");
		$(".header>.control>.mybag>.count").text(count);
		$(".header>.control>.mybagbox").show();
			$(".header>.control>.mybagbox>.mybaglist").mCustomScrollbar({
	            autoDraggerLength: false,
	            mouseWheel: "auto",
	            scrollButtons: {
	                enable: false
	            }
	        });
        $(".header>.control>.mybagbox").hide();
	}
	if (isLocal) {
		getdata(cartlist);
	} else {
		$.getJSON("../Common/CartList.ashx", function(cartlist) {
			getdata(cartlist);
		});
	}
}
$(function() {
	(function() {
		var data = [{"Idno":23,"Name":"NEW ARRIVAL","MouseoverName":"測試","PhotoPath":"","MainPhoto":"","ShowType":0,"OrderNum":1,"V1":"http://www.google.com.tw","SubClass":[{"Idno":160,"Name":"","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":1,"Level":0,"List":[]},{"Idno":63,"Name":"TOP","MouseoverName":"上衣","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":2,"Level":0,"List":[{"Idno":72,"Name":"TEE","MouseoverName":"","TopIdno":63,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":1,"Level":0,"List":[]},{"Idno":73,"Name":"CHIFFON","MouseoverName":"","TopIdno":63,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":2,"Level":0,"List":[]},{"Idno":71,"Name":"KNIT","MouseoverName":"","TopIdno":63,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":3,"Level":0,"List":[]},{"Idno":70,"Name":"SHIRT","MouseoverName":"","TopIdno":63,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":4,"Level":0,"List":[]},{"Idno":74,"Name":"OTHERS","MouseoverName":"","TopIdno":63,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":5,"Level":0,"List":[]}]},{"Idno":75,"Name":"OUTER","MouseoverName":"外套","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":4,"Level":0,"List":[{"Idno":79,"Name":"COAT&JACKET","MouseoverName":"","TopIdno":75,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":1,"Level":0,"List":[]},{"Idno":77,"Name":"BLAZER","MouseoverName":"","TopIdno":75,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":2,"Level":0,"List":[]},{"Idno":76,"Name":"KNIT","MouseoverName":"","TopIdno":75,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":3,"Level":0,"List":[]},{"Idno":80,"Name":"OTHERS","MouseoverName":"","TopIdno":75,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":4,"Level":0,"List":[]}]},{"Idno":81,"Name":"BOTTOM","MouseoverName":"下半身","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":5,"Level":0,"List":[{"Idno":85,"Name":"SKIRT","MouseoverName":"","TopIdno":81,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":1,"Level":0,"List":[]},{"Idno":84,"Name":"LEGGING","MouseoverName":"","TopIdno":81,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":2,"Level":0,"List":[]},{"Idno":83,"Name":"PANTS","MouseoverName":"","TopIdno":81,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":3,"Level":0,"List":[]},{"Idno":82,"Name":"DENIM","MouseoverName":"","TopIdno":81,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":4,"Level":0,"List":[]}]},{"Idno":86,"Name":"DRESS / JUMPSUIT","MouseoverName":"洋裝 / 連身","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":6,"Level":0,"List":[{"Idno":87,"Name":"DRESS","MouseoverName":"","TopIdno":86,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":1,"Level":0,"List":[]},{"Idno":88,"Name":"JUMPSUIT","MouseoverName":"","TopIdno":86,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":2,"Level":0,"List":[]}]},{"Idno":89,"Name":"BASIC","MouseoverName":"內搭","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":7,"Level":0,"List":[{"Idno":91,"Name":"TOP","MouseoverName":"","TopIdno":89,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":1,"Level":0,"List":[]},{"Idno":90,"Name":"LEGGING","MouseoverName":"","TopIdno":89,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":2,"Level":0,"List":[]}]},{"Idno":92,"Name":"ACC","MouseoverName":"配件","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":8,"Level":0,"List":[{"Idno":96,"Name":"SHOES","MouseoverName":"","TopIdno":92,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":1,"Level":0,"List":[]},{"Idno":95,"Name":"BAG","MouseoverName":"","TopIdno":92,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":2,"Level":0,"List":[]},{"Idno":94,"Name":"HAT","MouseoverName":"","TopIdno":92,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":3,"Level":0,"List":[]},{"Idno":93,"Name":"MUFFLER","MouseoverName":"","TopIdno":92,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":4,"Level":0,"List":[]},{"Idno":97,"Name":"JEWELRY","MouseoverName":"","TopIdno":92,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":5,"Level":0,"List":[]},{"Idno":175,"Name":"LEATHER","MouseoverName":"","TopIdno":92,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":6,"Level":0,"List":[]},{"Idno":181,"Name":"SOCKS","MouseoverName":"","TopIdno":92,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":7,"Level":0,"List":[]}]},{"Idno":172,"Name":"MADE IN KOREA","MouseoverName":"正韓空運","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":10,"Level":0,"List":[]},{"Idno":69,"Name":"SWEESA MADE","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":12,"Level":0,"List":[]}]},{"Idno":25,"Name":"LAST WEEK","MouseoverName":"","PhotoPath":"","MainPhoto":"","ShowType":0,"OrderNum":2,"V1":"","SubClass":[{"Idno":185,"Name":"","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":100,"Level":0,"List":[]},{"Idno":186,"Name":"TOP","MouseoverName":"上衣","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":101,"Level":0,"List":[{"Idno":198,"Name":"OTHERS","MouseoverName":"","TopIdno":186,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":11,"Level":0,"List":[]},{"Idno":197,"Name":"SHIRT","MouseoverName":"","TopIdno":186,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":12,"Level":0,"List":[]},{"Idno":196,"Name":"KNIT","MouseoverName":"","TopIdno":186,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":13,"Level":0,"List":[]},{"Idno":195,"Name":"CHIFFON","MouseoverName":"","TopIdno":186,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":14,"Level":0,"List":[]},{"Idno":194,"Name":"TEE","MouseoverName":"","TopIdno":186,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":15,"Level":0,"List":[]}]},{"Idno":187,"Name":"OUTER","MouseoverName":"外套","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":102,"Level":0,"List":[{"Idno":202,"Name":"OTHERS","MouseoverName":"","TopIdno":187,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":11,"Level":0,"List":[]},{"Idno":201,"Name":"KNIT","MouseoverName":"","TopIdno":187,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":12,"Level":0,"List":[]},{"Idno":200,"Name":"BLAZER","MouseoverName":"","TopIdno":187,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":13,"Level":0,"List":[]},{"Idno":199,"Name":"COAT&JACKET","MouseoverName":"","TopIdno":187,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":14,"Level":0,"List":[]}]},{"Idno":188,"Name":"BOTTOM","MouseoverName":"下半身","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":103,"Level":0,"List":[{"Idno":206,"Name":"DANIM","MouseoverName":"","TopIdno":188,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":11,"Level":0,"List":[]},{"Idno":205,"Name":"PANTS","MouseoverName":"","TopIdno":188,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":12,"Level":0,"List":[]},{"Idno":204,"Name":"LEGGING","MouseoverName":"","TopIdno":188,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":13,"Level":0,"List":[]},{"Idno":203,"Name":"SKIRT","MouseoverName":"","TopIdno":188,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":14,"Level":0,"List":[]}]},{"Idno":189,"Name":"DRESS/ JUMPSUIT","MouseoverName":"洋裝 / 連身","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":104,"Level":0,"List":[{"Idno":208,"Name":"JUMPSUIT","MouseoverName":"","TopIdno":189,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":11,"Level":0,"List":[]},{"Idno":207,"Name":"DRESS","MouseoverName":"","TopIdno":189,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":12,"Level":0,"List":[]}]},{"Idno":190,"Name":"BASIC","MouseoverName":"內搭","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":105,"Level":0,"List":[{"Idno":210,"Name":"LEGGING","MouseoverName":"","TopIdno":190,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":11,"Level":0,"List":[]},{"Idno":209,"Name":"TOP","MouseoverName":"","TopIdno":190,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":12,"Level":0,"List":[]}]},{"Idno":191,"Name":"ACC","MouseoverName":"配件","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":106,"Level":0,"List":[{"Idno":217,"Name":"SOCKS","MouseoverName":"","TopIdno":191,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":11,"Level":0,"List":[]},{"Idno":216,"Name":"LEATHER","MouseoverName":"","TopIdno":191,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":12,"Level":0,"List":[]},{"Idno":215,"Name":"JEWELRY","MouseoverName":"","TopIdno":191,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":13,"Level":0,"List":[]},{"Idno":214,"Name":"MUFFLER","MouseoverName":"","TopIdno":191,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":14,"Level":0,"List":[]},{"Idno":213,"Name":"HAT","MouseoverName":"","TopIdno":191,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":15,"Level":0,"List":[]},{"Idno":212,"Name":"BAG","MouseoverName":"","TopIdno":191,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":16,"Level":0,"List":[]},{"Idno":211,"Name":"SHOES","MouseoverName":"","TopIdno":191,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":17,"Level":0,"List":[]}]},{"Idno":192,"Name":"MADE IN KOREA","MouseoverName":"正韓空運","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":107,"Level":0,"List":[]},{"Idno":193,"Name":"SWEESA MADE","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":108,"Level":0,"List":[]}]},{"Idno":20,"Name":"ALL","MouseoverName":"","PhotoPath":"","MainPhoto":"","ShowType":0,"OrderNum":3,"V1":"","SubClass":[{"Idno":161,"Name":"","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":1,"Level":0,"List":[]},{"Idno":30,"Name":"TOP","MouseoverName":"上衣","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":4,"Level":0,"List":[{"Idno":35,"Name":"TEE","MouseoverName":"","TopIdno":30,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":1,"Level":0,"List":[]},{"Idno":36,"Name":"CHIFFON","MouseoverName":"","TopIdno":30,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":2,"Level":0,"List":[]},{"Idno":37,"Name":"KNIT","MouseoverName":"","TopIdno":30,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":3,"Level":0,"List":[]},{"Idno":38,"Name":"SHIRT","MouseoverName":"","TopIdno":30,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":5,"Level":0,"List":[]},{"Idno":52,"Name":"OTHERS","MouseoverName":"","TopIdno":30,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":6,"Level":0,"List":[]}]},{"Idno":33,"Name":"OUTER","MouseoverName":"外套","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":5,"Level":0,"List":[{"Idno":45,"Name":"COAT & JACKET","MouseoverName":"","TopIdno":33,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":1,"Level":0,"List":[]},{"Idno":46,"Name":"BLAZER","MouseoverName":"","TopIdno":33,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":2,"Level":0,"List":[]},{"Idno":47,"Name":"KNIT","MouseoverName":"","TopIdno":33,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":3,"Level":0,"List":[]},{"Idno":53,"Name":"OTHERS","MouseoverName":"","TopIdno":33,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":4,"Level":0,"List":[]}]},{"Idno":32,"Name":"BOTTOM","MouseoverName":"下半身","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":6,"Level":0,"List":[{"Idno":41,"Name":"SKIRT","MouseoverName":"","TopIdno":32,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":1,"Level":0,"List":[]},{"Idno":42,"Name":"LEGGING","MouseoverName":"","TopIdno":32,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":2,"Level":0,"List":[]},{"Idno":43,"Name":"PANTS","MouseoverName":"","TopIdno":32,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":3,"Level":0,"List":[]},{"Idno":44,"Name":"DENIM","MouseoverName":"","TopIdno":32,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":4,"Level":0,"List":[]}]},{"Idno":31,"Name":"DRESS / JUMPSUIT","MouseoverName":"洋裝 / 連身","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":7,"Level":0,"List":[{"Idno":39,"Name":"DRESS","MouseoverName":"","TopIdno":31,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":1,"Level":0,"List":[]},{"Idno":40,"Name":"JUMPSUIT","MouseoverName":"","TopIdno":31,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":2,"Level":0,"List":[]}]},{"Idno":54,"Name":"BASIC","MouseoverName":"內搭","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":8,"Level":0,"List":[{"Idno":55,"Name":"TOP","MouseoverName":"","TopIdno":54,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":1,"Level":0,"List":[]},{"Idno":56,"Name":"LEGGING","MouseoverName":"","TopIdno":54,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":100,"Level":0,"List":[]}]},{"Idno":34,"Name":"ACC","MouseoverName":"配件","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":9,"Level":0,"List":[{"Idno":48,"Name":"SHOES","MouseoverName":"","TopIdno":34,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":1,"Level":0,"List":[]},{"Idno":49,"Name":"BAG","MouseoverName":"","TopIdno":34,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":2,"Level":0,"List":[]},{"Idno":50,"Name":"HAT","MouseoverName":"","TopIdno":34,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":3,"Level":0,"List":[]},{"Idno":51,"Name":"MUFFLER","MouseoverName":"","TopIdno":34,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":4,"Level":0,"List":[]},{"Idno":98,"Name":"JEWELRY","MouseoverName":"","TopIdno":34,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":5,"Level":0,"List":[]},{"Idno":174,"Name":"LEATHER","MouseoverName":"","TopIdno":34,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":6,"Level":0,"List":[]},{"Idno":180,"Name":"SOCKS","MouseoverName":"","TopIdno":34,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":7,"Level":0,"List":[]}]},{"Idno":173,"Name":"MADE IN KOREA","MouseoverName":"正韓空運","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":10,"Level":0,"List":[]},{"Idno":27,"Name":"SWEESA MADE","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":12,"Level":0,"List":[]}]},{"Idno":21,"Name":"BEST ITEMS","MouseoverName":"","PhotoPath":"","MainPhoto":"","ShowType":0,"OrderNum":4,"V1":"","SubClass":[{"Idno":183,"Name":"","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":1,"Level":0,"List":[]},{"Idno":158,"Name":"BEST ITEMS","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":2,"Level":0,"List":[]}]},{"Idno":22,"Name":"SALE","MouseoverName":"","PhotoPath":"","MainPhoto":"","ShowType":0,"OrderNum":5,"V1":"","SubClass":[{"Idno":159,"Name":"","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":1,"Level":0,"List":[]},{"Idno":177,"Name":"SALE - NEW IN","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":100,"Level":0,"List":[]}]},{"Idno":24,"Name":"IN STOCK","MouseoverName":"","PhotoPath":"","MainPhoto":"","ShowType":0,"OrderNum":6,"V1":"","SubClass":[{"Idno":179,"Name":"","MouseoverName":"","TopIdno":99999,"Visible":false,"MobileVisibleType":1,"MainIdno":0,"ShowType":0,"V1":"","ordernum":100,"Level":0,"List":[]}]}];
		function getdata(data) {
		    var html = "";
		    for (var i = 0, max = data.length; i < max; i++) {
		    	if (data[i].ShowType===2 || data[i].ShowType===3) {
		    		html += "<a href=\"" + data[i].V1 + "\" text=\"" + data[i].MouseoverName + "\"";
		    		if (data[i].ShowType===3) {
		    			html += " target=\"_blank\"";
		    		}
		    		html += ">" + data[i].Name + "</a>";
		    	} else {
		    		html += "<a href=\"../Shop/itemList.aspx?m=" + data[i].Idno + "\" text=\"" + data[i].MouseoverName + "\">" + data[i].Name + "</a>";
		    	}
		    }
		    $(".header>.menu").html(html);
		}
        if (isLocal) {
            getdata(data);
        } else {
            $.getJSON("../common/ajax/menucmd.ashx", function(data) {
                getdata(data);
            });
        }
	})(); //load menu
	(function() {
		$("body").on("mouseenter mouseleave", "[text]", function() {
			var $this = $(this);
			var text = $this.text();
			$this.text($this.attr("text"));
			$this.attr("text", text);
		});
		$(".header>.menu,.header>.control").on("mouseenter mouseleave", ">a", function() {
			var $this = $(this);
			var max = $this.width();
			$this.removeAttr("style");
			if ($this.width() > max) {
				$this.width($this.width());
			} else {
				$this.width(max);
			}
		});
		$(".header>.menu>a,.header>.control>a").each(function() {
			$(this).mouseenter().mouseleave();
		});
	})(); //change link text
	(function() {
		var sid = null;
		$(".header>.control>.mybag,.header>.control>.mybagbox").mouseenter(function() {
			if (sid !== null) {
				clearTimeout(sid);
				sid = null;
			}
			$(".header>.control>.mybagbox").fadeIn();
		}).mouseleave(function() {
			sid = setTimeout(function() {
				$(".header>.control>.mybagbox").hide();
			}, 200);
		});
	})(); //mybag show hide
	(function() {
		var sid = null;
		$(".header>.control>.help,.header>.control>.helpbox").mouseenter(function() {
			if (sid !== null) {
				clearTimeout(sid);
				sid = null;
			}
			$(".header>.control>.helpbox").fadeIn();
		}).mouseleave(function() {
			sid = setTimeout(function() {
				$(".header>.control>.helpbox").hide();
			}, 200);
		});
	})(); //help show hide
	(function() {
		initShoppingCart();
	})(); //init
});