const mongoose = require("mongoose");
const PostSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  title: {
    type: String,
    require: true
  },
  description: {
    type: String
  },
  categories: {
    type: Array
  },
  body: {
    type: String,
    require: true
  }
});
module.exports = mongoose.model("post", PostSchema);
