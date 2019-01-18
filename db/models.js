const {db} = require('./dbconf');
const encryptor = require('../functions/encryptor');

let userSchema = new db.Schema({
    username : {
        type : String,
        required : true,
        trim : true,
        min : 1,
        unique: true
    },
    password : {
        type : String,
        required : true,
        trim : true,
        min : 1
    },
    email : {
        type : String,
        required : true,
        trim : true,
        min : 1,
        unique : true
    },
    phone : {
        type : Number,
        required : true,
        trim : true,
        min : 10
    }
});

userSchema.pre('save',function(next) {
    let user = this;
    if(user.isModified('password')) {
        encryptor.encrypt(user.password,(err,hash) => {
            if(!err) {
                user.password = hash;
            }
            next();
        });
    } else {
        next();
    }
});

let User = db.model('User',userSchema);

module.exports = {User};