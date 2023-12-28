import { BookingService } from "../services/BookingService";
import { NotificationService } from "../services/NotificationService";
import { CabinType } from "../types/enums";
import { CrewMember } from "./CrewMember";
import { Discount } from "./Discount";
import { Passenger } from "./Passenger";
import { RecreationalActivity } from "./RecreationalActivity";

export class CruiseCompany {
  private readonly bookings: BookingService[] = [];
  private readonly crewMembers: CrewMember[] = [];
  private readonly discounts: Discount[] = [];
  private readonly passengers: Passenger[];

  constructor(
    public name: string,
    public cabinType: CabinType,
    public recreationalActivities: RecreationalActivity[],
    public notificationService: NotificationService,
    passengers: Passenger[]
  ) {
    this.notificationService = notificationService;
    this.passengers = passengers;
  }

  getCrewMembers(): CrewMember[] {
    return this.crewMembers;
  }

  addCrewMember(crewMember: CrewMember): void {
    this.crewMembers.push(crewMember);
  }

  addDiscount(discount: Discount): void {
    this.discounts.push(discount);
  }

  bookCruise(booking: BookingService): void {
    this.bookings.push(booking);
    console.log("Booking successful!");
  }

  beginTour(): void {
    console.log("The tour has begun!");
    this.notifyPassengers(
      "Your cruise has officially begun. Enjoy your journey!"
    );
  }

  cancelTour(): void {
    console.log("The tour has been canceled.");
    this.notifyPassengers(
      "We regret to inform you that the cruise has been canceled."
    );
  }

  rescheduleTour(newDepartureDate: Date): void {
    console.log(`The tour has been rescheduled to ${newDepartureDate}`);
    this.notifyPassengers(
      `The cruise has been rescheduled. The new departure date is ${newDepartureDate}`
    );
  }

  notifyPassengersBeforeTour(): void {
    const oneWeekInMillis = 7 * 24 * 60 * 60 * 1000; // One week in milliseconds
    const currentDate = new Date();

    console.log("Notifying passengers about the upcoming tour...");

    // Iterate through bookings and notify passengers
    this.bookings.forEach((booking) => {
      const tourStartDate = booking.route.departureDate.getTime();
      const notificationDate = new Date(tourStartDate - oneWeekInMillis);

      // Check if it's time to send the notification
      if (currentDate >= notificationDate) {
        const passenger = this.findPassengerByBooking(booking);
        const notificationMessage =
          "Your cruise is about to begin. Please check-in and undergo medical examination.";

        this.notificationService.sendSMS(
          notificationMessage,
          passenger.getPhoneNumber()
        );
        this.notificationService.sendEmail(
          notificationMessage,
          passenger.getEmail()
        );
        this.notificationService.sendPushNotification(
          notificationMessage,
          passenger.getDeviceId()
        );
      }
    });
  }

  private notifyPassengers(message: string): void {
    this.bookings.forEach((booking) => {
      const passenger = this.findPassengerByBooking(booking);
      this.notificationService.sendSMS(message, passenger.getPhoneNumber());
      this.notificationService.sendEmail(message, passenger.getEmail());
      this.notificationService.sendPushNotification(
        message,
        passenger.getDeviceId()
      );
    });
  }

  private findPassengerByBooking(booking: BookingService): Passenger {
    // To identify passengers by booking, I should be using IDs but IDGAF
    return this.passengers.find(
      (passenger) => passenger.name === booking.passenger.name
    )!;
  }
}
