const express=require("express");
const fs=require("fs");
const app=express();
app.use(express.static("."));
app.use(express.urlencoded());


app.post("/login",(req,res)=>{
    //fs.readFileSync("users.txt","utf-8")
    fs.readFile("users.txt","utf-8",(err,data)=>{
        let results=JSON.parse(data);
      let resultarray=  results.filter((item)=>{
            if(item.username==req.body.username && item.password==req.body.password)
            return true;
        })
        if(resultarray.length==0)
        res.send("Invalid user/password");
    else
    res.send("Welcome");


    })

})
app.listen(3000,(err)=>{
    console.log("Server Started...");

})
