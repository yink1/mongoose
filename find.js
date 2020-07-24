require('./mongoose/connect_mongo.js');

var User = require('./mongoose/user.js');

User.find(function (err, docs) {

    if (!err) {

        console.log(docs)

    }

})