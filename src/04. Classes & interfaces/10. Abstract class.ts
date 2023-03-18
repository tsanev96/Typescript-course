namespace DepartmentNamespace {
  /**
   * Abstract classes cannot be initialized, but only inherited from other classes
   * Abstract classes enforce all subclasses to have the methods that are marked as abstracted
   */
  abstract class Department {
    public name: string;
    protected employees: string[] = [];
    readonly id: string;

    constructor(id: string, n: string) {
      this.id = id;
      this.name = n;
    }

    abstract describe(this: Department): void;
  }

  class AccountingDepartment extends Department {
    constructor(readonly id: string, private reports: string[] = []) {
      super(id, "Accouting Department");
    }

    describe() {
      console.log("accounting department");
    }
  }

  const accounting = new AccountingDepartment("id2");
}
