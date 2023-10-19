const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000; // Set the port to your preferred value

// Serve static assets (your React app's build folder)
app.use(express.static(path.join(__dirname, 'build')));

// Handle requests for all routes by serving the index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
