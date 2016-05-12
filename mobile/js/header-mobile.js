$(function() {
	var $window = $(window),
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
});