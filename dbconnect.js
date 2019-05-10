const mongoose=require('mongoose')
// require('dotenv').config()


mongoose.connect(`mongodb://localhost/${process.env.dbName}`, {
    useNewUrlParser: true,
}).then(res=>console.log(`Mongodb connected to database ${process.env.dbName}`))
.catch(e=>console.log('Database disconnected'))

