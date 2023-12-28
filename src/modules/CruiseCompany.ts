import { CabinType } from "../types/enums";
import { Location } from "../types/types";
import { BookingService } from "../services/BookingService";
import { CrewMember } from "./CrewMember";
import { Discount } from "./Discount";
import { RecreationalActivity } from "./RecreationalActivity";
import { Route } from "./Route";

export class CruiseCompany {
  private readonly routes: Route[] = [];
  private readonly bookings: BookingService[] = [];
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

  getBookings(): BookingService[] {
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
    this.routes.push(
      new Route(name, forwardRoute, departureDate, arrivalDate, backRoute)
    );
  }

  bookCruise(booking: BookingService): void {
    this.bookings.push(booking);
    console.log("Booking successful!");
  }
}
