import { RecreationalActivity } from "./RecreationalActivity";

// Cabin class to represent different types of cabins
export class Cabin {
  constructor(
    public type: string,
    public capacity: number,
    public basePrice: number,
    public activities: RecreationalActivity[]
  ) {}
}
