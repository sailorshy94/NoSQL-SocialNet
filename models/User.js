// Schema to create User model

// const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Email address is required'],
        unique: true,
        // validate email adress is properly formatted using a regular expression; validate property cks if matches
        validate: {
            validator: function (val) {
                return /^[^\s@][a-zA-Z0-9._-]+@[a-zA-Z0-9.-]\.[a-zA-Z]{2,4}$/.test(val);
            },
            message: 'Please enter valid email address',
        },
    },
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// TODO: add properties:


// thoughts: [Thought],???  (arr of _id vals ref the "Thought" model)

// friends: [User], ??? (arr of _id vals ref the "User" model (self-reference))

// allows virtuals to be included w/ res

// TODO: schema settings = virtual property "friendCount" that retreives length of the user's "friends" arr

// userSchema
//   .virtual('friendCount')
//   // getter
//   .get(function () {
//     return this.friends.length;
//   });

// initialize model
// const User = model('user', userSchema);

// module.exports = User;