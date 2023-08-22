//
const express=require("express");
const path=require("path");
const app=express();
app.use(express.static("."));

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


