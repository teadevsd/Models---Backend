const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    emailAddress: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const User = new mongoose.model("usersinput", userSchema)

module.exports = User;