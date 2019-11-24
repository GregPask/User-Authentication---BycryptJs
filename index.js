const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const bycrypt = require("bcryptjs");

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



// Users 

const users = [
    {
        name: "Greg",
        password: "hello123"
    }
]


// GET ALL CURRENT USERS
app.get("/users", (req,res) => {
    res.send(users);
})



// POST A NEW USER & GENERATE HASHED PASSWORD
app.post("/users", async (req,res) => {

    try {
        console.log("trying salt", req.body.name, req.body.password);
        const hashedPassword = await bycrypt.hash(req.body.password,10);
        console.log(hashedPassword);

        const name = req.body.name;
        const password = hashedPassword;
    
        users.push({name: name,password,})
        res.status(200).send({message : "User Successfully Added!!"});
    } catch{
        res.status(500).send("500 ERROR")
    }
});



// LOGIN - CHECK IF USER EXISTS THEN COMPARE PASSWORD TO LOGIN...
app.post("/login", async (req,res) => {

    let user = users.find((user) => user.name === req.body.name);
    console.log(user);
    if(!user){
       return res.status(400).send("Cannot Find user")
    } 

    try {
        if(await bycrypt.compare(req.body.password,user.password)){
            res.send("USER LOGGED IN!");
        } else {
            res.send("NOT allowed");
        }
    } catch {
        res.status(500).send("500 ERROR");
    }
})




app.listen(5000, () => {
    console.log("Server running on port 5000!");
});