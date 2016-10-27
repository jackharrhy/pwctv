function switchContainer(toSwitchTo) {
	$(current.main).fadeOut(1000);
	$(toSwitchTo).fadeIn(1000);

	toSwitchTo.initial();
	current = toSwitchTo;
}

var container, current;

document.addEventListener('DOMContentLoaded', function(event) {
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
		
			initial: function() {
				setTimeout(switchContainer(container.video), 1000);
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
				'c-cab',
				'd-dab'
			],

			initial: function() {
				this.video.onended = function() {
					setTimeout(switchContainer(container.slides), 10000);
				}

				this.video.src = 'http://jackharrhy.com/videos/pwctv/'+this.videos[Math.floor(Math.random() * this.videos.length)]+'_PWCTV.mp4';
			},
			loop: function() {
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

