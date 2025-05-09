"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.department1 = exports.Department = void 0;
exports.printDepartment = printDepartment;
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
    }
    Department.prototype.getId = function () {
        return this.id;
    };
    Department.prototype.getName = function () {
        return this.name;
    };
    return Department;
}());
exports.Department = Department;
exports.department1 = new Department(1, "Dev");
function printDepartment(department) {
    console.log("DepartmentID: " + department.getId() + " DepartmentName: " + department.getName());
}
