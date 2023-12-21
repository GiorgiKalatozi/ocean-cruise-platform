import { CabinType, Route } from "../types";
import { Passenger } from "./Passenger";
import { Payment } from "./Payment";

export class Booking {
  constructor(
    public passenger: Passenger,
    public route: Route,
    public tourName: string,
    public selectedCabinType: CabinType,
    public payment: Payment,
    public additionalServices: string[] = []
  ) {}
}
