namespace DepartmentNamespace {
  class Department {
    public name: string;
    protected employees: string[] = [];
    readonly id: string;

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
    private lastReport = "";

    constructor(readonly id: string, private reports: string[] = []) {
      super(id, "Accouting Department");
      this.lastReport = reports[0];
    }

    get mostRecentReport() {
      if (this.lastReport) {
        return this.lastReport;
      }
      throw new Error("There is no recent report");
    }

    set mostRecentReport(report: string) {
      this.addReport(report);
    }

    addReport(text: string) {
      this.reports.push(text);
      this.lastReport = text;
    }

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

  accounting.mostRecentReport = "most recent report";
  console.log(accounting.mostRecentReport);
  accounting.addEmployee("Radoslav");
  accounting.addEmployee("Ivelina");
  accounting.printEmployeeInformation();
}
