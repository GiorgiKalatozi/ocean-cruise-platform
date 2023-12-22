import { Booking } from "./modules/Booking";
import { CrewMember } from "./modules/CrewMember";
import { CruiseCompany } from "./modules/CruiseCompany";
import { CruiseCompanyWithNotification } from "./modules/CruiseCompanyWithNotification";
import { Discount } from "./modules/Discount";
import { Passenger } from "./modules/Passenger";
import { Payment } from "./modules/Payment";
import { RecreationalActivity } from "./modules/RecreationalActivity";
import { Task } from "./modules/Task";
import { CabinType, CrewMemberType } from "./types/enums";
import { Route } from "./types/interfaces";

const passenger = new Passenger(
  "Monkey D. Luffy",
  "+558-548-529",
  "luffy@example.com",
  "device123"
);

// const cruiseShip = new CruiseShip(
//   100, // Number of cabins
//   [CabinType.Economy, CabinType.Business, CabinType.Luxury], // Cabin types
//   {
//     [CabinType.Economy]: ["Swimming"],
//     [CabinType.Business]: ["Gym", "Entertainment"],
//     [CabinType.Luxury]: ["Spa", "Fine Dining", "Excursions"],
//   },
//   {
//     [CabinType.Economy]: ["Massage"],
//     [CabinType.Business]: ["Private Tour"],
//     [CabinType.Luxury]: ["Personal Butler", "Helicopter Ride"],
//   }
// );

const recreationalActivities: RecreationalActivity[] = [
  { name: "Swimming Pool", price: 80 },
  { name: "We go gym", price: 50 },
];

const ADVANCE_BOOKING_DISCOUNT_DAYS = 120;

const cruiseCompany = new CruiseCompany(
  "Port Royal",
  CabinType.Business,
  recreationalActivities,
  ADVANCE_BOOKING_DISCOUNT_DAYS
);

// Set a route with two legs
cruiseCompany.setRoute(
  "Batumi to Alexandria",
  ["Batumi", "Istanbul", "Antalya", "Alexandria"],
  ["Alexandria", "Antalya", "Istanbul", "Batumi"],
  new Date("2024-01-01"),
  new Date("2024-01-10")
);

// Set another route with different back route
cruiseCompany.setRoute(
  "Batumi to Alexandria (Alternative Route)",
  ["Batumi", "Sochi", "Antalya", "Alexandria"],
  ["Alexandria", "Antalya", "Sochi", "Batumi"],
  new Date("2023-02-01"),
  new Date("2023-02-10")
);

const payment = new Payment(500, true);

const exampleRoute: Route = {
  name: "Example Route",
  forwardRoute: ["Batumi", "Sochi", "Antalya", "Alexandria"],
  backRoute: ["Alexandria", "Antalya", "Sochi", "Batumi"],
  departureDate: new Date("2023-01-01"),
  arrivalDate: new Date("2023-01-10"),
};

// Get all routes
const routes = cruiseCompany.getRoutes();
console.log("Available Routes:", routes);

const booking = new Booking(
  passenger,
  exampleRoute,
  "Tour to Awesome Destination",
  CabinType.Luxury,
  payment,
  ["Excursions"]
);

// Book the cruise
cruiseCompany.bookCruise(booking);

// Create crew members
const captain = new CrewMember("Jack Sparrow", CrewMemberType.Captain);
const mechanic = new CrewMember("Jason Statham", CrewMemberType.Mechanic);
const chef = new CrewMember("Gordon Ramsay", CrewMemberType.Chef);
const cleaner = new CrewMember("David Gogins", CrewMemberType.Cleaner);

// Add crew members
cruiseCompany.addCrewMember(captain);
cruiseCompany.addCrewMember(mechanic);
cruiseCompany.addCrewMember(chef);
cruiseCompany.addCrewMember(cleaner);

// Assign tasks to crew members
captain.assignGeneralTask(new Task("Lead the team to victory"));
mechanic.assignGeneralTask(new Task("Inspect engine"));
chef.assignDailyTask(new Task("Plan meals"));
cleaner.assignDailyTask(new Task("Clean everything"));

// Get all crew members and their tasks
const crewMembers = cruiseCompany.getCrewMembers();
console.log("Crew Members:", crewMembers);

const promoCodeDiscount = new Discount(
  "Promo Code Discount",
  0.2,
  new Date("2024-02-11")
);

cruiseCompany.addDiscount(promoCodeDiscount);

const cruiseCompanyWithNotification = new CruiseCompanyWithNotification(
  "Port Royal",
  CabinType.Business,
  recreationalActivities,
  ADVANCE_BOOKING_DISCOUNT_DAYS
);

// Notify passengers before the tour
cruiseCompanyWithNotification.notifyPassengersBeforeTour();

// Start the tour
cruiseCompanyWithNotification.beginTour();
