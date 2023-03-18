namespace DepartmentNamespace {
  class Department {
    public name: string;
    private employees: string[] = [];
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

  class ITDepartment extends Department {
    constructor(readonly id: string, public admins: string[]) {
      super(id, "IT Department"); // u need to use this after super
      this.admins = admins;
    }

    printAdmins() {
      console.log(this.admins);
    }
  }

  class AccountingDepartment extends Department {
    constructor(readonly id: string, private reports: string[] = []) {
      super(id, "Accouting Department");
    }

    addReport(text: string) {
      this.reports.push(text);
    }

    printReports() {
      console.log(this.reports);
    }
  }

  const it = new ITDepartment("id123", ["Radoslav", "Ivo", "Ivelina"]);

  it.printAdmins();

  const accounting = new AccountingDepartment("id2");

  accounting.addReport("report1 text");
  accounting.addReport("report2 text");
  accounting.printReports();
}
