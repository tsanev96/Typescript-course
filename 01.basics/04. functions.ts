function add(n1: number, n2: number) {
  // return type of add func will be a number, typescript do it for us
  return n1 + n2;
}

const result = add(2, 10);

function printResult(num: number) {
  // return type is void, nothing is returned, printing the result of the func will get us 'undefined'
  console.log("Result: ", num);
}

const test = printResult(result);

// let combineValues: Function; // any function, too GENERIC
let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = 5;

function addAndHandle(a: number, b: number, cb: (num: number) => void) {
  const result = a + b;
  cb(result);
}

addAndHandle(30, 30, (num) => console.log(num));
