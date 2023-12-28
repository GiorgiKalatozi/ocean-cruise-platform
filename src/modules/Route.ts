import { Location } from "../types/types";

export class Route {
  private name: string;
  private forwardRoute: Location[];
  private backRoute?: Location[];
  private departureDate: Date;
  private arrivalDate: Date;

  constructor(
    name: string,
    forwardRoute: Location[],
    departureDate: Date,
    arrivalDate: Date,
    backRoute?: Location[]
  ) {
    this.name = name;
    this.forwardRoute = forwardRoute;
    this.backRoute = backRoute;
    this.departureDate = departureDate;
    this.arrivalDate = arrivalDate;
  }

  getName(): string {
    return this.name;
  }

  getForwardRoute(): Location[] {
    return this.forwardRoute;
  }

  getBackRoute(): Location[] | undefined {
    return this.backRoute;
  }

  getDepartureDate(): Date {
    return this.departureDate;
  }

  getArrivalDate(): Date {
    return this.arrivalDate;
  }
}
