const router = require('express').Router(); // import the Express.js router
const apiRoutes = require('./api'); // import the API routes

router.use('/api', apiRoutes); // add the API routes

router.use((req, res) => res.send('Wrong route!')); // add a fallback route

module.exports = router; // export the router