import { CabinType } from "../types";
import { CruiseCompany } from "./CruiseCompany";
import { NotificationService } from "./NotificationService";
import { RecreationalActivity } from "./RecreationalActivity";

export class CruiseCompanyWithNotification extends CruiseCompany {
  private readonly notificationService: NotificationService;

  constructor(
    name: string,
    cabinType: CabinType,
    recreationalActivities: RecreationalActivity[],
    advanceBookingDiscountDays: number
  ) {
    super(name, cabinType, recreationalActivities, advanceBookingDiscountDays);
    this.notificationService = new NotificationService();
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
    this.getBookings().forEach((booking) => {
      const tourStartDate = booking.route.departureDate.getTime();
      const notificationDate = new Date(tourStartDate - oneWeekInMillis);

      // Check if it's time to send the notification
      if (currentDate >= notificationDate) {
        const notificationMessage =
          "Your cruise is about to begin. Please check-in and undergo medical examination.";

        this.notificationService.sendSMS(
          notificationMessage,
          booking.passenger.phoneNumber
        );
        this.notificationService.sendEmail(
          notificationMessage,
          booking.passenger.email
        );
        this.notificationService.sendPushNotification(
          notificationMessage,
          booking.passenger.deviceId
        );
      }
    });
  }

  private notifyPassengers(message: string): void {
    this.getBookings().forEach((booking) => {
      this.notificationService.sendSMS(message, booking.passenger.phoneNumber);
      this.notificationService.sendEmail(message, booking.passenger.email);
      this.notificationService.sendPushNotification(
        message,
        booking.passenger.deviceId
      );
    });
  }
}
