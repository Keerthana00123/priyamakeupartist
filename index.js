const express= require('express');
const app=express();
const cors=require('cors');
const bodyParser = require('body-parser');
 app.use(cors({orgin:'*'}));
 app.listen(3001,()=>{
    console.log('server is running on port 3001')
 });


 app.use(bodyParser.json());

 app.get('/',(req,res)=>{
    res.send('Hello from Server');
 })

 app.get('/users',(req,res)=>{
    const users=[{name:'keerth',age:23},{name:'keerthi',age:24}];
    res.send(users);
 })
 app.post('/login',(req,res)=>{
    console.log(req.body);
    const {email,password}=req.body;
    console.log(email,password);
    if(email==='admin' && password==='admin'){
        res.send({message:'Login successful'});
    }else{
    res.send({message:'Invalid username or password'});
    }
 });