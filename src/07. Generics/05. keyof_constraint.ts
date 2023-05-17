/*
keyof T ensures that the passed key
will be existing in T
that way we do not loose the types
*/
const extractAndConvert = <T extends object>(obj: T, key: keyof T) => obj[key];

// will be of type number
const age = extractAndConvert({ age: 30 }, "age");

// will be of type string
const name = extractAndConvert({ name: "Radoslav" }, "name");
