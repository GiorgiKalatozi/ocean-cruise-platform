import { CrewMember } from "./modules/CrewMember";
import { CruiseCompany } from "./modules/CruiseCompany";
import { Discount } from "./modules/Discount";
import { Passenger } from "./modules/Passenger";
import { RecreationalActivity } from "./modules/RecreationalActivity";
import { Route } from "./modules/Route";
import { BookingService } from "./services/BookingService";
import { NotificationService } from "./services/NotificationService";
import { PaymentService } from "./services/PaymentService";
import { TaskService } from "./services/TaskService";
import { CabinType, CrewMemberType } from "./types/enums";

const notificationService = new NotificationService();

const passenger1 = new Passenger(
  "Monkey D. Luffy",
  "+558-548-528",
  "luffy@example.com",
  "passenger1_id",
  notificationService
);
const passenger2 = new Passenger(
  "Naruto Uzumaki",
  "+558-548-528",
  "uzumaki@example.com",
  "passenger2_id",
  notificationService
);
const passenger3 = new Passenger(
  "Giorgi Kalatozi",
  "+558-548-528",
  "giorgi@example.com",
  "passenger3_id",
  notificationService
);
const passenger4 = new Passenger(
  "Obito Uchiha",
  "+558-548-528",
  "obito@example.com",
  "passenger3_id",
  notificationService
);

const recreationalActivities: RecreationalActivity[] = [
  new RecreationalActivity("Swimming", "Enjoy a refreshing swim in the pool"),
  new RecreationalActivity("Fishing", "Hunt Sharks and Whales"),
  new RecreationalActivity("Gaming", "Play Video games in the onboard room"),
  new RecreationalActivity("Yoga", "Relax with onboard yoga sessions"),
];

const cruiseCompany = new CruiseCompany(
  "Porto Franco",
  CabinType.Business,
  recreationalActivities,
  notificationService,
  [passenger1, passenger2, passenger3, passenger4]
);

const payment = new PaymentService(500, true);

const routeInstance = new Route(
  "Example Route",
  ["Batumi", "Sochi", "Antalya", "Alexandria", "City B"],
  new Date("2023-01-01"),
  new Date("2023-01-10"),
  ["Alexandria", "Antalya", "Sochi", "Batumi"]
);

const booking = new BookingService(
  passenger1,
  routeInstance,
  "Tour to Awesome Destination",
  CabinType.Luxury,
  payment,
  ["Excursions"]
);

// Book the cruise
cruiseCompany.bookCruise(booking);

const task1 = new TaskService("Check navigation systems");
const task2 = new TaskService("Inspect engine components");
const task3 = new TaskService("Learn SOLID");
const task4 = new TaskService("Learn Design Patterns");

const crewMember1 = new CrewMember(
  "Giorgi",
  passenger1.getPhoneNumber(),
  passenger1.getEmail(),
  passenger1.getID(),
  notificationService,
  CrewMemberType.Captain,
  task1
);

const crewMember2 = new CrewMember(
  "Luffy",
  passenger2.getPhoneNumber(),
  passenger2.getEmail(),
  passenger2.getID(),
  notificationService,
  CrewMemberType.Chef,
  task2
);
const crewMember3 = new CrewMember(
  "Naruto",
  passenger3.getPhoneNumber(),
  passenger3.getEmail(),
  passenger3.getID(),
  notificationService,
  CrewMemberType.Mechanic,
  task3
);
const crewMember4 = new CrewMember(
  "Obito",
  passenger4.getPhoneNumber(),
  passenger4.getEmail(),
  passenger4.getID(),
  notificationService,
  CrewMemberType.Cleaner,
  task4
);

// Add crew members
cruiseCompany.addCrewMember(crewMember1);
cruiseCompany.addCrewMember(crewMember2);
cruiseCompany.removeCrewMember(crewMember3);
cruiseCompany.removeCrewMember(crewMember4);

// Get all crew members and their tasks
const crewMembers = cruiseCompany.getCrewMembers();
console.log("Crew Members:", crewMembers);

const promoCodeDiscount = new Discount(
  "Promo Code Discount",
  0.2,
  new Date("2024-02-11")
);

cruiseCompany.applyDiscount(250, promoCodeDiscount);

// // Notify passengers before the tour
cruiseCompany.notifyPassengersBeforeTour();

// // Start the tour
cruiseCompany.beginTour();
