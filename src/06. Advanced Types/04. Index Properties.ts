// in this keys we always will have email property
// the prop property means we have a key of type string with a value of type string and we can add as much as we want
interface ErrorContainer {
  email: string;
  [prop: string]: string;
}

const errorContainer: ErrorContainer = {
  email: "email@example.com",
  prop1: "prop1",
  prop2: "prop2",
};

interface NumbersContainer {
  [num: number]: string;
}

const romanNumber: NumbersContainer = {
  10: "X",
  20: "XX",
};
