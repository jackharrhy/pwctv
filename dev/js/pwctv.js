(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function switchContainer(toSwitchTo) {
	$(current.main).fadeOut(1000);
	$(toSwitchTo.main).fadeIn(1000);

	toSwitchTo.initial();
	current = toSwitchTo;
}

var container, current;

document.addEventListener('DOMContentLoaded', function (event) {
	container = {
		slides: {
			main: document.getElementById('slidesContainer'),
			slide: document.getElementById('slides'),

			footerDate: document.getElementById('footerDate'),
			footerTime: document.getElementById('footerTime'),

			timeOptions: {
				hour: '2-digit',
				minute: '2-digit'
			},

			initial: function () {
				setTimeout(switchContainer.bind(null, container.video), 300000);
			},
			loop: function () {
				var currentDate = new Date();

				this.footerDate.innerHTML = currentDate.toDateString();
				this.footerTime.innerHTML = currentDate.toLocaleTimeString('en-us', this.timeOptions);
			}
		},
		video: {
			main: document.getElementById('videoContainer'),
			video: document.getElementById('video'),

			videos: ['c-cab', 'd-dab'],

			initial: function () {
				this.video.onended = function () {
					console.log('end');
					switchContainer(container.slides);
				};

				this.video.src = 'http://jackharrhy.com/videos/pwctv/' + this.videos[Math.floor(Math.random() * this.videos.length)] + '_PWCTV.mp4';
			},
			loop: function () {
				// None
			}
		}
	};

	current = container.slides;

	current.initial();
	loop();
	realtimeLoop();
});

function realtimeLoop() {
	requestAnimationFrame(loop);
}

function loop() {
	current.loop();
	setTimeout(loop, 1000);
}

setInterval(function () {
	window.location.reload();
}, 800000);

},{}]},{},[1])


//# sourceMappingURL=pwctv.js.map
