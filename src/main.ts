import { Cabin } from "./modules/Cabin";
import { CruiseCompany } from "./modules/CruiseCompany";
import { CruiseRoute } from "./modules/CruiseRoute";
import { OceanCruisePlatform } from "./modules/OceanCruisePlatform";
import { Passenger } from "./modules/Passenger";
import { RecreationalActivity } from "./modules/RecreationalActivity";

const cruiseCompany = new CruiseCompany("Ocean Voyages");
const platform = new OceanCruisePlatform(cruiseCompany);

const economyCabin = new Cabin("Economy", 100, 1000, []);
const luxuryCabin = new Cabin("Luxury", 20, 5000, [
  new RecreationalActivity("Spa", false, 100),
]);
const snorkelingActivity = new RecreationalActivity("Snorkeling", true, 0);

platform.addCabin(economyCabin);
platform.addCabin(luxuryCabin);
platform.addActivity(snorkelingActivity);

const route1 = new CruiseRoute(
  ["Batumi", "Sochi", "Antalya", "Alexandria"],
  14
);
const route2 = new CruiseRoute(
  ["Batumi", "Istanbul", "Santorini", "Mykonos"],
  10
);

platform.addRoute(route1);
platform.addRoute(route2);

platform.listCabins();
platform.listActivities();
platform.listRoutes();

const passenger1 = new Passenger("John Doe", platform);
const passenger2 = new Passenger("Jane Smith", platform);

passenger1.chooseAndBookCruise(route1, "Economy");
passenger2.chooseAndBookCruise(route2, "Luxury", true);

const cruises = platform.getCruises();
console.log("Available Cruises:");
cruises.forEach((cruise) => {
  console.log(
    `- Route: ${cruise.route.locations.join(
      " -> "
    )}, Start Date: ${cruise.startDate.toDateString()}`
  );
});

// Assume the first cruise is the one we want to start
// const selectedCruise = cruises[0];
// console.log(selectedCruise);

// selectedCruise?.notifyPassengers();
// selectedCruise?.startTour();
