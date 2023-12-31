import { NotificationService } from "../services/NotificationService";
import { TaskService } from "../services/TaskService";
import { CrewMemberType } from "../types/enums";
import { Passenger } from "./Passenger";

export class CrewMember extends Passenger {
  private readonly crewMemberType: CrewMemberType;
  private readonly assignedTasks: TaskService[] = [];
  private readonly taskService: TaskService;

  constructor(
    name: string,
    phoneNumber: string,
    email: string,
    ID: string,
    notificationService: NotificationService,
    crewMemberType: CrewMemberType,
    taskService: TaskService
  ) {
    super(name, phoneNumber, email, ID, notificationService);
    this.crewMemberType = crewMemberType;
    this.taskService = taskService;
  }

  public getCrewMemberType(): CrewMemberType {
    return this.crewMemberType;
  }

  public assignTask(task: TaskService): void {
    this.assignedTasks.push(task);
    this.taskService.assignDailyTask(this, task);
  }

  public unassignTask(task: TaskService): void {
    const taskIndex = this.assignedTasks.indexOf(task);
    if (taskIndex !== -1) {
      this.assignedTasks.splice(taskIndex, 1);
      this.taskService.taskUnassignment(this, task);
    }
  }
}
