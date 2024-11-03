 const express = require('express');
 const app = express();
 
 //load config from env file
 require('dotenv').config();

 const PORT = process.env.PORT || 5000;

//middleware to parse json request body
app.use(express.json());

//import routes for TODO API
const todoRoutes = require("./routes/todos")
app.use("api/v1", todoRoutes);

//start Server
app.listen(PORT, () => {
    console.log(`Server Started Successfully at ${PORT}`);
})

//connect to Database
const dbConnect = require("./config/database");
dbConnect();

//default Route
app.get("/", (req, res) => {
    res.send(`<h1>This is HOMEPAGE baby</h1>`)
})
