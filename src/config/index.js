const mongoose = require("mongoose")

const connectToDB = ()=>{
    const db_url ="mongodb+srv://jobberman:G680m03jZyq4CX7X@cluster0.v75he.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

    mongoose.connect(db_url)
        .then(data => console.log("DB connected successfully"))
        .catch(err => console.log(err))
}

module.exports = connectToDB