// default number if nothing is passed, they need to be last
const add = (a: number, b: number = 1) => a + b;

const printOtput = (output: string | number) => console.log(output);

printOtput(add(5));

const hobbies = ["Sports", "Cooking", "Climbing", "Running"];

// spread operator
const activeHobbies = ["Hiking", ...hobbies];
// activeHobbies.push(...hobbies)

const person = {
  firstName: "Radoslav",
  age: 26,
};

const copiedPerson = { ...person }; // no mutation

// rest parameters
const addNumbers = (...numbers: number[]) => {
  return numbers.reduce((currResult, currValue) => currResult + currValue, 0);
};

const tupleExampleWithRest = (...numbers: [number, number, number]) =>
  console.log(numbers); // can accept only 3 numbers

const addedNumbers = addNumbers(1, 4, 23, 20);
console.log(addedNumbers);

// array and object desctructuring
const [hobby1, hobby2, ...remainingHobbies] = hobbies;

const { firstName, age } = person;
