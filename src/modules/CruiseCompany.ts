import { BookingService } from "../services/BookingService";
import { NotificationService } from "../services/NotificationService";
import { NOTIFICATION_MESSAGE } from "../utils/constants";
import { CrewMember } from "./CrewMember";
import { CruiseShip } from "./CruiseShip";
import { Discount } from "./Discount";
import { Passenger } from "./Passenger";

export class CruiseCompany {
  private readonly bookings: BookingService[] = [];
  private readonly crewMembers: CrewMember[] = [];
  private readonly passengers: Passenger[];

  constructor(
    public name: string,
    public notificationService: NotificationService,
    public cruiseShip: CruiseShip,
    passengers: Passenger[]
  ) {
    this.notificationService = notificationService;
    this.passengers = passengers;
  }

  public applyDiscount(price: number, discount: Discount): number {
    return discount.applyDiscount(price);
  }

  public bookCruise(booking: BookingService): void {
    this.bookings.push(booking);
    console.log("Booking successful!");
  }

  public beginTour(): void {
    this.notifyPassengers(
      "Your cruise has officially begun. Enjoy your journey!"
    );
  }

  public cancelTour(): void {
    this.notifyPassengers(
      "We regret to inform you that the cruise has been canceled."
    );
  }

  public rescheduleTour(newDepartureDate: Date): void {
    this.notifyPassengers(
      `The cruise has been rescheduled. The new departure date is ${newDepartureDate}`
    );
  }

  public notifyPassengersBeforeTour(): void {
    const oneWeekInMillis = 7 * 24 * 60 * 60 * 1000;
    const currentDate = new Date();

    console.log("Notifying passengers about the upcoming tour...");

    // Iterate through bookings and notify passengers
    this.bookings.forEach((booking) => {
      const tourStartDate = booking.route.departureDate.getTime();
      const notificationDate = new Date(tourStartDate - oneWeekInMillis);

      if (currentDate >= notificationDate) {
        const passenger = this.findPassengerByBooking(booking);

        this.notificationService
          .sendSMS(NOTIFICATION_MESSAGE, passenger.getPhoneNumber())
          .sendEmail(NOTIFICATION_MESSAGE, passenger.getEmail())
          .sendPushNotification(NOTIFICATION_MESSAGE, passenger.getID());
      }
    });
  }

  private notifyPassengers(message: string): void {
    this.bookings.forEach((booking) => {
      const passenger = this.findPassengerByBooking(booking);
      this.notificationService
        .sendSMS(message, passenger.getPhoneNumber())
        .sendEmail(message, passenger.getEmail())
        .sendPushNotification(message, passenger.getID());
    });
  }

  private findPassengerByBooking(booking: BookingService): Passenger {
    return this.passengers.find(
      (passenger) => passenger.getID() === booking.passenger.getID()
    )!;
  }
}
