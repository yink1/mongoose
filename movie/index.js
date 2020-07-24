//引入mongoose数据库驱动
const mongoose = require('mongoose');
//设置连接位置
mongoose.connect('mongodb://localhost/user', { useNewUrlParser: true });
const db = mongoose.connection;
//引入MovieSchema
const Movie = require('../movie/movie.js')
//监听连接消息
db.on('error', console.log);
//手动连接一次，回调函数打印success
db.once('open', () => {
    let movie = new Movie({ title: '齐天大圣' });
    movie.save(function (err) {
        if (err) console.log(err)
    })
    console.log("success2!");
});