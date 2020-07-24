//对应的是dbName 数据库 下的 users表 
var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var userSchema = new Schema({

    name: String,

    age: Number,

    gender: {

        type: String,

        default: 'female'

    },

})



var userSchema = mongoose.model('userinfoname', userSchema);



module.exports = userSchema;   //(直接导出模型对象  这是一种方式 模块化引用方便 引入的时候 require('user.js') )

//exports.model = userSchema;// (这也是导出  只是导出对象的属性（model）   引入的时候  require('user.js').model)
