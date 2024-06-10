const mongoose = require('mongoose')
const app = require('./app')

mongoose
    .connect("mongodb://localhost:27017/express-mongodb-intro")  //return promise
    .then(()=>{
        app.listen(3001, ()=>{
             console.log('MONGO DB CONNECTED')
             console.log('Server started on port 3001')
        })
    }).catch(error =>{
        console.log(error)
    })
