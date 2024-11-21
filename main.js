const express = require("express")
const connectToDB = require ("./src/config");
const userRouter = require("./src/routes/usersroute");

const app = express();
app.use(express.json())
connectToDB()

app.use("/api/v1/users", userRouter)


const port = 8080
app.listen(port, console.log("App is connected to port", port))