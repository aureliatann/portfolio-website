require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // <-- import mongoose

const app = express();
const PORT = process.env.PORT || 5050;

// -------------------- MONGODB CONNECTION --------------------
mongoose.connect('mongodb://127.0.0.1:27017/contactDB')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));
  
// -------------------- MIDDLEWARE --------------------
app.use(cors({
  origin: 'http://localhost:5173', // your frontend
  methods: ["GET", "POST"],
}));
app.use(express.json());

// -------------------- SCHEMA --------------------
const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);

// -------------------- ROUTES --------------------
app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ status: 'error', message: 'All fields are required' });
  }

  try {
    const newMessage = new Message({ name, email, message });
    await newMessage.save(); // <-- save to MongoDB
    console.log(`Saved message from ${name} (${email})`);
    res.json({ status: 'success', message: 'Message received!' });
  } catch (err) {
    console.error('Error saving message:', err);
    res.status(500).json({ status: 'error', message: 'Server error' });
  }
});

app.get('/messages', async (req, res) => {
  try {
    const messages = await Message.find().sort({ date: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ status: 'error', message: 'Server error' });
  }
});

// -------------------- START SERVER --------------------
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});