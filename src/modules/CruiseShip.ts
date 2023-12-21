import { CabinType } from "../types";
import { RecreationalActivity } from "./RecreationalActivity";

export class CruiseShip {
  private numberOfCabins: number;
  private cabinTypes: CabinType[];
  private includedActivities: { [key in CabinType]: RecreationalActivity[] };
  private additionalFeeActivities: {
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