(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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


},{}]},{},[1])


//# sourceMappingURL=pwc-tv.js.map
