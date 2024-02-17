const express = require('express')
const server = express()
const nunjucks = require('nunjucks')
const videos= require ('./data');


server.use(express.static('public'))
server.set ("view engine","njk")
nunjucks.configure ("views",{
    express:server
})
server.listen (5000,function(){
    console.log("hello wolrd!!!")
    server.get("/", function(req,res){
        return res.render ("index")
    })

    server.get("/videos",function (req,res){
return res.render("videos",{items:videos});
    })
})