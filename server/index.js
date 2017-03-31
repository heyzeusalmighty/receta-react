let express = require('express');
let path = require('path');
var bodyParser = require('body-parser');
var config = require('./config/config');

var app = express();
app.set('port', (process.env.PORT || 9000));

app.use('/', express.static(__dirname + '/../../dist'));
app.use('/', express.static(__dirname + '/../public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var mongoose = require('mongoose');
console.log('DB_ADDRESS', config.DB_ADDRESS)
mongoose.connect(config.DB_ADDRESS);
var db = mongoose.connection;
mongoose.Promise = global.Promise;

require('./api')(app);



module.exports = app;
