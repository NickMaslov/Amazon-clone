var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var ejsMate = require('ejs-mate');


var app = express();

mongoose.connect('mongodb://root:abc123@ds111963.mlab.com:11963/amazonclone', function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to the database');
    }
});

//Middleware
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');

var mainRoutes = require('./routes/main');
var userRoutes = require('./routes/user');
app.use(mainRoutes); //app.use('/',mainRoutes);
app.use(userRoutes);


app.listen(3000, function (err) {
    if (err) throw err;
    console.log('Server is Running non port 3000');
});