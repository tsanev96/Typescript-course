type Admin = {
  name: string;
  privilages: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElavatedEmployee = Admin & Employee;

const perso: ElavatedEmployee = {
  name: "Radoslav",
  privilages: ["create-server"],
  startDate: new Date(),
};

type Combinable1 = string | number;
1;
