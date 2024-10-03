import {Schema, model} from "mongoose";

// creating a schema
const bookingSchema = new Schema({

    firstName : {
        type: String,
        // required: true
    },

    lastName : {
        type: String,
        // required: true
    },

    sex : {
        type: String,
        enum: {
            values: ['male', 'female']
        },
        // required: true
    },

    

    email : {
        type: String,
        unique: true,
        // required: true
    },

})

// exporting the schema
export const booking = model('booking', bookingSchema);