const Thought = require('../models/Thought');

module.exports = {
// GET all thoughts
async getAllThoughts(req, res) {
    try {
        const thoughtsData = await Thought.find();
        res.json(thoughtsData);
    } catch (err) {
        res.status(500).json(err);
    }
},
// GET single thought by _id
async getOneThought(req, res) {
    try {
        const thought = await Thought.findOne({ _id: req.params.thoughtId })
            .select('-__v');

        if (!thought) {
            return res.status(404).json({ message: 'No thought with that ID.' });
        }
        res.json(thought);
    } catch (err) {
        res.status(500).json(err);
    }
},
// POST new thought (IMPORTANT: push created thought's _id to assoc user's thoughts array field)

};


// PUT update thought by _id

// DELETE remove thought by _id

// structure =
/*
async methodName (req, res) {
    try {
        const = await 
        res.json();
    } catch (err) {
        res.status().json(err);
    }
};

*/