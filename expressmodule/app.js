var express =  require('express');
var app = express();

app.route('/Node').get(function(req,res)
{
    res.send("Tutorial on Node");
});

app.get('/',function(req,res){
    res.send('hello world');
});



var server = app.listen(3000,function(){});