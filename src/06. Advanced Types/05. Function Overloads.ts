type Combinable = string | number;

/**
 * using function overload we can tell the explicit
 * return type of the function depending on the dynamic
 * params we pass
 */

function combineNumbers(a: number, b: number): number;
function combineNumbers(a: string, b: number): string;
function combineNumbers(a: number, b: string): string;
function combineNumbers(a: string, b: string): string;
function combineNumbers(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }

  // both are always numbers
  return a + b;
}

const result1 = combineNumbers(10, 2);
const mathSqr = Math.sqrt(result1);

const result2 = combineNumbers("10", "2");
const textLength = result2.length;
