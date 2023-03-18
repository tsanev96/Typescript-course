type Comb = string | number;

function addFunc(a: Comb, b: Comb) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }

  return a + b;
}

type A = {
  name: string;
  hobbies: string[];
};

type B = {
  name: string;
  age: number;
  address: string;
};

function printInformation(information: A | B) {
  console.log(information.name);

  if ("age" in information) {
    console.log(information.age);
  }

  if ("address" in information) {
    console.log(information.address);
  }
}

class Car {
  drive() {
    console.log("driving a car");
  }
}

class Truck {
  drive() {
    console.log("driving a truck");
  }

  loadCargo() {
    console.log("loading a cargo");
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  console.log(vehicle.drive());

  // after instanceof we know we have loadCargo
  if (vehicle instanceof Truck) {
    vehicle.loadCargo();
  }
}

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

const getAnimalSpeed = (animal: Animal) => {
  switch (animal.type) {
    case "bird":
      return animal.flyingSpeed;
    case "horse":
      return animal.runningSpeed;
    default:
      return null;
  }
};
