// Schema to create Thought model
const { Schema, model } = require('mongoose');
// have to import Reaction schema
const Reaction = require('./Reaction');

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
        get: (date) => date.toISOString(),
        // use getter method to format timestamp on query??
    },
    username: {
        type: String,
        required: true,

    },
    // arr of nested docs created w/ reactionSchema
    reactions: [Reaction],
},
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    });

// schema settings = create virtual called "reactionCount" that retrieves length of thought's "reactions" array

thoughtSchema
    .virtual('reactionCount')
    // getter
    .get(function () {
        return this.reactions.length;
    });

// initialize model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;