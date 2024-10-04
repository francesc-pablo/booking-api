import { booking } from "../models/booking-model.js";


export const getAllBookings = async (req, res) => {
    try {
        const AllBookings = await booking.find(); // fetch all bookings from database

        res.status(200).json(AllBookings);
    } catch (error) {
        res.status(500).json({message:'Error fetching bookings', error});
    }
}

export const getOneBooking = (req, res) => {
    res.status(200).json('This is your booking');
}

export const addBooking = async (req, res, next) => {
    try {
        
        const newBooking = new booking(req.body)
        const bookings = await newBooking.save()
    
        res.status(201).json(bookings);
    } catch (error) {
        next(error);
    }
}

export const updateBooking = (req, res) => {
    res.status(200).json('Booking Updated');
}

export const deleteBooking = (req, res) => {
    res.status(200).json('Booking deleted');
}