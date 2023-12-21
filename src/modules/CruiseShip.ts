import { CabinType } from "../types";
import { RecreationalActivity } from "./RecreationalActivity";

export class CruiseShip {
  private readonly numberOfCabins: number;
  private readonly cabinTypes: CabinType[];
  private readonly includedActivities: {
    [key in CabinType]: RecreationalActivity[];
  };
  private readonly additionalFeeActivities: {
    [key in CabinType]: RecreationalActivity[];
  };

  constructor(
    numberOfCabins: number,
    cabinTypes: CabinType[],
    includedActivities: { [key in CabinType]: RecreationalActivity[] },
    additionalFeeActivities: { [key in CabinType]: RecreationalActivity[] }
  ) {
    this.numberOfCabins = numberOfCabins;
    this.cabinTypes = cabinTypes;
    this.includedActivities = includedActivities;
    this.additionalFeeActivities = additionalFeeActivities;
  }

  getCabinTypes(): CabinType[] {
    return this.cabinTypes;
  }

  getIncludedActivities(cabinType: CabinType): RecreationalActivity[] {
    return this.includedActivities[cabinType];
  }

  getAdditionalFeeActivities(cabinType: CabinType): RecreationalActivity[] {
    return this.additionalFeeActivities[cabinType];
  }
}
