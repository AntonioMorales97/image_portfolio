const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

// Bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/images', require('./routes/api/images'));
app.use('/api/desserts', require('./routes/api/desserts'));

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

const httpServer = http.createServer(app);
httpServer.listen(port, () =>
  console.log(`HTTP Server started on port ${port}`)
);
