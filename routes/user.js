const express = require("express");
const pool = require("../pool.js");
let router = express.Router();

router.get("/getCargoInfo",function(req,res){
  pool.query("select * from cargo_info",function(err,result){
    if(err) throw err;
    //if(result.length>0){
      res.send(result);
    // }else{
    //   res.send("0");
    // }
  });
});

router.get("/login/:uname&:upwd&:utype",function(req,res){
 
  pool.query("select * from user_info where phone = ? and pwd = ? and type = ?",[req.params.uname,req.params.upwd,req.params.utype],function(err,result){
    if(err) throw err;
    if(result.length>0){
      res.send(result);
    }else{
      res.send("0");
    }
  });
});

router.post("/register_woseek",(req,res)=>{
  var obj = {};
  obj.id = "";
  obj.name = "";
  obj.pwd = req.body.pwd;
  obj.phone = req.body.phone;
  obj.email = "";
  obj.type = req.body.type;
  pool.query("insert into user_info set ?",[obj],(err,result)=>{
    if(err) throw err;
    if(result.affectedRows>0){
      res.send("1");
    }else{
      res.send("0");
    }
  });
});

module.exports = router;