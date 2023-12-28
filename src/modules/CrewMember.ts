import { CrewMemberType } from "../types/enums";
import { Person } from "./Person";
import { TaskService } from "../services/TaskService";

export class CrewMember extends Person {
  private readonly crewMemberType: CrewMemberType;
  private readonly crewMembers: CrewMember[] = [];

  constructor(
    name: string,
    crewMemberType: CrewMemberType,
    private readonly taskService: TaskService
  ) {
    super(name);
    this.crewMemberType = crewMemberType;
    this.taskService = taskService;
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

  assignDailyTask(task: TaskService): void {
    this.taskService.taskAssignment(this, task);
  }
}
