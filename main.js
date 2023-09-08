const express = require('express');

const server = express();

const bodyParser = require('body-parser');

const loginRoutes = require('./group/loginuser');

const chatRoutes = require('./group/message');

server.use(bodyParser.urlencoded({extended:true}));

server.use(loginRoutes);

server.use(chatRoutes);

server.use((req,res,next) => {

    res.status(404).send('<h1>Page Not Found</h1>');
    
})


server.listen(3000);
