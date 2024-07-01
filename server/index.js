const http = require("http");
const fs = require("fs");


const myserver = http.createServer((req,res)=>{
    const log = `${Date.now()} ${req.url}:New request received\n`;

    fs.appendFile("log.txt",log,(err,data)=>{
        switch(req.url){
            case '/': res.end("Homepage");
            break;
            case '/about' : res.end("Hi, I am Samarth")
            break;
            default: res.end("404 Not Found");
        }
    })
    
});


myserver.listen(8000,()=>{
    console.log("SERVER STARTED!!");
})
