const mongoose = require('mongoose')

const MongoURI = 'mongodb+srv://parth:parth@cluster0.hiyvx.mongodb.net/?retryWrites=true&w=majority'

const connectDB = async () => {
    try{
       const con = await mongoose.connect(MongoURI , {
           useNewUrlParser : true , 
           useUnifiedTopology : true ,
           useFindAndModify :false ,
           useCreateIndex : true 
       })

       console.log('MongoDB connected' , con.connection.host)
    }catch(err){
    console.log(err)
    process.exit(1)
    }
}

module.exports = connectDB