// TODO: use async/await and try...catch blocks to create methods for:

// '/api/users endpoint'

// const User = require('../models/User');

// module.exports = {
// all methods will go in here
// };

// GET all users

// GET single user by _id

// POST new user

// PUT update user by _id

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

Mongoose validation for email address using phone number ex from online docs
const User = db.model('user', userSchema);
const user = new User();
let error;

user.phone = '555.0123';
error = user.validateSync();
assert.equal(error.errors['phone'].message,
  '555.0123 is not a valid phone number!');

  ???????????
function validateEmail() {
    const User = db.model('user', userSchema);
    const user = new User();
    let error;

    user.email = `${user.email}`;
    error = user.validateSync();
    assert.equal(error.errors['email'].message,
        'Please enter a valid email address!')
}
*/