const hobbies = ["sports", "cooking"];
const person = {
  firstName: "Radoslav",
  age: 26,
};

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

const { firstName, age } = person;
