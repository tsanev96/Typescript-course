// type AddFunc = (a: number, b: number) => number;
interface AddFunc {
  (a: number, b: number): number;
}

const addnumber: AddFunc = (a, b) => a + b;
