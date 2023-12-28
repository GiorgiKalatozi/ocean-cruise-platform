import { CrewMember } from "./modules/CrewMember";
import { CruiseCompany } from "./modules/CruiseCompany";
import { CruiseCompanyWithNotification } from "./modules/CruiseCompanyWithNotification";
import { Discount } from "./modules/Discount";
import { Passenger } from "./modules/Passenger";
import { Payment } from "./modules/Payment";
import { RecreationalActivity } from "./modules/RecreationalActivity";
import { Route } from "./modules/Route";
import { BookingService } from "./services/BookingService";
import { NotificationService } from "./services/NotificationService";
import { TaskService } from "./services/TaskService";
import { CabinType, CrewMemberType } from "./types/enums";

const passenger = new Passenger(
  "Monkey D. Luffy",
  "+558-548-529",
  "luffy@example.com",
  "device123"
);

const recreationalActivities: RecreationalActivity[] = [
  new RecreationalActivity("Swimming", "Enjoy a refreshing swim in the pool"),
  new RecreationalActivity("Fishing", "Hunt Sharks and Whales"),
  new RecreationalActivity("Gaming", "Play Video games in the onboard room"),
  new RecreationalActivity("Yoga", "Relax with onboard yoga sessions"),
];

// const ADVANCE_BOOKING_DISCOUNT_DAYS = 120;

const cruiseCompany = new CruiseCompany(
  "Port Royal",
  CabinType.Business,
  recreationalActivities
);

const payment = new Payment(500, true);

// Create an instance of the Route class
const routeInstance = new Route(
  "Example Route",
  ["Batumi", "Sochi", "Antalya", "Alexandria", "City B"],
  new Date("2023-01-01"),
  new Date("2023-01-10"),
  ["Alexandria", "Antalya", "Sochi", "Batumi"]
);

const booking = new BookingService(
  passenger,
  routeInstance,
  "Tour to Awesome Destination",
  CabinType.Luxury,
  payment,
  ["Excursions"]
);

const task1 = new TaskService("Check navigation systems");
const task2 = new TaskService("Inspect engine components");
const task3 = new TaskService("Learn SOLID");
const task4 = new TaskService("Learn Design Patterns");

const crewMember1 = new CrewMember("John", CrewMemberType.Captain, task1);
const crewMember2 = new CrewMember("Jane", CrewMemberType.Chef, task2);
const crewMember3 = new CrewMember("Bob", CrewMemberType.Mechanic, task3);
const crewMember4 = new CrewMember("Bob", CrewMemberType.Cleaner, task4);

// Book the cruise
cruiseCompany.bookCruise(booking);

// Add crew members
cruiseCompany.addCrewMember(crewMember1);
cruiseCompany.addCrewMember(crewMember2);
cruiseCompany.addCrewMember(crewMember3);
cruiseCompany.addCrewMember(crewMember4);

// Get all crew members and their tasks
const crewMembers = cruiseCompany.getCrewMembers();
console.log("Crew Members:", crewMembers);

const promoCodeDiscount = new Discount(
  "Promo Code Discount",
  0.2,
  new Date("2024-02-11")
);

cruiseCompany.addDiscount(promoCodeDiscount);

const notificationService = new NotificationService();

const cruiseCompanyWithNotification = new CruiseCompanyWithNotification(
  "Port Royal",
  CabinType.Business,
  recreationalActivities,
  notificationService
);

// Notify passengers before the tour
cruiseCompanyWithNotification.notifyPassengersBeforeTour();

// Start the tour
cruiseCompanyWithNotification.beginTour();
