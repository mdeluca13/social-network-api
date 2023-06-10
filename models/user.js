const { Schema, model } = require('mongoose');

// Schema to create a course model
const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please enter a valid email'],
        },
        thoughts: [
            {
            type: Schema.Types.ObjectId,
            ref: 'Thought',
        },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Friend',
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

const User = model('user', userSchema);

module.exports = User;