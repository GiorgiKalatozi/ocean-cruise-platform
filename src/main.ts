import { CrewMember } from "./modules/CrewMember";
import { CruiseCompany } from "./modules/CruiseCompany";
import { CruiseShip } from "./modules/CruiseShip";
import { Passenger } from "./modules/Passenger";
import { CabinType } from "./types";

const passenger1 = new Passenger("Monkey D. Luffy");
const luffy = new CrewMember("luffy");
const zoro = new CrewMember("Zoro");
const sanji = new CrewMember("sanji");
const nami = new CrewMember("nami");
const usopp = new CrewMember("usopp");
const brook = new CrewMember("brook");

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
