const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();
const ejs = require('ejs');

app.set('view engine', 'ejs');

app.use("/api", require("./routes/routes"));


app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});