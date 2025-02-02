var express = require('express');
const app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

//Routes
const TaskRoute = require("./routes/task");
const UserRoute = require("./routes/user")
const Authroute = require("./routes/auth")


//Database connection 
const { connectDB } = require("./config/db");
//Starting the application
const PORT = process.env.PORT || 8000;

// mongoose.connect(`${process.env.MongoDB_URL}`)
//     .then(()=>console.log("Database connected successfully"))
//     .catch((err)=>console.log("Database connection failed", err));


connectDB();
app.listen(PORT,() => {
    console.log(`app is running at ${PORT}`)
})


//Middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//Calling the routes
app.use("/api", Authroute)
app.use("/tasks", TaskRoute)