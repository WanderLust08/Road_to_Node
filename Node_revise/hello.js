const math = require("./math");
console.log("ANSWER IS",math.subFn(4,2));


// #################################################

const fs = require("fs");

// Sync => Blocking Operation
// fs.writeFileSync("./test.txt","HELLO SAM");

// fs.appendFileSync("./test.txt","\nMY NAME IS DECODER")

console.log(1)
// Sync => Blocking Operation
// const res = fs.readFileSync("./test.txt","utf-8");
// console.log(res);



// Async => NOn-Blocking Operation
fs.readFile("./test.txt","utf-8",(err,res)=>{
    if(err){
        console.log(err);
    }else{
        console.log(res);
    }
});

console.log(2)
console.log(3)

