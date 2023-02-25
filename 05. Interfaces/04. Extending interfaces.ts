namespace Interfaces {
  interface Named {
    name: string;
  }

  interface Greetable extends Named {
    greet: (phrase: string) => void;
  }

  class Person implements Greetable {
    name: string;
    constructor(n: string) {
      this.name = n;
    }

    greet(phrase: string) {
      console.log(`${phrase} ${this.name}`);
    }
  }

  const person = new Person("Radoslav");
  person.greet("Hi there, my name is ");
}
