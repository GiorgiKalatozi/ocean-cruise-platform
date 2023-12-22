import { Location } from "../types";

export interface Route {
  name: string;
  forwardRoute: Location[];
  backRoute?: Location[]; // Optional back route
  departureDate: Date;
  arrivalDate: Date;
}
