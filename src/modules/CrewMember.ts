export class CrewMember {
  private dailyTasks: string[] = [];
  private generalTasks: string[] = [];

  constructor(public role: string) {}

  assignDailyTask(task: string) {
    this.dailyTasks.push(task);
  }

  assignGeneralTask(task: string) {
    this.generalTasks.push(task);
  }

  trackTasks() {
    console.log(`${this.role}'s Tasks:`);
    console.log("Daily Tasks:", this.dailyTasks);
    console.log("General Tasks:", this.generalTasks);
  }
}
