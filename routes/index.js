const router = require('express').Router(); // import the Express.js router
const userRoutes = require('./api/userRoutes');
const thoughtRoutes = require('./api/thoughtRoutes');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

router.use((req, res) => res.send('Wrong route!')); // add a fallback route

module.exports = router; // export the router