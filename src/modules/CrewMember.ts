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
}
