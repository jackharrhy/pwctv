(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var socket = io({ path: '/pwctv/server' });

function switchContainer(toSwitchTo, optionalArg) {
	if (current) {
		$(current.main).fadeOut(1000);
	}

	$(toSwitchTo.main).fadeIn(1000);

	if (optionalArg) {
		toSwitchTo.initial(optionalArg);
	} else {
		toSwitchTo.initial();
	}
	current = toSwitchTo;
}

var container, current;

socket.on('textAlert', function (data) {
	switchContainer(container.textOverlay);
});

document.addEventListener('DOMContentLoaded', function (event) {
	container = {
		textOverlay: {
			main: document.getElementById('textOverlayContainer'),
			text: document.getElementById('textOverlay'),

			curData: '',

			initial: function (newData) {
				this.curData = newData;
				this.text.innerHTML = this.curData.text;

				setTimeout(switchContainer.bind(null, container.slides), this.curData.returnTime);
			},
			loop: function () {
				// nothing...
			}
		},
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
				setTimeout(switchContainer.bind(null, container.video), 3000);
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
				setTimeout(switchContainer.bind(null, container.slides), 3000);

				this.video.src = 'http://jackharrhy.com/videos/pwctv/' + this.videos[Math.floor(Math.random() * this.videos.length)] + '_PWCTV.mp4';
			},
			loop: function () {
				// None
			}
		}
	};

	switchContainer(container.slides);
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


//# sourceMappingURL=pwctv-control.js.map
