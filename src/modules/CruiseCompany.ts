import { BookingService } from "../services/BookingService";
import { NotificationService } from "../services/NotificationService";
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

  public getCrewMembers(): CrewMember[] {
    return this.crewMembers;
  }

  public addCrewMember(crewMember: CrewMember): void {
    this.crewMembers.push(crewMember);
  }

  public removeCrewMember(crewMember: CrewMember): void {
    const index = this.crewMembers.indexOf(crewMember);
    if (index !== -1) {
      this.crewMembers.splice(index, 1);
      console.log(`${crewMember.getName()} has been removed from the crew.`);
    } else {
      console.log(`${crewMember.getName()} is not in the crew.`);
    }
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
    console.log(`The tour has been rescheduled to ${newDepartureDate}`);
    this.notifyPassengers(
      `The cruise has been rescheduled. The new departure date is ${newDepartureDate}`
    );
  }

  public notifyPassengersBeforeTour(): void {
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

        this.notificationService
          .sendSMS(notificationMessage, passenger.getPhoneNumber())
          .sendEmail(notificationMessage, passenger.getEmail())
          .sendPushNotification(notificationMessage, passenger.getID());
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
    // To identify passengers by booking, I should be using IDs but IDGAF.
    return this.passengers.find(
      (passenger) => passenger.name === booking.passenger.name
    )!;
  }
}
