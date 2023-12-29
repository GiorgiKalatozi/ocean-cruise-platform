import { NotificationService } from "../services/NotificationService";
import { Person } from "./Person";
import { BookingService } from "../services/BookingService";

export class Passenger extends Person {
  private readonly phoneNumber: string;
  private readonly email: string;
  private readonly ID: string;
  private readonly notificationService: NotificationService;
  private readonly bookings: BookingService[] = [];

  constructor(
    name: string,
    phoneNumber: string,
    email: string,
    ID: string,
    notificationService: NotificationService
  ) {
    super(name);
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.ID = ID;
    this.notificationService = notificationService;
  }

  public getID(): string {
    return this.ID;
  }

  public getPhoneNumber(): string {
    return this.phoneNumber;
  }

  public getEmail(): string {
    return this.email;
  }

  public notifyPassengers(message: string): void {
    this.bookings.forEach((booking) => {
      this.notificationService.sendSMS(message, booking.passenger.phoneNumber);
      this.notificationService.sendEmail(message, booking.passenger.email);
      this.notificationService.sendPushNotification(
        message,
        booking.passenger.ID
      );
    });
  }
}
