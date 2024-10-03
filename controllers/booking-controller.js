import { booking } from "../models/booking-model.js";

export const getAllBookings = (req, res) => {
    res.status(200).json('These are all bookings');
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