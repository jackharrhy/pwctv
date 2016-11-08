var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.get('/', function(req, res) {
	res.render('index');
});
app.get('/control', function(req, res) {
	res.render('control');
});

app.use('/static', express.static(__dirname + '/static/'));

var io = require('socket.io').listen(app.listen(4000, function() {
}));

io.sockets.on('connection', function(socket) {
	console.log('[=] Socket "' + socket.handshake.headers.host + '" connected');

	socket.on('control', function(thingToDo) {
    io.emit('update', thingToDo);
	});
});
