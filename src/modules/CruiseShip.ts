import { CabinType } from "../types/enums";
import { RecreationalActivity } from "./RecreationalActivity";

export class CruiseShip {
  private readonly name: string;
  private readonly numberOfCabins: number;
  private readonly cabinTypes: CabinType;
  private readonly recreationalActivities: {
    [key in CabinType]: RecreationalActivity[];
  };

  constructor(
    name: string,
    numberOfCabins: number,
    cabinTypes: CabinType,
    includedActivities: { [key in CabinType]: RecreationalActivity[] }
  ) {
    this.name = name;
    this.numberOfCabins = numberOfCabins;
    this.cabinTypes = cabinTypes;
    this.recreationalActivities = includedActivities;
  }

  getShipName(): string {
    return this.name;
  }

  getNumberOfCabins(): number {
    return this.numberOfCabins;
  }

  getCabinTypes(): CabinType {
    return this.cabinTypes;
  }

  getIncludedActivities(cabinType: CabinType): RecreationalActivity[] {
    return this.recreationalActivities[cabinType];
  }
}
