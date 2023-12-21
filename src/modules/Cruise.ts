// Cruise.ts
import { Passenger } from "./Passenger";
import { Cabin } from "./Cabin";
import { CrewMember } from "./CrewMember";
import { CruiseRoute } from "./CruiseRoute";
import { CruiseCompany } from "./CruiseCompany";

export class Cruise {
  private passengers: Passenger[] = [];
  private cabins: Cabin[] = [];
  private crew: CrewMember[] = [];
  private notificationDaysThreshold: number = 7;
  private isTourStarted: boolean = false;
  private isTourCanceled: boolean = false;

  constructor(
    public route: CruiseRoute,
    public company: CruiseCompany,
    public startDate: Date
  ) {
    this.initCrew();
  }

  private initCrew() {
    this.crew.push(new CrewMember("Captain"));
    this.crew.push(new CrewMember("Mechanic"));
    this.crew.push(new CrewMember("Chef"));
    // Add more crew members as needed
  }

  addPassenger(passenger: Passenger) {
    this.passengers.push(passenger);
  }

  addCabin(cabin: Cabin) {
    this.cabins.push(cabin);
  }

  getPassengers(): Passenger[] {
    return this.passengers;
  }

  getAvailableCrew(): CrewMember[] {
    return this.crew;
  }

  assignTaskToCrew(crewRole: string, task: string) {
    const crewMember = this.crew.find((member) => member.role === crewRole);
    if (crewMember) {
      crewMember.assignDailyTask(task);
    } else {
      console.log(`Crew member with role ${crewRole} not found.`);
    }
  }

  trackTasksForCrew() {
    this.crew.forEach((crewMember) => {
      crewMember.trackTasks();
    });
  }

  notifyPassengers() {
    const currentDate = new Date();
    const daysRemaining = Math.floor(
      (this.startDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24)
    );

    if (daysRemaining === this.notificationDaysThreshold) {
      this.passengers.forEach((passenger) => {
        passenger.receiveNotification(
          "One week before the cruise starts. Please check-in and undergo a medical examination."
        );
      });
    }
  }

  startTour() {
    if (!this.isTourStarted && !this.isTourCanceled) {
      console.log("The tour has started!");
      // Add logic here for scheduled activities during the tour
      // For example, assigning daily tasks to crew members, organizing events, etc.
      this.isTourStarted = true;
    } else {
      console.log("The tour has already started or has been canceled.");
    }
  }

  cancelTour() {
    if (!this.isTourStarted && !this.isTourCanceled) {
      console.log("The tour has been canceled.");
      this.isTourCanceled = true;
    } else {
      console.log("The tour has already started or has been canceled.");
    }
  }

  rescheduleTour(newStartDate: Date) {
    if (!this.isTourStarted && !this.isTourCanceled) {
      console.log(
        `The tour has been rescheduled to ${newStartDate.toDateString()}.`
      );
      this.startDate = newStartDate;
    } else {
      console.log("The tour has already started or has been canceled.");
    }
  }
}
