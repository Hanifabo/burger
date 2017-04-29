/**
 * Created by hanifa on 4/19/17.
 */
var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');

var app = express();
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, "public")));

app.get('/', function (req, res){
    console.log(" we are here to learn");
    res.sendFile(path.join(__dirname,'./app/public/index.html'));
});

app.listen(3000, function (err) {
    if(err) return console.log("Server couldn't be established 'FAILED' ");
    console.log(" Server is succcessfully up and runing ");
})