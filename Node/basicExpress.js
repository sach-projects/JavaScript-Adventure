const express = require('express')

const app = express();

app.listen(9003);

app.get("/",function(req,res){
    res.send("Hi Alien");
})

//Using params(alien/20)
app.get('/alien/:id',function(req,res){
    var id = req.params.id;
    res.send(`Hi ${id} , Welcome back`);
})

//Using query(alien/?id=20) 
app.get("/alien",function(req,res){
    const id = req.query.id;
    res.send(`Hi ${id} , Welcome back`);
})