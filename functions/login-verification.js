const {User} = require('../db/models');
const encryptor = require('./encryptor');

function verify(req,res) {
    res.setHeader('Content-Type', 'application/json');
    let uname = req.body.username;
    let pass = req.body.password;
    let response = {"verified" : false};

    User.find({username:uname}).then((result) => {
        if(result.length !== 0) {
            let hash = result[0].password;
            encryptor.decode(pass,hash,(r) => {
                if(r===true) {
                    response = {"verified" : true};
                    res.status(200).send(response);
                }
                else {
                    res.status(200).send(response);
                }
            });
        }
        else {
            res.status(404).send('User not found');
        }
    },(err) => {
        res.status(400).send(err);
    });
}

module.exports = {verify};