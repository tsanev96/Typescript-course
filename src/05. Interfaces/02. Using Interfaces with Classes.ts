namespace Interfaces {
  interface PersonInterface {
    name: string;
    greet: (phrase: string) => void;
  }

  // implements PersonInterface, AnotherInterface
  class Person implements PersonInterface {
    constructor(public name: string, public age: number) {
      this.name = name;
      this.age = age;
    }

    greet(phrase: string) {
      console.log(`${phrase} ${this.name}`);
    }
  }

  const person = new Person("Radoslav", 25);
  person.greet("Hi there, my name is ");
}
