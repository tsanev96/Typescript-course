interface Lengthy {
  length: number;
}

/*
  This ensure us that every elements we pass
  they will have a property `length`
  */
const getCountAndDescription = <T extends Lengthy>(elements: T) => {
  let description = "Got 0 elements";

  if (elements.length > 0) {
    description = `Got ${elements.length} elements`;
  }

  return [elements, description];
};

console.log(getCountAndDescription("some random text"));
console.log(getCountAndDescription(["crosffit", "strength development"]));
