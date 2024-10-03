import { Router } from "express";
import { getAllBookings, getOneBooking, addBooking, updateBooking, deleteBooking} from "../controllers/booking-controller.js";

// create and export a router
export const bookingRouter = Router();

// define routes
bookingRouter.get('/bookings', getAllBookings);
bookingRouter.get('/bookings/:id', getOneBooking);
bookingRouter.post('/bookings', addBooking);
bookingRouter.patch('/bookings/:id', updateBooking);
bookingRouter.delete('/bookings/:id', deleteBooking);