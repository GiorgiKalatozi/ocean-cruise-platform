export enum CabinType {
  Economy = "Economy",
  Business = "Business",
  Luxury = "Luxury",
}

export type Location = string;

export interface Route {
  name: string;
  forwardRoute: Location[];
  backRoute?: Location[]; // Optional back route
  departureDate: Date;
  arrivalDate: Date;
}

export enum CrewMemberType {
  Captain = "Captain",
  Mechanic = "Mechanic",
  Chef = "Chef",
  Cleaner = "Cleaner",
}
