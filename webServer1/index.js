const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();
const ejs = require('ejs');
const bodyParser = require("body-parser");

app.use(express.json());
app.set('view engine', 'ejs');

app.use("/api", require("./routes/routes"));


app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});

app.use(bodyParser.urlencoded({extended:true}));