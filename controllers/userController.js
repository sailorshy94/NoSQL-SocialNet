// '/api/users endpoint'
const User = require('../models/User');

module.exports = {
    // retrieves all users data
    async getAllUsers(req, res) {
        try {
            const usersData = await User.find();
            res.json(usersData);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // retrieves one user data
    async getOneUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })
                .select('-__v');

            if (!user) {
                return res.status(404).json({ message: 'No user with that id.' });
            }
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // creates a new user
    async newUser(req, res) {
        try {
            const dbNewUser = await User.create(req.body);
            res.json(dbNewUser);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // edit user data
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                // makes sure that user fields are formatted properly before response
                { runValidators: true, new: true }
            );

            if (!user) {
                return res.status(404).json({ message: 'This user does not exist!' });
            }
            res.json(user);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    // delete user using _id value
    // bonus if delete user also deletes associated thoughts!!!
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.userId});
            if (!user) {
                return res.status(404).json({ message: 'This user does not exist!' });
            }
            // added in success msg for deletion
            res.json({ message: 'User successfully deleted.' });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async addFriend(req, res) {
        try {
            const friend = await User.create(req.body);
            const user = await User.findOneAndUpdate(
                { _id: req.body.userId },
                { $addToSet: { friends: friend._id } },
                { new: true }
            );
            if (!user) {
                return res.status(404).json({
                    message: 'Friend added, but no user exists with that id!'
                })
            }    
            res.json('Friend added!');
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async removefriend(req, res) {
        try {
            const friend = await User.findOneAndRemove({ _id: req.params.userId });

            if (!friend) {
                return res.status(404).json({ message: 'No user exists with that id!' });
            }

            const user = await User.findOneAndUpdate(
                { friends: req.params.friendId },
                { $pull: { friends: req.params.videoId } },
                { new: true }
            );

            if (!user) { 
                return res.status(404).json({ message: 'Friend removed, but no user exists with that id!'})
            }
            res.json({ message: 'Friend successfully removed.' });
        } catch (err) {
            console.log(err);
            res.status.(500).json(err);
        }
    }
};
