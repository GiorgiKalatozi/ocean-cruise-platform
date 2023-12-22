import { CabinType } from "../types/enums";
import { Route } from "../types/interfaces";
import { Location } from "../types/types";
import { Booking } from "./Booking";
import { CrewMember } from "./CrewMember";
import { Discount } from "./Discount";
import { RecreationalActivity } from "./RecreationalActivity";

export class CruiseCompany {
  private readonly routes: Route[] = [];
  private readonly bookings: Booking[] = [];
  private readonly crewMembers: CrewMember[] = [];
  private readonly discounts: Discount[] = [];

  constructor(
    public name: string,
    public cabinType: CabinType,
    public recreationalActivities: RecreationalActivity[],
    public advanceBookingDiscountDays: number
  ) {}

  getRoutes(): Route[] {
    return this.routes;
  }

  getBookings(): Booking[] {
    return this.bookings;
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

  setRoute(
    name: string,
    forwardRoute: Location[],
    backRoute: Location[] | undefined,
    departureDate: Date,
    arrivalDate: Date
  ): void {
    this.routes.push({
      name,
      forwardRoute,
      backRoute,
      departureDate,
      arrivalDate,
    });
  }

  bookCruise(booking: Booking): void {
    this.bookings.push(booking);
    console.log("Booking successful!");
  }
}
