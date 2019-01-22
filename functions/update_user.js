const {User} = require('../db/models');

function updateUser(req,res) {
    User.find({username : req.params.username}).then((users) => {
        if(users.length === 0) {
            res.status(404).send('User not found');
        }
        else {
            let user = users[0];
            if(req.body.hasOwnProperty('username')) {
                user.username = req.body.username;
            }
            if(req.body.hasOwnProperty('password')) {
                user.password = req.body.password;
            }
            if(req.body.hasOwnProperty('name')) {
                user.name = req.body.name;
            }
            if(req.body.hasOwnProperty('email')) {
                user.email = req.body.email;
            }
            if(req.body.hasOwnProperty('phone')) {
                user.phone = req.body.phone;
            }
            if(req.body.hasOwnProperty('location')) {
                user.location = req.body.location;
            }
            if(req.body.hasOwnProperty('mac')) {
                user.mac = req.body.mac;
            }
            user.save().then((user) => {
                res.status(200).send(user);
            },(err) => {
                res.status(400).send(err);
            });
        }
    },(err) => {
        res.status(400).send(err);
    });
}

module.exports = {updateUser};