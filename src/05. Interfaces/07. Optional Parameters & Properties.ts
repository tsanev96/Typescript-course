namespace Interfaces {
  interface PersonInterface {
    name?: string;
    greet: (phrase: string) => void;
  }

  class Person implements PersonInterface {
    // optional parameters with default value
    constructor(public name = "unknown", public age?: number) {
      if (age) {
        this.age = age;
      }
      this.name = name;
    }

    greet(phrase: string) {
      console.log(`${phrase} ${this.name}`);
    }
  }

  const person = new Person("Radoslav", 25);
  person.greet("Hi there, my name is ");
}
