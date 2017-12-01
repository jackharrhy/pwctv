var express = require('express');

var winston = require('winston');
var dateFormat = require('dateformat');

var date = new Date();

winston.add(winston.transports.File, {
	filename: './logs/' + dateFormat(date, 'isoDateTime') + '.log'
});

winston.info('starting');

var app = express();

function logger(req, res, next) {
	winston.info('request');

	next();
}
app.use(logger);

app.use(express.static('../client/dist/'));

app.listen(1959, function() {
	winston.info('started');
});
