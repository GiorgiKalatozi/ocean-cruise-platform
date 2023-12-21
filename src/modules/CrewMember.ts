import { CrewMemberType } from "../types";
import { Person } from "./Person";
import { Task } from "./Task";

export class CrewMember extends Person {
  private readonly dailyTasks: Task[] = [];
  private readonly generalTasks: Task[] = [];
  private readonly crewMemberType: CrewMemberType;

  constructor(name: string, crewMemberType: CrewMemberType) {
    super(name);
    this.crewMemberType = crewMemberType;
  }
  assignDailyTask(task: Task): void {
    this.dailyTasks.push(task);
  }

  assignGeneralTask(task: Task): void {
    this.generalTasks.push(task);
  }

  updateTaskStatus(task: Task, isCompleted: boolean): void {
    task.isCompleted = isCompleted;
  }

  getDailyTasks(): Task[] {
    return this.dailyTasks || [];
  }

  getGeneralTasks(): Task[] {
    return this.generalTasks;
  }

  getCrewMemberType(): CrewMemberType {
    return this.crewMemberType;
  }
}
