const { Schema, model } = require('mongoose');

const eventSchema = new Schema(
    {
        eventId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        eventName: {
            type: String,
            required: true,
            maxlength: 60,
            minlength: 4,
            default: 'Unnamed event',
        },
        game: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            default: Date.now,
        },
        description: {
            type: String,
            required: true,
            unique: true,
        },
        prizepool: {
            type: Number,
            required: true,
        }
        },
        {
            toJSON: {
            getters: true,
        },
        id: false,
    }
);
const Event = model('Event', eventSchema);

module.exports = Event;