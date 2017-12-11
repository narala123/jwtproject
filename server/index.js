/**
 * Created by nikhi on 12/11/2017.
 */
/**
 * Created by nikhi on 12/11/2017.
 */
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
//var cors = require('cors');

var app =  express();
//app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static(__dirname+'/public'));
app.get('/',function(req,res){
    res.sendfile(__dirname+'/public/index.html');
});

mongoose.connect('mongodb://127.0.0.1/angularPractice',function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log('database connected successfully');
    }

})

app.listen('3000',function(err,result){
    if(err){
        console.log(err);
    }else{

        console.log('server listen at port 3000');
    }
});