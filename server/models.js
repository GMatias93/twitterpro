var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  username: {
    type: String,
    index: {
      unique: true
    }
  },
  password: String,
  twitterId: String,
  admin: Number,
});

var ListSchema = mongoose.Schema({
  name: {
    type: String,
    index: {
      unique: true,
    },
  },
  user: String,
});

var TargetSchema = mongoose.Schema({
  handle: {
    type: String,
    index: {
      unique: true
    }
  },
  interval: String,
  list: String,
});

var MessageSchema = mongoose.Schema({
  text: {
    type: String,
    index: {
      unique: true
    }
  },
  list: String,
});

var HashTagSchema = mongoose.Schema({
  text: {
    type: String,
    index: {
      unique: true
    }
  },
  list: String,
});


var Target = mongoose.model('target', TargetSchema);
var Message = mongoose.model('message', MessageSchema);
var HashTag = mongoose.model('HashTag', HashTagSchema);
var User = mongoose.model('User', UserSchema);
var List = mongoose.model('List', ListSchema);

var models = {
  target: Target,
  message: Message,
  hashtag: HashTag,
  user: User,
  list: List
};

module.exports = models;
