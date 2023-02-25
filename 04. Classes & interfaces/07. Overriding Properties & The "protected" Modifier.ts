namespace DepartmentNamespace {
  class Department {
    public name: string;
    protected employees: string[] = [];
    readonly id: string;

    // private properties are avaiable inside the class
    // protected properties are avaiable in the sub class as well
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
      console.log(this.employees);
    }
  }

  class AccountingDepartment extends Department {
    constructor(readonly id: string, private reports: string[] = []) {
      super(id, "Accouting Department");
    }

    addReport(text: string) {
      this.reports.push(text);
    }

    // overriding
    addEmployee(name: string): void {
      if (name === "Radoslav") {
        return;
      }
      this.employees.push(name);
    }

    printReports() {
      console.log(this.reports);
    }
  }

  const accounting = new AccountingDepartment("id2");

  accounting.addEmployee("Radoslav");
  accounting.addEmployee("Ivelina");
  accounting.printEmployeeInformation();
}
