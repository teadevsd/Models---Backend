const express = require("express")
const userService = require("../services/userservice")

const userRouter = express.Router()

userRouter.get("/", (req, res)=>{
    res.send("Welcome to the user router")
})

userRouter.post("/signup", userService().SignUserUp)

module.exports = userRouter