const express = require("express");
const router = express.Router();
var path = require('path');
const bodyParser = require("body-parser");
let multer = require('multer');
let upload = multer();
let fetch = require('node-fetch');




router.use(express.static("views"));
router.use(express.json());
router.use(bodyParser.urlencoded({extended:true}));

router.get('/home',(req,res) => {

    res.render("../views/home");
})

router.get('/Log-In',(req,res) => {

    res.render("../views/Log-In");
})

router.get('/feedback',(req,res) => {

    res.render("../views/Feedback");
})

router.get('/sucess',(req,res) => {

    res.render("../views/sucess");
})


router.get('/health',(req,res) => {

  res.status(200).send(" Health check success");
});

router.post('/submit',upload.fields([]),(req,res) => {

    const body = req.body;
    var res1='';

    let data1="";
    const test = fetch(process.env.WEB_SERVER_LB, {
	method: 'post',
	body: JSON.stringify(body),
	headers: {'Content-Type': 'application/json'}
    })  .then(function (a) {
        return a.json(); // call the json method on the response to get JSON
    })
        .then(function (json) {
        console.log("AppServer: " + json.apiMessage);

        if (json.apiMessage == "done"){
            res.status(200);
            res.redirect('/api/sucess');
        }
        
    })
    



});





module.exports = router;

