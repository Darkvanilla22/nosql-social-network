const router = require('express').Router(); // import the Express.js router
const {
  getThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
} = require('../../controllers/thoughtController'); // import the thought controller

router.route('/')
  .get(getThoughts)
  .post(createThought);

router.route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

router.route('/:thoughtId/reactions')
  .post(addReaction);

router.route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);

module.exports = router; // export the router
