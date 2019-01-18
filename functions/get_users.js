const {User} = require('../db/models');

function getUsers(req,res) {
    User.find().then((users) => {
        res.status(200).send(users);
    },(err) => {
        res.status(400).send(err);
    });
}
module.exports = {getUsers};