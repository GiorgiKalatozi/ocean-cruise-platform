import { Location, Route } from "../types";
import { Booking } from "./Booking";
import { CrewMember } from "./CrewMember";

export class CruiseCompany {
  private readonly routes: Route[] = [];

  private readonly bookings: Booking[] = [];

  private readonly crewMembers: CrewMember[] = [];

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
