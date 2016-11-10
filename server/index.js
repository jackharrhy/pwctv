var app = require('http').createServer(handler);
var io = require('socket.io')(app);

app.listen(1959);

function handler(req, res) {
	res.writeHead(200);
	res.end('pwctv-server');
}

io.on('connection', function (socket) {
	socket.emit('news', { hello: 'world' });
	socket.on('my other event', function(data) {
		console.log(data);
	});
});
