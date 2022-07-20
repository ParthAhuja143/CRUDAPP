const mongoose = require('mongoose')
console.log(this) 
const schema = new mongoose.Schema({
    name : {
        type:String ,
        required : true
    } ,
    email : {
        type : String ,
        required : true ,
        unique : true
    } ,
    gender : {
        type : String
    } ,
    status : {
        type : String
    } 
})

const UserDB = mongoose.model('UserDB' , schema)

module.exports = UserDB