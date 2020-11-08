var express = require('express');
// const { use } = require('../../../projetoNEM/routes');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Get all trades from all users
router.get('/alltrades', function(req, res){
  var db = require('../db');
  var Users = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
  Users.find({}).lean().exec(
    function(e, docs){
      // res.render('userlist', {'userlist': docs});''
      // var results = docs.filter(function(docs){
      //   return docs.username == 'henrique';
      // })
      // console.log(results)
      var resultados = docs;
      res.json(docs);
    }
  );
});


// add a trade
router.get('/addTrade', function(req, res){
  res.render('newTrade', {title: 'Add trade'})
});

router.post('/addTrade', function(req, res){
  var db = require('../db');
  var userName = req.body.username;
  var coin = req.body.coin;
  var type = req.body.type;
  var price = req.body.price;
  var amount = req.body.amount;

  var Users = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
  
  var user = new Users({username: userName, coin:coin, type:type, price:price, amount:amount});
  user.save(function (err){
    if (err){
      console.log(err.message);
      return err;
    }
    else{
      console.log("trade saved");
      res.redirect("/alltrades");
    }
  })


})


// Deleta Trade
router.delete('/deleteTrade/:id', function (req, res, next) {
  var db = require('../db');
  var User = db.Mongoose.model('usercolletction', db.UserSchema, 'usercollection');
  User.find({ _id: req.params.id }).remove(function (err, doc) {
    if (err) {
      res.status(500).json({ error: err.message });
      res.end();
      return;
    }
    res.json({ success: true });
    res.end();
  });
});

// Get all trades from a user
router.get('/alltrades/:username', function(req, res){
  var db = require('../db');
  var Users = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
  Users.find({username: req.params.username}).lean().exec(
    function(e, docs){
      // res.render('userlist', {'userlist': docs});
      res.json(docs);
    }
  );
});

// Get portfolio from a user
router.get('/portfolio/:username', function(req, res){
  var db = require('../db');
  var Users = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
  var port = {
    BTC:[0,0],
    ETH:[0,0],
    LTC:[0,0],
    BCH:[0,0],
    XRP:[0,0],
    Real:[0,0],
    Total:[0,0]  
  };
  Users.find({username: req.params.username}).lean().exec(
    function(e, docs){
      docs.forEach(element => {
        if(element.type == 'buy'){

          // quantidade total da moeda comprada
          port[element.coin][0] += element.amount;
          port[element.coin][1] += element.amount * element.price;
          port['Total'][0] += element.amount * element.price;
          // port['Real'] -= element.amount * element.price;
        }
        else{

          // quantidade total da moeda comprada
          port[element.coin][0] -= element.amount;
          port[element.coin][1] -= element.amount * element.price;
          port['Total'][0] -= element.amount * element.price;
          port['Real'][0] += element.amount * element.price;
        }
      });
      res.json(port);

    });
});


module.exports = router;
