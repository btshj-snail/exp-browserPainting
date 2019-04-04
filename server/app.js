'use strict'

var http = require('http');
var url = require('url');

var processRequest = require('./server');

var httpServer =  http.createServer((req,res)=>{
    var requestUrl = req.url;
    if(!!~requestUrl.indexOf('bootstrap.min.js')){
        setTimeout(()=>{
            processRequest(req,res);
        },2000)
    }else{
        processRequest(req,res);
    }
   
})

var port = 9001;

httpServer.listen(port,()=>{
    console.log(`app is running at port:${port}`);
})

