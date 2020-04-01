const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  postPath:{type:String, required:true},
  imdb: {type:String,required:true},
});

module.exports = mongoose.model('Post', postSchema);
