namespace Interfaces {
  interface Person {
    name: string;
    age: number;
    greet: (phrase: string) => void;
  }

  const person: Person = {
    name: "Radoslav",
    age: 26,
    greet(phrase: string) {
      console.log(`${phrase} ${this.name}`);
    },
  };
}
