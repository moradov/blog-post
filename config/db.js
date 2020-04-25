const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURL");

const connectDB = () => {
  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    })
    .then(() => console.log("Mongo db is connected"))
    .catch(err => {
      console.log(db);
      console.log(err.message);
      process.exit(1);
    });
};
module.exports = connectDB;

// useNewUrlParser: true,
//       useCreateIndex: true,
//       useFindAndModify: false,
//       useUnifiedTopology: true
