import express from 'express'
import path from 'path'
import open from 'open'
import webpack from 'webpack'
import webpackConfig from '../webpack.config.dev'

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

app.listen(port, function(err) {
	console.log('express listing on ' + port);
	if(err) {
		console.log(err);
	} else {
		open('http://localhost:' + port)
	}
});
