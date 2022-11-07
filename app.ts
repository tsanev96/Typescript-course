function add(n1: number, n2: number) {
  // return type of add func will be a number, typescript do it for us
  return n1 + n2;
}

const result = add(2, 10);

function printResult(num: number) {
  // return type is void, nothing is returned
  console.log("Result: ", num);
}

const test = printResult(result);
