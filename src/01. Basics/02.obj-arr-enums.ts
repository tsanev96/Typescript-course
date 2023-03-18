enum Role {
  ADMIN, // ADMIN = 'Admin' or Admin = 5 ..., starting values is always 0
  AUTHOR,
  READ_ONLY,
}

type Person = {
  name: string;
  age: number;
  hobbies: string[];
  // role: [number, string]; // TUPLE TYPE
  role: Role;
};

// javacript way for ENUM
const roles = {
  ADMIN: 0,
  AUTHOR: 0,
};

const person: Person = {
  name: "Radoslav",
  age: 26,
  hobbies: ["hiking", "crossfit"],
  // role: [2, "AUTHOR"], // TUPLE
  role: Role.ADMIN,
};

// for TUPLE
// person.role.push('WE CAN PUSH ELEMENTS HERE NOW'); // we can still push with tuple type, its exceptional
// person.role[0] = "sd" // but we have compile error if we want to change it
// person.role = [0, "sd", "444"]; // compile error

for (const hobby of person.hobbies) {
  // access to string methods
  console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
  // ..
}
