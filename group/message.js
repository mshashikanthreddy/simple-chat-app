const fs = require('fs');

const express = require('express');

const router = express.Router();

router.get('/',(req,res,next) => {

        let msg = fs.readFileSync("./chat.txt", "utf-8");
        console.log(msg);
        if (msg === "") {
          msg = "Let's chat";
        }
        
    res.send(`<form onSubmit=document.getElementById("username").value=localStorage.getItem("username") 
    action="/" method="POST"><h1>${msg}</h1>
    <input type="text" name="chat">
    <input type='hidden' name='username' id='username'>
    <button type="submit">SEND</button>
    </form>`)
    })


router.post('/',(req,res,next) => {
    const data = req.body.chat;
    const user = req.body.username;
    const message = user + ":" + data ;
    fs.appendFile('./chat.txt', ` ${message}` ,(err) => {
        if(err)
        {
            console.log(err);
        }
    })
    res.redirect('/');  
})


module.exports = router;