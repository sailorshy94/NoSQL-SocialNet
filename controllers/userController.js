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
                return res.status(404).json({ message: 'No user with that ID.' });
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
    // TODO: bonus if delete user also deletes associated thoughts!!!
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
    }
};

/* TODO: need to have POST add new friend
        newFriend()
         need to have DELETE remove friend from list
         removeFriend()
         via A "DO THESE LAST" */