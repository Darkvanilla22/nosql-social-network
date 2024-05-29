const express = require('express'); // import the Express.js module
const mongoose = require('mongoose'); // import the Mongoose module
const routes = require('./routes'); // import the routes

const app = express(); // create a new Express.js app
const PORT = process.env.PORT || 3001; // set the port

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// Connect to the database
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/social-network-api',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.set('debug', true); // log every MongoDB query being executed

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
