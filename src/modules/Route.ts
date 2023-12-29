import { Location } from "../types/types";

export class Route {
  private routes: Route[] = [];
  private name: string;
  private forwardRoute: Location[];
  private backRoute?: Location[];
  public departureDate: Date;
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

  public getName(): string {
    return this.name;
  }

  public getForwardRoute(): Location[] {
    return this.forwardRoute;
  }

  public getBackRoute(): Location[] | undefined {
    return this.backRoute;
  }

  public getDepartureDate(): Date {
    return this.departureDate;
  }

  public getArrivalDate(): Date {
    return this.arrivalDate;
  }

  public setRoute(
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
}
