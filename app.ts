class Department {
  private readonly id: string; // initialized only once and not changeable
  public name: string;
  private employees: string[] = [];

  constructor(id: string, n: string) {
    this.id = id;
    this.name = n;
  }

  describe(this: Department) {
    console.log(`This is department ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const financialDepartment = new Department("Financial", "id1");

financialDepartment.describe();

financialDepartment.addEmployee("Radoslav");
financialDepartment.addEmployee("Ivelina");
