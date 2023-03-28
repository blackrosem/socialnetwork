const { Schema, model } = require('mongoose');
const Thought = require('./Thought');

// Schema to create User model
const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: 'Username required',
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            required: 'Email required',
            validate: [validateEmail, 'Please fill a valid email address'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            }
        ],
    },
);

userSchema
    .virtual('friendCount')
    .get(function () {
        return this.friends.length;
    });

    const User = model('user', userSchema);

    module.exports = User;