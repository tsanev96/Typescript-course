namespace Interfaces {
  interface PersonInterface {
    readonly name: string;
    greet: (phrase: string) => void;
  }

  // implements PersonInterface, AnotherInterface
  class Person implements PersonInterface {
    name: string;
    constructor(public n: string) {
      this.name = n;
    }

    greet(phrase: string) {
      console.log(`${phrase} ${this.name}`);
    }
  }

  const person = new Person("Radoslav");
  person.greet("Hi there, my name is ");
}
