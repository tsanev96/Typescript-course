let userInput: unknown;
let username: string;

userInput = 5;
userInput = "some text";
// username = userInput // will work only with any type if we dont have a type check
if (typeof userInput === "string") {
  username = userInput;
}

function generateError(message: string, code: number): never {
  throw { message, errorCode: code }; // crashes our script
}

const result = generateError("Internal server error", 500); // never type produces a value because of throw
console.log(result);
