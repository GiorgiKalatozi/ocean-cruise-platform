import { BookingService } from "../services/BookingService";
import { NotificationService } from "../services/NotificationService";

export class Passenger {
  private readonly name: string;
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
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.ID = ID;
    this.notificationService = notificationService;
  }

  public getID(): string {
    return this.ID;
  }

  public getName(): string {
    return this.name;
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
