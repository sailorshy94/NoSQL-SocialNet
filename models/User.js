// Schema to create User model

// const { Schema, model } = require('mongoose');

// Schema to create User model
// const userSchema = new Schema({});

// TODO: add properties: 

// username:

// email:

// thoughts: [Thought],???  (arr of _id vals ref the "Thought" model)

// friends: [User], ??? (arr of _id vals ref the "User" model (self-reference))

// allows virtuals to be included w/ res
// {
//     toJSON: {
//       virtuals: true,
//     },
//     id: false,
//   }

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