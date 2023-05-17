/** return type - array of strings */
const names: Array<string> = ["s"];

/** return type - promise string */
const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved promise");
  }, 2000);
});
