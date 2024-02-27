
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Placeholder array for Linkedin data
let Linkedin = [
    { Name: 'John Doe', Comment: 'Nice post' },
    { Name: 'Jane Doe', Comment: 'Great profile' }
];

// Routes for CURD operations

// Get all Linkedin data
app.get('/Linkedin', (req, res) => {
    res.json(Linkedin);
});

// Search by name
app.get('/linkedin/:Name', (req, res) => {
    const name = req.params.Name.toLowerCase(); // Convert to lowercase for case-insensitive comparison
    const linkedinUser = Linkedin.find((user) => user.Name.toLowerCase() === name);
    if (!linkedinUser) {
        res.status(404).json({ message: 'User not found' });
    } else {
        res.json(linkedinUser);
    }
});

// Add a comment
app.put('/Linkedin/:comment', (req, res) => {
    const comment = req.body;
    Linkedin.push(comment);
    res.status(201).json(comment);
});

// Create a login id
app.post('/Linkedin/:loginId', (req, res) => {
    const { password, userName } = req.body;
    if (!password || !userName) {
        res.status(406).json({ message: 'Not acceptable' });
    } else {
        // Add logic to create login id
        res.json({ message: 'Login id created successfully' });
    }
});

// Update profile
app.put('/Linkedin/:profile', (req, res) => {
    const updatedProfile = req.body;
    if (!updatedProfile) {
        res.status(501).json({ message: 'Not implemented' });
    } else {
        // Add logic to update profile
        res.json(updatedProfile);
    }
});

// Delete profile
app.delete('/Linkedin/:profile', (req, res) => {
    // Add logic to delete profile
    res.sendStatus(204);
});

// Create a post
app.post('/Linkedin/:mypost', (req, res) => {
    const { image } = req.body;
    Linkedin.push(image);
    res.status(201).json({ message: 'Post created successfully' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});





























