import { Booking } from "./modules/Booking";
import { CrewMember } from "./modules/CrewMember";
import { CruiseCompany } from "./modules/CruiseCompany";
import { CruiseShip } from "./modules/CruiseShip";
import { Passenger } from "./modules/Passenger";
import { Payment } from "./modules/Payment";
import { Task } from "./modules/Task";
import { CabinType, CrewMemberType } from "./types";

const passenger1 = new Passenger("Monkey D. Luffy");
// const luffy = new CrewMember("luffy");
// const zoro = new CrewMember("Zoro");
// const sanji = new CrewMember("sanji");
// const nami = new CrewMember("nami");
// const usopp = new CrewMember("usopp");
// const brook = new CrewMember("brook");

const cruiseShip = new CruiseShip(
  100, // Number of cabins
  [CabinType.Economy, CabinType.Business, CabinType.Luxury], // Cabin types
  {
    [CabinType.Economy]: ["Swimming"],
    [CabinType.Business]: ["Gym", "Entertainment"],
    [CabinType.Luxury]: ["Spa", "Fine Dining", "Excursions"],
  },
  {
    [CabinType.Economy]: ["Massage"],
    [CabinType.Business]: ["Private Tour"],
    [CabinType.Luxury]: ["Personal Butler", "Helicopter Ride"],
  }
);

const cruiseCompany = new CruiseCompany();

// Set a route with two legs
cruiseCompany.setRoute(
  "Batumi to Alexandria",
  ["Batumi", "Istanbul", "Antalya", "Alexandria"],
  ["Alexandria", "Antalya", "Istanbul", "Batumi"],
  new Date("2023-01-01"),
  new Date("2023-01-10")
);

// Set another route with different back route
cruiseCompany.setRoute(
  "Batumi to Alexandria (Alternative Route)",
  ["Batumi", "Sochi", "Antalya", "Alexandria"],
  ["Alexandria", "Antalya", "Sochi", "Batumi"],
  new Date("2023-02-01"),
  new Date("2023-02-10")
);

// Get all routes
const routes = cruiseCompany.getRoutes();
console.log("Available Routes:", routes);

// Create a booking
const payment = new Payment(500, true); // Deposit payment of $500
const booking = new Booking(
  "Batumi to Alexandria",
  CabinType.Business,
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
