// '/api/users endpoint'
const User = require('../models/User');

module.exports = {
    async getAllUsers(req, res) {
        try {
            const usersData = await User.find();
            res.json(usersData);
        } catch (err) {
            res.status(500).json(err);
        }
    },
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
    async newUser(req, res) {
        try {
            const dbNewUser = await User.create(req.body);
            res.json(dbNewUser);
        } catch (err) {
            res.status(500).json(err);
        }
},
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
};

// DELETE remove user by _id

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

*****TODO: make sure have an err for if any required data is left blank!!!
*/