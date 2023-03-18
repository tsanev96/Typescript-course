// using ! at the end we tell typescript the element will never return null
// const inputEl = <HTMLInputElement>document.getElementById('input-id')!;
const inputEl = document.getElementById("input-id") as HTMLInputElement;

const { value } = inputEl;

const inputEl2 = document.getElementById("input-id2");

if (inputEl2) {
  const val = (inputEl2 as HTMLInputElement).value;
}
