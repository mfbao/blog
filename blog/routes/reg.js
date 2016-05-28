var express = require('express');
var router = express.Router();
var User = require('../models/user.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
   res.render('reg', { title: '用户注册' });
});
router.post('/', function (req, res) {
  var name = req.body.name;
  var pwd = req.body.password;
  var newUser = new User({
    name: name,
    password: pwd
  });
  newUser.save(function (err, user) {
    //相关操作，写入session
    res.send(user);
  });
});

router.post("/",function(req, res){
						 if(req.body.password-repeat!=req.body.password)
						 {req.flash("error","两次输入的口令不一致"); return res.redirect("/reg");}
						
						 });

module.exports = router;
