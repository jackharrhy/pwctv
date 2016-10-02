(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

  if (0 == loops % 240) {
    playVideo();
  } else {
    setTimeout(loop, 1000);
  }
}

var videos = ['c-cab', 'd-dab'];

function randomVideoURL() {
  return 'http://jackharrhy.com/videos/pwctv/' + videos[Math.floor(Math.random() * videos.length)] + '_PWCTV.mp4';
}

function playVideo() {
  slidesElem.style.display = 'none';
  playerElem.style.display = 'block';

  playerElem.onended = function () {
    revertToSlides();
  };

  playerElem.src = randomVideoURL();
}

function revertToSlides() {
  slidesElem.style.display = 'block';
  playerElem.style.display = 'none';

  loop();
}

document.addEventListener('DOMContentLoaded', function (event) {
  dateElem = document.getElementById('date');
  timeElem = document.getElementById('time');
  slidesElem = document.getElementById('slides');
  playerElem = document.getElementById('player');

  loop();
});

},{}]},{},[1])


//# sourceMappingURL=pwctv.js.map
