// var express = require('express');
// var router = express.Router();


// router.get('/:username', function(req, res){
//     var db = require('../db');
//     var Users = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
//     var port = {
//       BTC:0,
//       ETH:0,
//       LTC:0,
//       BCH:0,
//       XRP:0,
//       Real:0,
//       Total:0
//     };
//     Users.find({username: req.params.username}).lean().exec(
//       function(e, docs){
//         docs.forEach(element => {
//           if(element.type == 'buy'){
//             port[element.coin] += element.amount;
//             port['Total'] += element.amount * element.price;
//             // port['Real'] -= element.amount * element.price;
//           }
//           else{
//             port[element.coin] -= element.amount;
//             port['Total'] -= element.amount * element.price;
//             port['Real'] += element.amount * element.price;
//           }
//         });
//         res.json(port);
  
//       });
//   });
  
  
//   module.exports = router;
  