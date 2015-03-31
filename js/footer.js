$(function() {
	$(".footer>.menu").on("mouseenter mouseleave", ">a", function() {
		var $this = $(this);
		var max = $this.width();
		$this.removeAttr("style");
		if ($this.width() > max) {
			$this.width($this.width());
		} else {
			$this.width(max);
		}
	});
	$(".footer>.menu>a").each(function() {
		$(this).mouseenter().mouseleave();
	});
});