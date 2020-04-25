const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const Post = require("../model/Post");
// @route     POST api/auth
// @desc      Add POST
// @access    Private
router.post("/add", auth, async (req, res) => {
  const { title, description, categories, body } = req.body;
  post = await new Post({
    title,
    description,
    categories,
    body,
    user: req.user.id
  });
  await post.save();
  res.status(200).json("user saved");
});
router.get("/", async (req, res) => {
  posts = await Post.find();
  res.json(posts);
});

module.exports = router;
