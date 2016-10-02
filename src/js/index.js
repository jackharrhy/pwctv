var timeOptions = {
	hour: '2-digit', minute: '2-digit'
};

var dateElem;
var timeElem;
var slidesElem;
var playerElem;

var loops = 0;
function loop() {
  loops++;

	var currentDate = new Date();

	dateElem.innerHTML = currentDate.toDateString();
	timeElem.innerHTML = currentDate.toLocaleTimeString('en-us', timeOptions);

  if(0 == (loops % 240)) {
    playVideo();
  } else {
  	setTimeout(loop, 1000);
  }
}

var videos = [
    'c-cab',
    'd-dab'
];

function randomVideoURL() {
  return 'http://jackharrhy.com/videos/pwctv/'+videos[Math.floor(Math.random() * videos.length)]+'_PWCTV.mp4';
}

function playVideo() {
  slidesElem.style.display = 'none';
  playerElem.style.display = 'block';

  playerElem.onended = function() {
    revertToSlides();
  };

  playerElem.src = randomVideoURL();
}

function revertToSlides() {
  slidesElem.style.display = 'block';
  playerElem.style.display = 'none';

  loop();
}

document.addEventListener('DOMContentLoaded', function(event) {
	dateElem = document.getElementById('date');
	timeElem = document.getElementById('time');
  slidesElem = document.getElementById('slides');
  playerElem = document.getElementById('player');

  loop();
});
