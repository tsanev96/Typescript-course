// rest parameters
const addNumbers = (...numbers: number[]) => {
  return numbers.reduce((currResult, currValue) => currResult + currValue, 0);
};

/** can accept only 3 numbers */
const tupleExampleWithRest = (...numbers: [number, number, number]) =>
  console.log(numbers);

const addedNumbers = addNumbers(1, 4, 23, 20);
