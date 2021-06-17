const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const user = require("./models/users");

const database_url = process.env.DBURL;
const JWT_secret = process.env.JWT;

mongoose.connect(database_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const app = express();
app.use(express.static("public"));
app.use(express.json());

//user login ....................

app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  const User = await user.findOne({ user_id: username }).lean();
  console.log(User);
  if (!User) {
    return res.json({ status: "error", error: "Invalid username/password" });
  }
  if (await bcrypt.compare(password, User.password)) {
    const token = jwt.sign(
      {
        id: User._id,
        username: User.user_name,
      },
      JWT_secret
    );

    return res.json({ status: "ok", data: token });
  }
  res.json({ status: "error", error: "Invalid username/password" });
});

// user registration................
app.post("/api/register", async (req, res) => {
  const { name, username, password: plainTextPassword } = req.body;
  console.log(name, username, plainTextPassword);
  if (!username || typeof username !== "string") {
    return res.json({
      status: "error",
      error: "Invalid username!",
    });
  }
  if (!plainTextPassword || typeof plainTextPassword !== "string") {
    return res.json({
      status: "error",
      error: "Invalid password!",
    });
  }
  if (plainTextPassword.length < 5) {
    return res.json({
      status: "error",
      error: "Password too small",
    });
  }

  const password = await bcrypt.hash(plainTextPassword, 15);
  try {
    const response = await user.create({
      user_id: username,
      password: password,
      user_name: name,
    });
    res.json({ status: "ok" });
    console.log(` User created successfully --${response}`);
  } catch (error) {
    console.log(JSON.stringify(error));
    if (error.code === 11000) {
      // console.log('Email already registered!')
      return res.json({
        status: 409,
        error: "Email already registered!",
      });
    }
    throw error;
  }
});

app.listen(process.env.PORT, () => {
  console.log(`The server is up and running on port ${process.env.PORT}`);
});
