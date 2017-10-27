
var model = require('../models');
var Cryptr = require('cryptr');
var cryptr = new Cryptr('myTotalySecretKey');
var Promise = require("bluebird");

exports.all = Promise.coroutine(function*(req, res, next) {
  var response = yield model.card.findAll();
  res.send(response);
});

exports.save =  Promise.coroutine(function*(req, res, next) {
  var record = req.body.data;
  var encryptedString = cryptr.encrypt(record.number);
  record.number = encryptedString;
  var encryptcvv = cryptr.encrypt(record.cvv);
  record.cvv = encryptcvv
  var response = yield model.card.create(record)
  if (response){
    res.send(response);
  }
  else{
    res.send('err while saving card');
  } 

});