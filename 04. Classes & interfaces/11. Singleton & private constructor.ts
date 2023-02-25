namespace DepartmentNamespace {
  /**
   * we make the constructor private so we cannot create instance of the class
   */

  class AccountingDepartment {
    private static instance: AccountingDepartment;
    private constructor(private id: string, private department: string) {
      this.id = id;
      this.department = department;
    }

    static getInstance() {
      // this refer to the class so we can  use both - this and Department to call getInstance
      if (this.instance) {
        return this.instance;
      }
      this.instance = new AccountingDepartment("id2", "accounting department");
      return this.instance;
    }
  }

  const department = AccountingDepartment.getInstance();
  const department2 = AccountingDepartment.getInstance();
  console.log(department, department2);
}
