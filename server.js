var express = require('express');
var morgan = require('morgan');

var app = express();

//Middleware
app.use(morgan('dev'));

app.get('/', function(req,res){
    var name = 'Nick';
    res.json('My name is ' + name)
});

app.get('/catname', function(req,res){
    res.json('batman')
})

app.listen(3000, function (err) {
    if (err) throw err;
    console.log('Server is Running non port 3000');
});
