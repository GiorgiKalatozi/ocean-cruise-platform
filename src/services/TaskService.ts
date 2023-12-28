import { CrewMember } from "../modules/CrewMember";

export class TaskService {
  constructor(
    public description: string,
    public isCompleted: boolean = false
  ) {}

  completeTask(): void {
    this.isCompleted = true;
  }

  getDescription(): string {
    return this.description;
  }

  assignDailyTask(crewMember: CrewMember, task: TaskService): void {
    console.log(
      `Task assigned to ${crewMember.getName()}: ${task.getDescription()}`
    );
  }

  taskStatusUpdate(crewMember: CrewMember, task: TaskService): void {
    console.log(
      `Task status updated by ${crewMember.getName()}: ${task.getDescription()} is completed: ${
        task.isCompleted
      }`
    );
  }
}
