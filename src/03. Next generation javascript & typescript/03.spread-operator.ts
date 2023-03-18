const hobbies = ["Sports", "Cooking", "Climbing", "Running"];

// spread operator
const activeHobbies = ["Hiking", ...hobbies];
// activeHobbies.push(...hobbies)

const person = {
  firstName: "Radoslav",
  age: 26,
};

const copiedPerson = { ...person }; // no mutation
