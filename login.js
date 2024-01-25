const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3500
const ejs = require('ejs')

app.set('view engine','ejs')

app.use(express.urlencoded({ extended:false}));
app.use(express.json())

app.get('^/$|/login(.html)?',(req,res)=>{
    res.render('login')
})

const username= "Roohi";
const password= "1234";

app.post('/',(req,res)=>{
    const data = {
        name: req.body.username,
        password: req.body.password
    }

    const check = data.name == username ? data.password == password ? true : console.log("invalid Password") : console.log("Invalid Username");
    if ( check ) {
        console.log(data)
        res.render('home',{ user:data.name })
    }
    else{
        console.log("Authentication Failed")
        res.send("Authentication Failed")
    }
    
    
    
})


app.listen(PORT, ()=>{ console.log(`Server running on port ${PORT}`)})
