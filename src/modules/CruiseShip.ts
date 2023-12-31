import { CabinType } from "../types/enums";
import { CrewMember } from "./CrewMember";
import { RecreationalActivity } from "./RecreationalActivity";

export class CruiseShip {
  private readonly name: string;
  private readonly numberOfCabins: number;
  private readonly crewMembers: CrewMember[] = [];
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

  public getCrewMembers(): CrewMember[] {
    return this.crewMembers;
  }

  public addCrewMember(crewMember: CrewMember): void {
    this.crewMembers.push(crewMember);
  }

  public removeCrewMember(crewMember: CrewMember): void {
    const index = this.crewMembers.indexOf(crewMember);
    if (index !== -1) {
      this.crewMembers.splice(index, 1);
      console.log(`${crewMember.getName()} has been removed from the crew.`);
    } else {
      console.log(`${crewMember.getName()} is not in the crew.`);
    }
  }

  public getIncludedActivities(cabinType: CabinType): RecreationalActivity[] {
    return this.recreationalActivities[cabinType];
  }
}
