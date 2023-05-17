function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// the generic types now gives us access to the object properties
const mergedObject = merge({ name: "rado" }, { age: 26 });
console.log(mergedObject.age);

// avoid, typescript already knows the values of the Types
const redudant = merge<{ name: string; hobbies: string[] }, { age: number }>(
  { name: "Radoslav", hobbies: ["crossfit"] },
  { age: 26 }
);
