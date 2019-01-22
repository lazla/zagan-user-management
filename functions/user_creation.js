const {User} = require('../db/models');

function createUser(req,res) {

    let input = req.body;

    let username = input.username;
    let password = input.password;
    let name = input.name;
    let email = input.email;
    let phone = input.phone;
    let location = input.location;
    let mac = input.mac;

    let user = new User({
        username : username,
        password : password,
        name : name,
        email : email,
        phone : phone,
        location : location,
        mac : mac
    });

    user.save().then((user) => {
        res.status(200).send(user);
    }, (err) => {
        res.status(400).send(err);
    });
}
module.exports = {createUser};