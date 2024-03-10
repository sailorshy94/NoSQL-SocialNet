const router = require('express').Router();
// methods created in thoughtController
const {
    getAllThoughts,
    getOneThought,
    newThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction,
} = require('../../controllers/thoughtController');

// path for /api/thoughts
// get all thoughts, create new thought, get single thought, update thought, remove thought 
router.route('/thoughts').get(getAllThoughts).post(newThought);

// path for /api/thoughts/:thoughtId
router.route('/thoughts/:thoughtId').get(getOneThought).put(updateThought).delete(removeThought);

// path for /api/thoughts/:thoughtId/reactions
router.route('/thoughts/:thoughtId/reactions').post(addReaction).delete(removeReaction);

module.exports = router;