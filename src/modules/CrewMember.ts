import { CrewMemberType } from "../types/enums";
import { Person } from "./Person";
import { TaskService } from "../services/TaskService";

export class CrewMember extends Person {
  private readonly dailyTasks: TaskService[] = [];
  private readonly generalTasks: TaskService[] = [];
  private readonly crewMemberType: CrewMemberType;

  constructor(
    name: string,
    crewMemberType: CrewMemberType,
    private taskService: TaskService
  ) {
    super(name);
    this.crewMemberType = crewMemberType;
    this.taskService = taskService;
  }

  getName() {
    return this.name;
  }

  assignDailyTask(task: TaskService): void {
    this.dailyTasks.push(task);
    this.taskService.completeTask;
  }

  // assignGeneralTask(task: Task): void {
  //   this.generalTasks.push(task);
  // }

  // updateTaskStatus(task: Task, isCompleted: boolean): void {
  //   task.isCompleted = isCompleted;
  // }

  // getDailyTasks(): Task[] {
  //   return this.dailyTasks || [];
  // }

  // getGeneralTasks(): Task[] {
  //   return this.generalTasks;
  // }

  getCrewMemberType(): CrewMemberType {
    return this.crewMemberType;
  }
}
