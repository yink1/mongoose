// connect_mongo.js  (数据库连接  模块化 便于其他模块引用 可以通过 require('connect_mongo.js ')引入该模块)

var mongoose = require('mongoose');
var dbName = 'user';

mongoose.connect('mongodb://127.0.0.1/' + dbName); //, { useMongoClient: true }

//监听下 open  看数据库是否连接成功  （这一步 不是必须的 ）

mongoose.connection.once('open', function () {

    console.log('数据库连接成功')

})