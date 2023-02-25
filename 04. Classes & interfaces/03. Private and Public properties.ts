namespace DepartmentNamespace {
  class Department {
    public name: string;
    private employees: string[] = []; // private property that can be accessed only from inside the class

    constructor(n: string) {
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

  const financialDepartment = new Department("Financial");

  financialDepartment.describe();

  financialDepartment.addEmployee("Radoslav");
  financialDepartment.addEmployee("Ivelina");
}
// financialDepartment.employees[2] = "Not good"; // we wamt to avoid this

// converted to ES5
//  var Department = /** @class */ (function () {
//   function Department(n) {
//     this.name = "Default";
//     this.employees = [];
//     this.name = n;
// }
// Department.prototype.describe = function () {
//     // not really an arg
//     console.log("This is department ".concat(this.name));
//     // this refers back to the concrete instance of this class that was created and not global variable - financialDepartment object
// };
// Department.prototype.addEmployee = function (employee) {
//     this.employees.push(employee);
// };
// Department.prototype.printEmployeeInformation = function () {
//     console.log(this.employees.length);
//     console.log(this.employees);
// };
// return Department;
// }());
// var financialDepartment = new Department("Financial");
// financialDepartment.describe();
// financialDepartment.addEmployee("Radoslav");
// financialDepartment.addEmployee("Ivelina");
// financialDepartment.employees[2] = "Not good";
