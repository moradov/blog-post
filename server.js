const express = require("express");
const app = express();
const connectDB = require("./config/db");

// connect to database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// definde Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/posts", require("./routes/posts"));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("the server work at port " + PORT));
