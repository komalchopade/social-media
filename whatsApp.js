


const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Initialize WhatsApp array
let whatsApp = [];

// Get all WhatsApp data
app.get('/whatsApp', (req, res) => {
    res.json(whatsApp);
});

// Search for WhatsApp data by Name
app.get('/whatsApp/:Name', (req, res) => {
    const name = req.params.Name;
    const foundWhatsApp = whatsApp.find((item) => item.Name === name);
    if (!foundWhatsApp) {
        res.status(404).json({ message: 'Item not found' });
    } else {
        res.json(foundWhatsApp);
    }
});

// Create new WhatsApp status
app.post('/whatsApp/status', (req, res) => {
    const newStatus = req.body;
    whatsApp.push(newStatus);
    res.status(201).json(newStatus);
});

// Update WhatsApp status
app.put('/whatsApp/update', (req, res) => {
    const updateWhatsApp = req.body;
    // Assuming you have a unique identifier like `Name` to find and update the WhatsApp status
    const index = whatsApp.findIndex((item) => item.Name === updateWhatsApp.Name);
    if (index === -1) {
        res.status(404).json("Not found");
    } else {
        whatsApp[index] = updateWhatsApp;
        res.status(200).json("Update successful");
    }
});

// Delete WhatsApp chat
app.delete('/whatsApp/:chat', (req, res) => {
    const chat = req.params.chat;
    whatsApp = whatsApp.filter((item) => item.chat !== chat);
    res.sendStatus(204);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});











