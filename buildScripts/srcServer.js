import express from 'express'
import path from 'path'
import open from 'open'
import webpack from 'webpack'
import webpackConfig from '../webpack.config.dev'

/* eslint-disable no-console */

let port = 3000;
let app = express();
let compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: webpackConfig.output.publicPath
}));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../src/index.html'));	
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
