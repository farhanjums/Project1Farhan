const express = require("express");
const router = express.Router();
var path = require('path')
const bodyParser = require("body-parser");
let multer = require('multer');
let upload = multer();
const mysql = require('mysql2');
const db = require('/views/DbConfig.js');

router.use(express.static("views"));

var con = mysql.createConnection({
  host: db.DB_HOST,
  user: db.DB_USER,
  password: db.DB_PWD,
  database: db.DB_DATABASE
});

router.use(express.json());
router.use(bodyParser.urlencoded({extended:true}));

router.get('/health',(req,res) => {

  res.status(200).send(" Health check success");
});



router.post('/submit',upload.fields([]),(req, res) => {
    if (Object.keys(req.body).length === 0) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        return res.status(400).send('Request body is empty');
      } 
      
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.location('http://localhost:5001/api/feedback')
      console.log(req.body);
      var query1="INSERT INTO `ict2509c` (`ques1`, `ques2`, `ques3`, `name`) VALUES ('"+req.body.Q1+"','"+req.body.Q2+"','"+ req.body.Q3+"','"+ req.body.text+"')";
      console.log(query1);
      con.query(query1,(err,result)=>{
        console.log(result);
      }
      );
      res.status(200).send({apiMessage: 'done'});

});


module.exports = router;
