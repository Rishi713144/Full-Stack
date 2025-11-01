
const express = require("express");

const app=express();

app.get("/sum",(req,res =>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a + b;
    res.send (sum.toString());
}));

app.get("/interest",(req, res)=>{
    const principal = parseFloat (req.query.principal);
    const rate = parseFloat (req.query.rate);
    const time = parseFloat (req.query.time);
    const interest = (principal * rate * time) / 100;
    const totalAmount = principal + interest;
    res.send({
        totalAmount: totalAmount,
        interest: interest,
    });
})

app.listen(8080)