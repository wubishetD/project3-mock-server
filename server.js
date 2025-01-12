const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const loginRoutes = require('./routes/loginRoutes');
const app = express();
const PORT = 5001;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api', loginRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Mock server running at http://localhost:${PORT}`);
});
