const express = require('express')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const path = require('path')
const connectDB = require('./server/database/connection')
const dotenv = require('dotenv')

const app = express()

dotenv.config({path : 'config.env'})

const PORT = process.env.PORT || 8080

app.use(morgan('tiny'))

//MongoDB connection
connectDB()

//parse request to body parser
app.use(bodyparser.urlencoded({extended : true}))

//set views
app.set('view engine' , 'ejs')
app.set('views' , path.resolve(__dirname , 'views'))

//load routers
app.use('/' ,require('./server/routes/router'))

//Load assets(we can use css files without writing full path)
app.use('/css' , express.static(path.resolve(__dirname , 'assets/css')))
app.use('/img' , express.static(path.resolve(__dirname , 'assets/img')))
app.use('/js' , express.static(path.resolve(__dirname , 'assets/js')))

app.listen(PORT , () => {
    console.log(`Server is running on http:localhost:${PORT}`)
})