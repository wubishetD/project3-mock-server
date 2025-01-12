const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Example Mock Endpoints
app.get('/api/providers', (req, res) => {
    res.json([
        { id: 1, name: 'Provider One', email: 'provider1@example.com' },
        { id: 2, name: 'Provider Two', email: 'provider2@example.com' }
    ]);
});

app.listen(PORT, () => {
    console.log(`Mock server running at http://localhost:${PORT}`);
});