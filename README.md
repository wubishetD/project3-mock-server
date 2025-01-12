# Project3-Mock-Server

This project is a mock server built using Express.js to simulate API endpoints for Project 3: Access Platform for Providers. It is designed to enable testing and validation of API interactions without relying on the actual backend implementation.

---

## Prerequisites
Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14+ recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

---

## Initialization
Follow these steps to set up the mock server:

1. **Create the Project Directory:**
   ```bash
   mkdir project3-mock-server
   cd project3-mock-server
   ```

2. **Initialize a Node.js Project:**
   ```bash
   npm init -y
   ```

3. **Install Required Dependencies:**
   ```bash
   npm install express body-parser cors
   ```

4. **Create the Server File:**
   Create a file named `server.js`:
   ```bash
   touch server.js
   ```

5. **Set Up the Mock Server Code:**
   Add the following code to `server.js`:
   ```javascript
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
   ```

6. **Start the Server:**
   Run the following command to start the server:
   ```bash
   node server.js
   ```

7. **Access the Server:**
   Open your browser or API testing tool (e.g., Postman) and access the server at:
   - `http://localhost:3000`

---

## Notes
- This setup is for initializing the mock server. Future enhancements can include adding more endpoints, implementing CRUD operations, and simulating network delays.
- For automatic server restarts during development, consider installing `nodemon`:
  ```bash
  npm install -g nodemon
  nodemon server.js
  ```
