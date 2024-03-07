// Schema to create User model
const { Schema, model } = require('mongoose');
const Thought = require('./Thought');

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
                return /^[^\s@][a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(val);
            },
            message: 'Please enter valid email address',
        },
    },
    // (arr of _id vals ref the "Thought" model)
    thoughts: [Thought],
    // (arr of _id vals ref the "User" model (self-reference))
    friends: [
        {
            type: Schema.types.ObjectId,

        }
    ],
    // allows virtuals to be included w/ res
    toJSON: {
        virtuals: true,
    },
    id: false,
});

// schema settings = virtual property "friendCount" that retreives length of the user's "friends" arr
userSchema
    .virtual('friendCount')
    // getter
    .get(function () {
        return this.friends.length;
    });

// initialize model
const User = model('user', userSchema);

module.exports = User;