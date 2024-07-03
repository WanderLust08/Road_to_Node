const express = require("express")
const fs = require("fs")
const users = require("./MOCK_DATA.json")

const app = express();
const PORT = 8000;

//Middeware - PLUGIN
app.use(express.urlencoded({extended:false}))

//Routes
app.get('/users',(req,res)=>{
    const html = `
    <ul>
    ${users.map((x)=>`<li>${x.first_name}</li>`).join("")}
    </ul>
    `
    res.send(html);
})


//Rest API
app.get('/api/users',(req,res)=>{
    return res.json(users);
})


app.route('/api/users/:id').get((req,res)=>{
    const id = Number(req.params.id);
    console.log(id)
    const user = users.find((x)=>x.id===id);
    console.log(user)
    return res.json(user);
}).patch((req,res)=>{
    return res.json({status:"PENDING"})
}).delete((req,res)=>{
    res.json({status:"PENDING"})
})


// app.get('/api/users/:id',(req,res)=>{
//     const id = Number(req.params.id);
//     console.log(id)
//     const user = users.find((x)=>x.id===id);
//     console.log(user)
//     return res.json(user);
// })


app.post('/api/users',(req,res)=>{
    const body = req.body;
    // console.log(body);

    users.push({...body,id:users.length + 1});
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
        return res.json({status:"PENDING"})
    })
    
})

// app.delete('/api/users/:id',(req,res)=>{
//     res.json({status:"PENDING"})
// })

// app.patch('/api/users',(req,res)=>{
//     res.json({status:"PENDING"})
// })






app.listen(PORT,()=>{
    console.log(`SERVER STARTED AT ${PORT}`)
})
