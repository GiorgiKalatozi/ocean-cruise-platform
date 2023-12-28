import { Passenger } from "../modules/Passenger";
import { Payment } from "../modules/Payment";
import { Route } from "../modules/Route";
import { CabinType } from "../types/enums";

export class BookingService {
  constructor(
    public passenger: Passenger,
    public route: Route,
    public tourName: string,
    public selectedCabinType: CabinType,
    public payment: Payment,
    public additionalServices: string[] = []
  ) {}

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
