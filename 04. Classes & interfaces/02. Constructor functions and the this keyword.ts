namespace DepartmentNamespace {
  class Department {
    name: string = "Default";

    constructor(n: string) {
      this.name = n;
    }

    describe(this: Department) {
      // not really an arg
      console.log(`This is department ${this.name}`);
      // this refers back to the concrete instance of this class that was created and not global variable - financialDepartment object
    }
  }

  const financialDepartment = new Department("Financial");

  financialDepartment.describe();

  const financialDepCopy = {
    name: "This works",
    describe: financialDepartment.describe,
  }; // will be undefined, this refers to the thing which is responsible for calling a method (financialDepCopy), doesnt have a name

  financialDepCopy.describe();
}
