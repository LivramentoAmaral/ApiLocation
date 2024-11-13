// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const locationRoutes = require('./routes/locationRoutes');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON data
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Ta ok!');
},);

// Routes
app.use('/api', locationRoutes );

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('Failed to connect to MongoDB', err));

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
