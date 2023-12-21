import { Cabin } from "./Cabin";
import { RecreationalActivity } from "./RecreationalActivity";
import { CruiseCompany } from "./CruiseCompany";
import { Passenger } from "./Passenger";
import { CruiseRoute } from "./CruiseRoute";
import { Cruise } from "./Cruise";

export class OceanCruisePlatform {
  private cabins: Cabin[] = [];
  private activities: RecreationalActivity[] = [];
  public cruiseCompany: CruiseCompany;
  private routes: CruiseRoute[] = [];
  private cruises: Cruise[] = [];
  private bookingDiscountThreshold: number = 30; // Days before departure for booking discount

  constructor(cruiseCompany: CruiseCompany) {
    this.cruiseCompany = cruiseCompany;
  }

  getCruises(): Cruise[] {
    return this.cruises;
  }

  getCruiseCompany(): CruiseCompany {
    return this.cruiseCompany;
  }

  addCabin(cabin: Cabin) {
    this.cabins.push(cabin);
  }

  addActivity(activity: RecreationalActivity) {
    this.activities.push(activity);
  }

  addRoute(route: CruiseRoute) {
    this.routes.push(route);
  }

  addCruise(cruise: Cruise) {
    this.cruises.push(cruise);
  }

  listCabins() {
    console.log("Available Cabins:");
    this.cabins.forEach((cabin) => {
      console.log(
        `- ${cabin.type} (Capacity: ${cabin.capacity}, Price: $${cabin.basePrice})`
      );
    });
  }

  listActivities() {
    console.log("Available Activities:");
    this.activities.forEach((activity) => {
      const pricingInfo = activity.includedInCabin
        ? "Included in Cabin"
        : `$${activity.additionalFee} Additional Fee`;
      console.log(`- ${activity.name} (${pricingInfo})`);
    });
  }

  listRoutes() {
    console.log("Available Routes:");
    this.routes.forEach((route) => {
      console.log(
        `- Route: ${route.locations.join(" -> ")}, Duration: ${
          route.duration
        } days`
      );
    });
  }

  findCabinByType(type: string): Cabin | undefined {
    return this.cabins.find((cabin) => cabin.type === type);
  }

  calculateBookingDiscountDaysRemaining(cruise: Cruise): number {
    const currentDate = new Date();
    const daysRemaining = Math.floor(
      (cruise.startDate.getTime() - currentDate.getTime()) /
        (1000 * 60 * 60 * 24)
    );
    return daysRemaining;
  }

  calculateBookingDiscount(cruise: Cruise): number {
    const daysRemaining = this.calculateBookingDiscountDaysRemaining(cruise);
    if (daysRemaining >= this.bookingDiscountThreshold) {
      // Apply booking discount if booked within the specified period
      return 0.1; // 10% discount
    }
    return 0;
  }

  applyBookingDiscount(passenger: Passenger, cruise: Cruise): void {
    const discount = this.calculateBookingDiscount(cruise);
    passenger.applyDiscount(discount);
  }

  applyDiscountCode(passenger: Passenger, discountCode: string): void {
    // Logic to verify and apply discount code
    const validDiscounts = ["CODE1", "CODE2", "CODE3"]; // Example valid discount codes
    if (validDiscounts.includes(discountCode)) {
      passenger.applyDiscount(0.15); // Apply a 15% discount for valid discount codes
    } else {
      console.log("Invalid discount code.");
    }
  }
}
