import { CrewMember } from "../modules/CrewMember";

export class TaskService {
  constructor(
    public description: string,
    public isCompleted: boolean = false
  ) {}

  public completeTask(): void {
    this.isCompleted = true;
  }

  public getDescription(): string {
    return this.description;
  }

  public assignDailyTask(crewMember: CrewMember, task: TaskService): void {
    console.log(
      `Task assigned to ${crewMember.getName()}: ${task.getDescription()}`
    );
  }

  public taskStatusUpdate(crewMember: CrewMember, task: TaskService): void {
    console.log(
      `Task status updated by ${crewMember.getName()}: ${task.getDescription()} is completed: ${
        task.isCompleted
      }`
    );
  }

  public taskUnassignment(crewMember: CrewMember, task: TaskService): void {
    console.log(
      `Task unassigned from ${crewMember.getName()}: ${task.getDescription()}`
    );
  }
}
