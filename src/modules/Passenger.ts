import { OceanCruisePlatform } from "./OceanCruisePlatform";
import { Cruise } from "./Cruise";
import { CruiseRoute } from "./CruiseRoute";

export class Passenger {
  private bookedCruise: Cruise | null = null;
  private discount: number = 0;
  private notifications: string[] = [];

  constructor(public name: string, private platform: OceanCruisePlatform) {}

  chooseAndBookCruise(
    route: CruiseRoute,
    cabinType: string,
    isDeposit: boolean = false
  ) {
    const selectedCabin = this.platform.findCabinByType(cabinType);
    if (selectedCabin) {
      const newCruise = new Cruise(
        route,
        this.platform.getCruiseCompany(),
        new Date()
      );
      this.bookedCruise = newCruise;
      newCruise.addPassenger(this);
      newCruise.addCabin(selectedCabin);
      console.log(
        `${
          this.name
        } has booked a ${cabinType} cabin on the ${route.locations.join(
          " -> "
        )} cruise.`
      );

      this.platform.applyBookingDiscount(this, newCruise);
      const paymentAmount = isDeposit
        ? selectedCabin.basePrice * 0.2
        : selectedCabin.basePrice;
      this.makePayment(paymentAmount);
    } else {
      console.log(`Cabin type ${cabinType} not found.`);
    }
  }

  makePayment(amount: number) {
    const discountedAmount = amount - amount * this.discount;
    if (this.bookedCruise) {
      // Logic to make payment
      console.log(
        `${this.name} has made a payment of $${discountedAmount.toFixed(
          2
        )} for the booked cruise.`
      );
    } else {
      console.log("No booked cruise found.");
    }
  }

  applyDiscount(discount: number): void {
    this.discount += discount;
  }

  receiveNotification(message: string): void {
    this.notifications.push(message);
    console.log(`${this.name} received a notification: ${message}`);
  }

  viewNotifications(): void {
    console.log(`${this.name}'s Notifications:`);
    this.notifications.forEach((notification) => {
      console.log("- " + notification);
    });
  }
}
