import { CabinType } from "../types/enums";
import { BookingService } from "../services/BookingService";
import { CrewMember } from "./CrewMember";
import { Discount } from "./Discount";
import { RecreationalActivity } from "./RecreationalActivity";

export class CruiseCompany {
  private readonly bookings: BookingService[] = [];
  private readonly crewMembers: CrewMember[] = [];
  private readonly discounts: Discount[] = [];

  constructor(
    public name: string,
    public cabinType: CabinType,
    public recreationalActivities: RecreationalActivity[]
  ) {}

  getCrewMembers(): CrewMember[] {
    return this.crewMembers;
  }

  addCrewMember(crewMember: CrewMember): void {
    this.crewMembers.push(crewMember);
  }

  addDiscount(discount: Discount): void {
    this.discounts.push(discount);
  }

  bookCruise(booking: BookingService): void {
    this.bookings.push(booking);
    console.log("Booking successful!");
  }
}
