const express = require('express');
const bodyparser = require('body-parser');

const {createUser} = require('./functions/user_creation');
const {getUsers} = require('./functions/get_users');
const {getUsername} = require('./functions/get_username');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

app.use(bodyparser.json());

app.get('/',(req,res) => {
   res.sendFile(`${__dirname}/public/home.html`)
});

app.post('/new', (req,res) => {
    createUser(req,res);
});

app.get('/users', (req,res) => {
    getUsers(req,res);
});

app.get('/users/:name', (req,res) => {
    getUsername(req,res);
});

app.listen(port,() => {
    console.log(`Server started on port ${port}`);
});