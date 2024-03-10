const router = require('express').Router();
// methods created in userController
const {
    getAllUsers,
    getOneUser,
    newUser,
    updateUser,
    deleteUser,
} = require('../../controllers/userController');

// path for /api/users
// get all users, create new user
router.route('/users').get(getAllUsers).post(newUser);

// path for /api/users/:userId
// get one user, update one user, delete one user by _id
router.route('/users/:userId').get(getOneUser).put(updateUser).delete(deleteUser);

// path for /api/users/:userId/friends/:friendId
// add new friend, remove friend 
// router.route('/:userId/friends/:friendId').post(newFriend).delete(removeFriend);

module.exports = router;