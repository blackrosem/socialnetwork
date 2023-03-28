const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: mongoose.Schema.Types.ObjectId,
            index: true,
            auto: true,
        },
        reactionBody: {
            type: String,
            required: 'No content',
            maxLength: 280,
        },
        username: {
            type: String,
            required: 'User name required',
        },
        createdAt: {
            type: Date,
            default: Date.now,
          },
    }
)

module.exports = reactionSchema;