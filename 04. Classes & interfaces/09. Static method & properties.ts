namespace DepartmentNamespace {
  class Department {
    public name: string;
    protected employees: string[] = [];
    readonly id: string;

    // static method/properties are accessiable only on the class itself and not on instances of the class

    static fiscalYear = 2020;

    static createEmployee(name: string) {
      return { name: name };
    }

    constructor(id: string, n: string) {
      this.id = id;
      this.name = n;
    }
  }

  const employee1 = Department.createEmployee("Radoslav");

  console.log(employee1);
  console.log(Department.fiscalYear);
  const itDepartment = new Department("id", "itDepartment");
}
