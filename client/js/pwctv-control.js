var socket = io({ path: '/pwctv/server/socket.io' });

document.querySelector("#textOverlayForm").addEventListener("submit", function(e) {
	socket.emit('textOverlayUpdate',e.srcElement[0].value,e.srcElement[1].value);
	e.preventDefault();
});
