const express = require('express');

const fs = require('fs');

const router = express.Router();

router.get('/login/',(req,res,next) => {
    res.send(`<form onSubmit="localStorage.setItem('username', document.getElementById('username').value)" action='/login/' method="POST">Username:
    <input type="text" name="title" id="username">
    <button type="submit">LOGIN</button>
    </form>`)
})

router.post('/login/',(req,res,next) => {

   res.redirect('/')
})

module.exports = router;