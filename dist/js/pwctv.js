(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var timeOptions = {
	hour: '2-digit', minute: '2-digit'
};

var dateElem;
var timeElem;

function loop() {
	var currentDate = new Date();

	dateElem.innerHTML = currentDate.toDateString();
	timeElem.innerHTML = currentDate.toLocaleTimeString('en-us', timeOptions);

	setTimeout(loop, 1000);
}

document.addEventListener('DOMContentLoaded', function (event) {
	dateElem = document.getElementById('date');
	timeElem = document.getElementById('time');

	loop();
});

},{}]},{},[1])


//# sourceMappingURL=pwctv.js.map
