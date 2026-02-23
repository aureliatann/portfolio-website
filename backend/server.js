require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5050;

// Allow requests from frontend
app.use(cors({
  origin: 'http://localhost:5173', // your Vite dev server
  methods: ["GET", "POST"],        // only these HTTP methods
}));

// Parse JSON body
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

// Contact route
app.post('/contact', (req, res) => {
  console.log("Received contact request:", req.body);

  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ status: 'error', message: 'All fields are required' });
  }

  // Here you could send email via nodemailer

  console.log(`Message from ${name} (${email}): ${message}`);
  res.json({ status: 'success', message: 'Message received!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});