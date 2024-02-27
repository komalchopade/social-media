
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Sample data for testing
let Instagram = [
  { id: 1, like: 1000, PName: 'John Doe' },
  { id: 2, like: 2500, PName: 'Jane Smith' }
];

// GET all Instagram posts
app.get('/Instagram', (req, res) => {
  res.json(Instagram);
});

// GET a specific Instagram post by like count
app.get('/Instagram/like/:like', (req, res) => {
  const like = parseInt(req.params.like);
  const post = Instagram.find((post) => post.like === like);

  if (!post) {
    res.status(404).json({ message: 'Item not found' });
  } else {
    res.json(post);
  }
});

// GET all Instagram posts by person's name
app.get('/Instagram/search/:PName', (req, res) => {
  const PName = req.params.PName;
  const posts = Instagram.filter((post) => post.PName === PName);

  if (posts.length === 0) {
    res.status(404).send("No results found");
  } else {
    res.json(posts);
  }
});

// Add a new post to Instagram
app.post('/Instagram', (req, res) => {
  const newPost = req.body;
  Instagram.push(newPost);
  res.status(201).json(newPost);
});

// Update profile name by ID
app.put('/Instagram/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatePost = req.body;
  const index = Instagram.findIndex((post) => post.id === id);

  if (index === -1) {
    res.status(404).json({ message: 'Post not found' });
  } else {
    Instagram[index] = { ...Instagram[index], ...updatePost };
    res.json(Instagram[index]);
  }
});

// Delete a post by ID
app.delete('/Instagram/:id', (req, res) => {
  const id = parseInt(req.params.id);
  Instagram = Instagram.filter((post) => post.id !== id);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});







