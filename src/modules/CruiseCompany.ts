import { Location, Route } from "../types";

export class CruiseCompany {
  private routes: Route[] = [];

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

  getRoutes(): Route[] {
    return this.routes;
  }
}
