// default number if nothing is passed, they need to be last
const add = (a: number, b: number = 1) => a + b;

const printOtput = (output: string | number) => console.log(output);

printOtput(add(5));
