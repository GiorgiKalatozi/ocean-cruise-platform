import { CabinType } from "../types";
import { Payment } from "./Payment";

export class Booking {
  constructor(
    public tourName: string,
    public selectedCabinType: CabinType,
    public payment: Payment,
    public additionalServices: string[] = []
  ) {}
}
