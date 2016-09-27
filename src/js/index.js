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

document.addEventListener('DOMContentLoaded', function(event) {
	dateElem = document.getElementById('date');
	timeElem = document.getElementById('time');

	loop();
});
