const express = require('express');
const client = require('./database');
const app = express();
const port = 5000;

// Sample endpoint to test API
app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to My Restaurant API' });
});

// Example endpoint to get menu items from the database
app.get('/api/menu', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM menu');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching menu:', error);
    res.status(500).json({ error: 'Failed to fetch menu items' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

