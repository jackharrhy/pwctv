function preserveAspect() {
	var scaled = $('.page-wrap');
	scaled.height('100%');
	scaled.width('100%');
	scaled.css('box-sizing', 'border-box');
	var ratio = 16/9;
	var w = scaled.outerWidth();
	var h = scaled.outerHeight();

	if (w > ratio*h) {
		scaled.width(ratio*h);
		scaled.css({
			marginTop: 0
		});

	} else if (h > w/ratio) {
		var newHeight = w/ratio;
		scaled.height(newHeight);
		scaled.css({
			marginTop: ($('body').height()-newHeight)/2
		});
	}
};

$(document).ready(function() {
	$('#info').fitText(2);

	preserveAspect();
	$(window).resize(preserveAspect);
});

