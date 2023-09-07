const express=require("express");
const fs=require("fs");
const app=express();
const cookieparser=require("cookie-parser");
const session=require("express-session");
const path =require("path");
app.use(express.static("."));
app.use(express.urlencoded());
app.use(cookieparser());
const oneday=60*60*24*1000;

app.use(session({
    saveUninitialized:true,
    resave:false,
    secret:'sdfs@#$df4%121',
    cookie:{maxAge:oneday}


}))
app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"./login.html"));
})
app.get("/dashboard",(req,res)=>{
    if(req.session.username)
    res.sendFile(path.join(__dirname,"./dashboard.html"));
    else
    res.redirect("/login");


})

app.post("/login",(req,res)=>{
    //fs.readFileSync("users.txt","utf-8")8
    fs.readFile("users.txt","utf-8",(err,data)=>{
        let results=JSON.parse(data);
      let resultarray=  results.filter((item)=>{
            if(item.username==req.body.username && item.password==req.body.password)
            return true;
        })
        if(resultarray.length==0)
        res.send("Invalid user/password");
    else
    {
        req.session.username=req.body.username;

    res.redirect("/dashboard");
    }



    })

})
app.get("/logout",(req,res)=>{
    req.session.destroy();
    res.redirect("/login");
    
})
app.listen(3000,(err)=>{
    console.log("Server Started...");

})
