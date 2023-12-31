import {ILocation} from "@/interfaces/SearchInput.interface";

export interface IBooking {
  hotelName: string;
  pricePerRoom: string;
  pricePerNight: string;
  pricePerNightPerPerson: string;
  nbRooms: number;
  totalPrice: string;
  nbDays: number;
  startDate: string;
  endDate: string;
  hotelPosition: ILocation;
  cityPosition: ILocation;
  cityName: string;
  countryName: string;
  amenities: string[];
  thumbnail: string;
  description: string;
}
