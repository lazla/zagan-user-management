const {User} = require('../db/models');

function createUser(req,res) {

    let input = req.body;
    let username = input.username;
    let password = input.password;
    let email = input.email;
    let phone = input.phone;

    let user = new User({
        username : username,
        password : password,
        email : email,
        phone : phone
    });

    user.save().then((user) => {
        res.status(200).send(user);
    }, (err) => {
        res.status(400).send(err);
    });
}
module.exports = {createUser};