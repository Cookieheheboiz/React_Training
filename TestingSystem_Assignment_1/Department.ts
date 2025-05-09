export class Department {
    private id: number;
    private name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;

    }

    getId(): number {  
        return this.id;
    }

    getName(): string {
        return this.name;
    }

}

export const department1 = new Department(1, "Dev");

export function printDepartment(department: Department): void {
    console.log("DepartmentID: " + department.getId() + " DepartmentName: " + department.getName());
}