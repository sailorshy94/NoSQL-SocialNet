// Schema to create Thought model
const { Schema, model } = require('mongoose');

// Schema to create Thought model
// const thoughtSchema = new Schema({});

// TODO: add properties: 

// thoughtText:
  
// createdAt: {
//       type: Date,
//       default: Date.now,
//     },

// username: (user that created thought)

// reactions: [Reaction],

// allows virtuals to be included w/ res
// {
//     toJSON: {
//       virtuals: true,
//     },
//     id: false,
//   }

// TODO: schema settings = create virtual called "reactionCount" that retrieves length of thought's "reactions" array

// thoughtSchema
//   .virtual('reactionCount')
//   // getter
//   .get(function () {
//     return this.reactions.length;
//   });

// initialize model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;