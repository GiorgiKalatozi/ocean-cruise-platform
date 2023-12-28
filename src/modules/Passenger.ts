import { NotificationService } from "../services/NotificationService";
import { Person } from "./Person";
import { BookingService } from "../services/BookingService";

export class Passenger extends Person {
  private readonly phoneNumber: string;
  private readonly email: string;
  private readonly deviceId: string;
  private readonly notificationService: NotificationService;
  private readonly bookings: BookingService[] = [];

  constructor(
    name: string,
    phoneNumber: string,
    email: string,
    deviceId: string,
    notificationService: NotificationService
  ) {
    super(name);
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.deviceId = deviceId;
    this.notificationService = notificationService;
  }

  getPhoneNumber(): string {
    return this.phoneNumber;
  }

  getEmail(): string {
    return this.email;
  }

  getDeviceId(): string {
    return this.deviceId;
  }

  public notifyPassengers(message: string): void {
    this.bookings.forEach((booking) => {
      this.notificationService.sendSMS(message, booking.passenger.phoneNumber);
      this.notificationService.sendEmail(message, booking.passenger.email);
      this.notificationService.sendPushNotification(
        message,
        booking.passenger.deviceId
      );
    });
  }
}
