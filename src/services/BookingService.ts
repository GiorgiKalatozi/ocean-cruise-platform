import { Passenger } from "../modules/Passenger";
import { Route } from "../modules/Route";
import { CabinType } from "../types/enums";
import { PaymentService } from "./PaymentService";

export class BookingService {
  private readonly bookings: BookingService[] = [];

  constructor(
    public passenger: Passenger,
    public route: Route,
    public tourName: string,
    public selectedCabinType: CabinType,
    public payment: PaymentService,
    public additionalServices: string[] = []
  ) {}

  getBookings(): BookingService[] {
    return this.bookings;
  }

  isAdvanceBooking(advanceBookingDays: number): boolean {
    const currentDate = new Date();
    const departureDate = this.route.getDepartureDate();

    const dayInSeconds = 1000 * 3600 * 24;

    const timeDifference = departureDate.getTime() - currentDate.getTime();
    const daysDifference = timeDifference / dayInSeconds;

    return daysDifference >= advanceBookingDays;
  }

  applyAdvanceBookingDiscount(
    advanceBookingDiscountDays: number,
    discountPercentage: number
  ): void {
    if (this.isAdvanceBooking(advanceBookingDiscountDays)) {
      const discountAmount = (discountPercentage / 100) * this.payment.amount;
      this.payment.amount -= discountAmount;
      console.log(
        `Advance booking discount of ${discountPercentage}% applied.`
      );
    }
  }
}
