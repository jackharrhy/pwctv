function switchContainer(toSwitchTo, optionalArg) {
	if(current) {
		$(current.main).fadeOut(1000);
	}

	$(toSwitchTo.main).fadeIn(1000);

	if(optionalArg) {
		toSwitchTo.initial(optionalArg);
	} else {
		toSwitchTo.initial();
	}
	current = toSwitchTo;
}

var container, current;

document.addEventListener('DOMContentLoaded', function(event) {
	container = {
		textOverlay: {
			main: document.getElementById('textOverlayContainer'),
			text: document.getElementById('textOverlay'),
			curData: {text:'',time:0},

			initial: function(newData) {
				this.curData = newData;
				this.text.innerHTML = this.curData.text;
				if(this.curData.time > (1000 * 30)) {
					this.curData.time = 1000 * 30;
				}

				setTimeout(this.exit, this.curData.time * 1000);
			},
			exit: function() {
				switchContainer(container.slides);
			},
			loop: function() {
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

			initial: function() {
				setTimeout(this.exit, 30000);
			},
			exit: function() {
				switchContainer(container.video);
			},
			loop: function() {
				var currentDate = new Date();

				this.footerDate.innerHTML = currentDate.toDateString();
				this.footerTime.innerHTML = currentDate.toLocaleTimeString('en-us', this.timeOptions);
			}
		},
		video: {
			main: document.getElementById('videoContainer'),
			video: document.getElementById('video'),
			videos: [
				'donut',
        'keat',
        'bball',
        'grease',
        'will'
			],

			initial: function() {
				this.video.onended = function() {
					switchContainer(container.slides);
				}

				videoString = this.videos[Math.floor(Math.random() * this.videos.length)];
				this.video.src = 'http://jackharrhy.com/videos/pwctv/'+videoString+'.mp4';
			},
			loop: function() {
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

setInterval(function() {
	window.location.reload();
}, 800000);
