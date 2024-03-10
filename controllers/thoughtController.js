const Thought = require('../models/Thought');
const User = require('../models/User');

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
    // remove thought by _id
    async removeThought(req, res) {
        try {
            const thought = await Thought.findOneAndRemove({ _id: req.params.thoughtId });

            if (!thought) {
                return res.status(404).json({ message: 'No thought found with this id!' });
            }
            // also have to reference user attached to thought
            const user = await User.findOneUpdate(
                { thoughts: req.params.thoughtId },
                { $pull: { thoughts: req.params.thoughtId } },
                { new: true }
            );

            if (!user) {
                return res.status(404).json({
                    message: 'Thought was added, but no user exists with that ID',
                });
            }
            // added in a success msg for deletion
            res.json({ message: 'Thought successfully removed.' });
        } catch {
            console.log(err);
            res.status(500).json(err);
        }
    }
};





