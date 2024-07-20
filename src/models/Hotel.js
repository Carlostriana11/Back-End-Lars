const {Schema, model} = require('mongoose')

const hotelSchema = new Schema({
    guestName: {
        type: String,
        required: true
    },
    roomNumber: {
        type: Number
    },
    guestEmail: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    }
},{
    timestamps: true
});

const hotelModel = model(
    'Hotel',
    hotelSchema
)
module.exports = hotelModel;