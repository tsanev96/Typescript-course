const userInput = null;

// will return the fallback 'nullish coalescing' only if the userInput is null
const result = userInput ?? "nullish coalescing";

// using javascript way - this will trigger on all falsy values - 0, undefined, ''
const res = userInput || "fallback value";

console.log(res);
