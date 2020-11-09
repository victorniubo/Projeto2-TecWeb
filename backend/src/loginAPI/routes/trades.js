const router = require('express').Router();
const User = require('../model/User');
const verify = require('./verifyidtoken');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();

router.get("/", verify, (req, res)=>{

    // var teste= User.findOne({_id:req.user.id})

    var idf = req.user._id;
    User.findById(idf, function(err, result) {
        if (err) {
          res.send(err);
        } else {
          res.json(result.email);
        }
      });
});


router.post("/addTrade", jsonParser, verify, async (req, res)=>{

    // var teste= User.findOne({_id:req.user.id})

    var coin = req.body.coin;
    var type = req.body.type;
    var price = req.body.price;
    var amount = req.body.amount;


    var objtrade = {coin:coin,type:type,price:price,amount:amount};

    var idf = req.user._id;

    User.update(
        {_id: idf},
        {$push:{trades: objtrade}},
        function(err, suc) {
            if (err) {
                console.log("error")
                res.send(err)
            } else {
                res.send("Trade adicionado com sucesso")
                
            }
            
        }
    );
});


router.get("/all", verify, (req, res)=>{


    var idf = req.user._id;
    User.findById(idf, function(err, result) {
        if (err) {
          res.send(err);
        } else {
          res.json(result.trades);
        }
      });
});


router.get("/portfolio", verify, (req, res)=>{

    var port = {
        BTC:[0,0],
        ETH:[0,0],
        LTC:[0,0],
        BCH:[0,0],
        XRP:[0,0],
        Real:[0,0],
        Total:[0,0]  
      };
    var idf = req.user._id;
    User.findById(idf, function(err, result) {
        if (err) {
          res.send(err);
        } else {
        result.trades.forEach(element => {
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
        }
        res.json(port);
      });
});

router.get("/findTrades/:coin", jsonParser, verify, (req, res)=>{

    var coin = req.params.coin;


    var idf = req.user._id;
    User.findById(idf, function(err, result) {
        if (err) {
          console.log("errou")  
          res.send(err);
        } else {
          res.json(result.trades.filter(x=>x.coin==coin));
        }
      });
    
   
});
module.exports = router;



