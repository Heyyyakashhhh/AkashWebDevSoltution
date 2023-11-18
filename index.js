const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 5000;
const viewsPath = path.join(__dirname, "./src/views")
const publicFilePath = path.join(__dirname, "./public")
const User = require('./models/contactSchema')
const db = require('./config/mongoose')

app.use(express.static(publicFilePath));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.set("view engine", "ejs");
app.set("views", viewsPath);

app.get("/", (req, res) => {
    res.render("home")
});

app.get("/contact", (req, res) => {
    res.render("home")
});

// app.get("*" ,(req,res)=>{
//     res.render("error")
// })

app.post("/contact", async (req, res) => {
    try {
         
        const  name = req.body.name;
        const  email = req.body.email
        const  phoneNo = req.body.phoneNo
        const  message= req.body.message
        
        const newUser = new User({
            name: name,
            email: email,
            phoneNo: phoneNo,
            message : message,
        })
    

        const userSave=  await newUser.save()
        res.status(201).render("home")

    } catch (err) {
       res.status(404).render("error")
    }
});

app.listen(port, () => {
    console.log(`Server successfully listening at port ${port}`);
});
