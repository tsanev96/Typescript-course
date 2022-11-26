// union type
// function combine(input1: number | string, input2: number | string) {
//   if (typeof input1 === "number" && typeof input2 === "number") {
//     return input1 + input2;
//   }

//   return input1.toString() + input2.toString();
// }

/** type aliases */
type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-string";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversation: ConversionDescriptor
  //   resultConversation: "as-number" | "as-string" // literal type
) {
  let result: Combinable;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversation === "as-number"
  ) {
    result = +input1 + +input2; // NaN if we pass string
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

const combineAges = combine(20, 25, "as-number");
const combineStringAges = combine("20", "25", "as-string");
const combineText = combine("hi ", "there", "as-string");

console.log(combineStringAges);
