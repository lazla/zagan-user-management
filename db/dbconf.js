const db = require('mongoose');

db.Promise = global.Promise;

db.connect(process.env.MONGODB_URI || 'mongodb://localhost/mydb').then(
    () => {console.log('Connection to database established')}
).catch((err) => {
    console.log(err);
});

module.exports = {db};