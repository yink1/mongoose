var mongoose = require('mongoose')
var dbName = 'user'
//mongoose.connect("mongodb://user:pwd@127.0.0.1:27017/test");
mongoose.connect('mongodb://localhost/' + dbName, { useNewUrlParser: true }, (err) => {
    if (err) {
        console.log('连接shi败' + err)
    } else {
        console.log('连接成功')
    }
})

var db = mongoose.connection;
// db.once('open', () => { console.log('user数据库连接成功') })
/* var ExampleSchema = new Schema({
  name:String,
  binary:Buffer,
  living:Boolean,
  updated:Date,
  age:Number,
  mixed:Schema.Types.Mixed, //该混合类型等同于nested
  _id:Schema.Types.ObjectId,  //主键
  _fk:Schema.Types.ObjectId,  //外键
  array:[],
  arrOfString:[String],
  arrOfNumber:[Number],
  arrOfDate:[Date],
  arrOfBuffer:[Buffer],
  arrOfBoolean:[Boolean],
  arrOfMixed:[Schema.Types.Mixed],
  arrOfObjectId:[Schema.Types.ObjectId]
  nested:{
    stuff:String,
  }
}); */
var userStyle = new mongoose.Schema({
    name: String,
    age: Number,
    tel: String,
    car: Array
})
var UserInfoed = mongoose.model('UserInfoName', userStyle)   //创建UserInfoNames表    +s






/* 增 create insertMany new*/

/*
1. UserInfoed.create(        //
    {
        name: 'yi',
        age: 33,
        tel: '15859071331',
        car: []
    }, function (err, doc) {
        if (err) { console.log(err) }
        console.log(doc)
    }
)

2.var silence = new UserInfoed({ name: 'Silence' })       silence.save(function(err,doc){})

silence.save(function (err, doc) {
    if (err) { console.log(err) }
    console.log(22, doc)
})

3.  UserInfoed.insertMany([{name:'xmgdty'},{name:'小马哥的天涯'}],function(err,docs){
                    console.log(docs);
                })

*/




/* 改   1.Model.update(conditions, doc, [options], [callback])
        2.Model.updateMany(conditions, doc, [options], [callback])
        3.Model.updateOne(conditions, doc, [options], [callback])
/*
//    update 只更新第一个   相当于updateOne
/*

//通过Model上的update()来修改数据
//Model.update(conditions, doc, [options], [callback])
//第一个参数conditions为查询条件，第二个参数doc为需要修改的数据，第三个参数options为控制选项，第四个参数是回调函数
        var mongoose = require('mongoose')
        mongoose.connect('mongodb://127.0.0.1:27017/vue-admin',function(err){
            if(err){
                console.log('数据库连接失败')
            }else{
                //数据库连接成功
                var schema = new mongoose.Schema({name:String,age:Number});
                var manModel = mongoose.Model('manModel',schema);
                //现在使用update()方法查询name为xmgdty，并将其name更改为小马哥的天涯
                manModel.update({name:'xmgdty'},{name:'小马哥的天涯'},function(err,raw){
                    console.log(raw);
                    //{ n: 1, nModified: 1, ok: 1 }
                })
            }
        })


                UserInfoed.updateMany({ name: 'er' }, { name: 'yi' }, function (err, doc) {
                    if (err) console.log(err)
                    console.log(doc)
                })

*/





/* 删   1.Model.remove(conditions, [callback])
        2.Model.deleteOne(conditions, [callback])
        3.doc.remove([callback])*/
/*
    1.UserInfoed.remove(function(err){
                   //删除所有数据
                })

    2. UserInfoed.deleteOne({name:'xmgdty'},function(err){
                   //删除符合条件的第一个数据
                })
    3.UserInfoed.find({name:'xmgdty'},function(err,docs){
                    docs.forEach((item,index)=>{
                        item.remove(function(err,doc){
                            //{ _id: 8571f93be6f98ec60e3dc66c, name: 'xmgdty', age:18 }
                            //{ _id: 8571f93be6f98ec60e3dc66e, name: 'xmgdty1', age:18 }
                            console.log(doc);
                        })
                    })
                })

*/





/* 查   1.Model.find(conditions, [projection], [options], [callback])
        2.Model.findById(id, [projection], [options], [callback])
        3.Model.findOne(conditions, [projection], [options], [callback])

*/
// https://blog.csdn.net/weixin_41296616/article/details/100656263

/* UserInfoed.find(
    function (err, docs) {
        console.log(docs);
    }
) */

/*
    1.UserInfoed.find(function(err,docs){
                    console.log(docs);
                })
    2.var mongoose = require('mongoose')
        mongoose.connect('mongodb://127.0.0.1:27017/vue-admin',function(err){
            if(err){
                console.log('数据库连接失败')
            }else{
                //数据库连接成功
                var schema = new mongoose.Schema({name:String,age:Number});
                var UserInfoed = mongoose.Model('manModel',schema);
                var arrID = [];
               UserInfoed.find(function(err,docs){
                    docs.forEach((item,index)=>{
                        arrID.push(item._id);
                    })
                   UserInfoed.findById(arrID[0],function(err,doc){
                        console.log(doc);
                    })
                })
            }
        })
    3.UserInfoed.findOne(function(err,doc){
                    console.log(doc);
                })

*/

// push/pop/shift/unshift/slice/splice/join/foreach/map/find/every/indexof/includes/filter/some/concat/findIndex/reverse/toString