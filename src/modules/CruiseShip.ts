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

  public getShipName(): string {
    return this.name;
  }

  public getNumberOfCabins(): number {
    return this.numberOfCabins;
  }

  public getCabinTypes(): CabinType {
    return this.cabinTypes;
  }

  public getIncludedActivities(cabinType: CabinType): RecreationalActivity[] {
    return this.recreationalActivities[cabinType];
  }
}
