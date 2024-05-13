const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const voterRoutes = require('./routes/voters');
const authLogin = require('./routes/auth');
connectDB();
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());
// Basic route
app.get('/', (req, res) => {
  res.send('Hello World! Welcome to the Voting App Backend!');
});
app.use('/api/voters', voterRoutes);
app.use('/api/auth',authLogin);
// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
