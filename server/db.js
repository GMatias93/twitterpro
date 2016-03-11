var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// specify which db to use and where it is.
mongoose.connect('mongodb://localhost/twitterBot');

var db = mongoose.connection;

db.on('error', console.error.bind(console, "Connected error"));

db.once('open', function (){

  console.log("we're connected");

});

  var TargetSchema = mongoose.Schema({
    handle: {type : String , index : {unique : true} },
    interval: String,
  });

  var MessageSchema = mongoose.Schema({
    text: {type : String , index : {unique : true} },
  });
  
  var HashTagSchema = mongoose.Schema({
    text: {type : String , index : {unique : true} },
  });

  var Target = mongoose.model('target', TargetSchema);
  var Message = mongoose.model('message', MessageSchema);
  var HashTag = mongoose.model('HashTag', HashTagSchema);

  var helpers = {};

  // targets 
  helpers.addTarget = function (handle, interval, res){
    console.log('IN HELPERS.ADDTARGET :');
    console.log('handle: ', handle, 'int: ', interval, 'res: ', res);
    new Target({handle: handle, interval:interval}).save(
      function(err, target){
        if (err) {
          console.log(err);
        } else {
          console.log("SUCCES SAVING ", target);
          Target.find({}).then(function(obj){
            res.status(200).send(obj);
          });
        }
      });
  };

  helpers.allTargets = function(res){
    Target.find({}).then(function(obj){
      console.log('sending data with response code 200 in DB', obj);
      res.status(200).send(obj);
    });
  };
  // messages 
  helpers.addMessage = function (text, res){
    console.log('IN HELPERS.ADDTARGET :');
    new Message({text: text}).save(
      function(err, target){
        if (err) {
          console.log(err);
        } else {
          console.log("SUCCES SAVING ", target);
          Message.find({}).then(function(obj){
            res.status(200).send(obj);
          });
        }
      });
  };

  helpers.getMessages = function(res){
    Message.find({}).then(function(obj){
      console.log('sending data with response code 200 in DB', obj);
      res.status(200).send(obj);
    });
  };
  // hash tag 
  helpers.addHashTag = function (hashTag, res){
    console.log('IN HELPERS.addHashTag:');
    console.log('hashtag',hashTag);
    new HashTag({text:hashTag}).save(
      function(err, target){
        if (err) {
          console.log(err);
        } else {
          console.log("SUCCES SAVING ", hashTag);
          HashTag.find({}).then(function(obj){
            res.status(200).send(obj);
          });
        }
      });
  };

  helpers.getHashTags = function(res){
    HashTag.find({}).then(function(obj){
      console.log('sending data with response code 200 in DB', obj);
      res.status(200).send(obj);
    });
  };

  console.log('db is feeling good');
  module.exports = {
    Target: Target,
    Message: Message,
    HashTag: HashTag,
    helpers:helpers,
  };

