const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: 'No content in text',
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: new Date(),
        },
        username: {
            type: String,
            required: 'No opinions without an owner',
        },
        reactions: [
            {
                type: Schema.Types.ObjectId,
                ref: 'reactionSchema',
            }
        ],
    }
)

const Thought = model('thought', thoughtSchema);

module.exports = Thought;