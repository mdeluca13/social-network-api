const { Schema, Types } = require('mongoose');
const format = require('date-fns/format');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (date) => format(new Date(date), "MMMM do, yyyy 'at' hh:mm a"),
        },
        },
        {
        toJSON: {
            getters: true,
        },
        id: false,
    }
  );
  
  module.exports = reactionSchema;