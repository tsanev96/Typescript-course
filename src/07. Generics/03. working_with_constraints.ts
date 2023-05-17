/*
The return type of the function is an object, which means
we expliclity want to pass only object params
so we extend the types  - T, U
*/
function mergeObj<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
