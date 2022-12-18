class Department {
  name: string = "Default";

  constructor(n: string) {
    this.name = n;
  }
}

const financialDepartment = new Department("Financial");
console.log(financialDepartment);
