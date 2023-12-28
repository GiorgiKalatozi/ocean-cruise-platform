import { CabinType } from "../types/enums";
import { RecreationalActivity } from "./RecreationalActivity";

export class CruiseShip {
  private readonly numberOfCabins: number;
  private readonly cabinTypes: CabinType[];
  private readonly recreationalActivities: {
    [key in CabinType]: RecreationalActivity[];
  };

  constructor(
    numberOfCabins: number,
    cabinTypes: CabinType[],
    includedActivities: { [key in CabinType]: RecreationalActivity[] }
  ) {
    this.numberOfCabins = numberOfCabins;
    this.cabinTypes = cabinTypes;
    this.recreationalActivities = includedActivities;
  }

  getNumberOfCabins(): number {
    return this.numberOfCabins;
  }

  getCabinTypes(): CabinType[] {
    return this.cabinTypes;
  }

  getIncludedActivities(cabinType: CabinType): RecreationalActivity[] {
    return this.recreationalActivities[cabinType];
  }
}
