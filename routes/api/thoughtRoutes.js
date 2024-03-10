const router = require('express').Router();
// methods created in thoughtController
const {
    getAllThoughts,
    getOneThought,
    newThought,
    updateThought,
    removeThought,
} = require('../../controllers/thoughtController');

// path for /api/thoughts
// get all thoughts, create new thought, get single thought, update thought, remove thought 


module.exports = router;