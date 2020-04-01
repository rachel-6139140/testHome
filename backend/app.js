
const express = require('express');
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const Post = require("./post");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

mongoose
  .connect(
    "mongodb+srv://rachel:g15gLXpWBFI535ws@cluster0-asra7.mongodb.net/test?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});


app.post('/api/posts', (req, res, next) => {
  const post = new Post({
    name: req.body.name,
    category: req.body.category,
    postPath: req.body.postPath,
    imdb: req.body.imdb      
  });
  post.save();
  res.status(201).json({
    message: "Post added successfully"
  });
});

app.get("/api/posts", (req, res, next) => {
  Post.find().then(documents => {
    res.status(200).json({
      posts: documents
    })
    res.status(400).json({ message:"not sucsses get posts"});
  });
});

app.delete('/api/posts/:id', (req, res, next) => {
  Post.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "Post deleted!" });
  });});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))