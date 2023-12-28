import { CrewMemberType } from "../types/enums";
import { Person } from "./Person";

export class CrewMember extends Person {
  private readonly crewMemberType: CrewMemberType;
  private readonly crewMembers: CrewMember[] = [];

  constructor(name: string, crewMemberType: CrewMemberType) {
    super(name);
    this.crewMemberType = crewMemberType;
  }

  getName() {
    return this.name;
  }

  getCrewMemberType(): CrewMemberType {
    return this.crewMemberType;
  }

  getCrewMembers(): CrewMember[] {
    return this.crewMembers;
  }

  addCrewMember(crewMember: CrewMember): void {
    this.crewMembers.push(crewMember);
  }

  removeCrewMember(crewMember: CrewMember): void {
    const index = this.crewMembers.indexOf(crewMember);
    if (index !== -1) {
      this.crewMembers.splice(index, 1);
      console.log(`${crewMember.getName()} has been removed from the crew.`);
    } else {
      console.log(`${crewMember.getName()} is not in the crew.`);
    }
  }
}
