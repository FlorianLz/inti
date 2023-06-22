import {IBooking} from "@/interfaces/Booking.interface";
import {IFlight} from "@/interfaces/Flight.interface";

export interface ITrip {
  totalPrice: string;
  travelerPrice: string;
  booking: IBooking;
  flight: IFlight | null;
}
