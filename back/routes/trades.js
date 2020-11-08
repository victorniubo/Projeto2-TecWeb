// var express = require('express');
// var router = express.Router();


// // Get all trades from all users
// router.get('/alltrades', function(req, res){
//     var db = require('../db');
//     var Users = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
//     Users.find({}).lean().exec(
//       function(e, docs){
//         // res.render('userlist', {'userlist': docs});''
//         // var results = docs.filter(function(docs){
//         //   return docs.username == 'henrique';
//         // })
//         // console.log(results)
//         var resultados = docs;
//         res.json(docs);
//       }
//     );
//   });
  
  
//   // add a trade
//   router.get('/', function(req, res){
//     res.render('newTrade', {title: 'Add trade'})
//   });
  
//   router.post('/', function(req, res){
//     var db = require('../db');
//     var userName = req.body.username;
//     var coin = req.body.coin;
//     var type = req.body.type;
//     var price = req.body.price;
//     var amount = req.body.amount;
  
//     var Users = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
  
//     var user = new Users({username: userName, coin:coin, type:type, price:price, amount:amount});
//     user.save(function (err){
//       if (err){
//         console.log(err.message);
//         return err;
//       }
//       else{
//         console.log("trade saved");
//         res.redirect("/alltrades");
//       }
//     })
  
  
//   })
  
  
//   // Deleta Trade
//   router.delete('/:id', function (req, res, next) {
//     var db = require('../db');
//     var User = db.Mongoose.model('usercolletction', db.UserSchema, 'usercollection');
//     User.find({ _id: req.params.id }).remove(function (err, doc) {
//       if (err) {
//         res.status(500).json({ error: err.message });
//         res.end();
//         return;
//       }
//       res.json({ success: true });
//       res.end();
//     });
//   });
  
//   // Get all trades from a user
//   router.get('/:username', function(req, res){
//     var db = require('../db');
//     var Users = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
//     Users.find({username: req.params.username}).lean().exec(
//       function(e, docs){
//         // res.render('userlist', {'userlist': docs});
//         res.json(docs);
//       }
//     );
//   });
//   module.exports = router;  