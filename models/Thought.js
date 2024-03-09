// Schema to create Thought model
const { Schema, model } = require('mongoose');

// Schema to create Thought model
const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: [1, 'Must be at least one character, got {VALUE}'],
        maxlength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // TODO: use getter method to format timestamp on query??
    },
    username: {
        type: String,
        required: true,

    },

},
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    });

// TODO: add properties: 

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