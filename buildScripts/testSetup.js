//this file is not transpiled so much use common JS

//register babel to transpile before tests run
require('babel-register')();



//disable webpack features that mocha doesn't understand
require.extensions['.css'] = function() {};