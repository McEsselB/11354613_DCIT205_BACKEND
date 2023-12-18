const express = require('express');
const mongoose = require('mongoose');
const patientsRouter = require('./Routes/patients'); // Check and adjust the paths if the routes are in the 'Routes' directory
const encountersRouter = require('./Routes/encounters');
const vitalsRouter = require('./Routes/vitals');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://McEssel:YOUR_PASSWORD@cluster0.qjreyoo.mongodb.net/YourDatabaseName', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Middleware
app.use(express.json());

// Routes
app.use('/api/patients', patientsRouter);
app.use('/api/encounters', encountersRouter);
app.use('/api/vitals', vitalsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
