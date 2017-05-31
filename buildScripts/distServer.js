import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression'

/* eslint-disable no-console */

let port = 3000;
let app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../dist/index.html'));	
});

app.get('/users', function(req, res) {
	res.json([
		{"id": 1, "firstName": "Bob", "lastName": "Smith"},
		{"id": 2, "firstName": "Dick", "lastName": "Tracey"},
		{"id": 3, "firstName": "Harry", "lastName": "Jones"},
	]);
});

app.listen(port, function(err) {
	console.log('express listing on ' + port);
	if(err) {
		console.log(err);
	} else {
		open('http://localhost:' + port)
	}
});
