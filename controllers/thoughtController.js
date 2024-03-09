const Thought = require('../models/Thought');

module.exports = {
    // retrieves all thoughts
    async getAllThoughts(req, res) {
        try {
            const thoughtsData = await Thought.find();
            res.json(thoughtsData);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // retrieves single thought by _id
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
    // creates new thought
    async newThought(req, res) {
        try {
            const newThought = await Thought.create(req.body);
            const user = await User.findOneAndUpdate(
                { _id: req.body.userId },
                // $addToSet = Mongoose docs "Adds elements to an array only if they do not already exist in the set."
                // push created thought's _id to assoc user's thoughts array field
                { $addToSet: { thoughts: newThought._id } },
                { new: true }
            );

            if (!user) {
                return res.status(404).json({
                    message: 'Thought was added, but no user exists with that ID',
                });
            }
            res.json('Thought succesfully added!!');
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // updates thought by _id
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                // makes sure that thought fields are formatted properly before response
                { runValidators: true, new: true }
            );

            if (!thought) {
                return res.status(404).json({ message: 'No thought found with this id!' });
            }
            res.json(thought);
        } catch {
            console.log(err);
            res.status(500).json(err);
        }
    },
    // DELETE remove thought by _id
    async removeThought(req, res) {
        try {
            const thought 
        } catch {

        }
    } 
};





