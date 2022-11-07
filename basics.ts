function add(num1: number, num2: number, printResult: boolean, phrase: string) {
  console.log(typeof num1);
  // javascript way during run time
  if (typeof num1 !== "number" && typeof num2 === "number") {
    throw new Error("Incorrect input");
  }

  const result = num1 + num2;

  if (printResult) {
    console.log(phrase + result);
  }

  return result;
}

const num1 = 5;
const num2 = 8.3;
const printResult = true;
const phrase = "Result is: ";

const result = add(num1, num2, printResult, phrase);
