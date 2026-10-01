import Employee from "./Employee";
import { Department } from "./enum/Department";
import { Position } from "./enum/Position";

export default class FormalEmployee extends Employee {
  private salary!: number;
  private department!: Department;
  private position!: Position;

  public getSalary(): number {
    return this.salary;
  }

  public setSalary(salary: number): void {
    this.salary = salary;
  }

  public getDepartment(): Department {
    return this.department;
  }

  public setDepartment(department: Department): void {
    this.department = department;
  }

  public getPosition(): Position {
    return this.position;
  }

  public setPosition(position: Position): void {
    this.position = position;
  }
}
