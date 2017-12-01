var readlineSync = require('readline-sync');
var secretKey = readlineSync.question('What\'s the secret password?');

var express = require('express');
var app = express();

var Gun = require('gun');
var gun = Gun();

gun.wsp(app, function(req, res, next) {
	for (var property in req.body) {
    if(req.body.hasOwnProperty(property)) {
			if(req.body[property].secretKey === secretKey) {
				next(req, res);
			}
    }
	}
});

var textOverlay = gun.get('textOverlay');

textOverlay.on(function(update) {
	console.log('textOverlay: ', update);
});

app.listen(1959);
