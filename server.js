//
const express=require("express");
const path=require("path");
const app=express();
app.use(express.static("."));
app.use(express.urlencoded());

app.get("/getdata",(req,res)=>{
    console.log(req.query);
    res.send("Welcome "+req.query.yourname);
    
    //res.end();
})
app.post("/getdata",(req,res)=>{
    console.log(req.body);

    res.end();
})
// //const server=http.createServer
// //req.url
// //req.method
// //server.listen
app.get("/",(req,res)=>{
    //res.send("Welcome to express js");
    //console.log(path.resolve(__dirname,"./index.html"));
res.sendFile(path.resolve(__dirname,"./home.html"));

    //res.sendFile()
})




app.listen(3000,(err)=>{
    console.log("Server started...");
})


