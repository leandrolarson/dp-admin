import MainController from "../controller/MainController";
import promptSync from "prompt-sync";

export default class MainScreen {
  private prompt = promptSync();
  private controller: MainController;

  constructor(controller: MainController) {
    this.controller = controller;
    this.openFirstScreen();
  }

  private openFirstScreen(): void {
    let option: number = 0;
    while (option !== 3) {
      option = Number(
        this.prompt(
          "Select an option:\n1. Add Employee\n2. List Employees\n3. Exit\n",
        ),
      );
      switch (option) {
        case 1:
          this.registerScreen();
          break;
        case 2:
          console.log("List Employees");
          break;
        default:
          console.log("Invalid option. Please try again.");
          break;
      }
    }
  }

  private registerScreen(): void {
    let option: number = 0;
    while (option !== 3) {
      option = Number(
        this.prompt(
          "Select an option:\n1. Add Formal Employee\n2. Add Trainee\n3. Back\n",
        ),
      );
      switch (option) {
        case 1:
          this.addFormalEmployeeScreen();
          break;
        case 2:
          this.addTraineeScreen();
          break;
        default:
          console.log("Invalid option. Please try again.");
          break;
      }
    }
  }

  private addFormalEmployeeScreen(): void {
    let formalEmployee = this.controller.getFormalEmployee();
    formalEmployee.setName(this.prompt("Enter the employee's name: "));
    formalEmployee.setCpf(this.prompt("Enter the employee's CPF: "));
    formalEmployee.setSalary(
      Number(this.prompt("Enter the employee's salary: ")),
    );

    this.controller.database.formalEmployees.push(formalEmployee);

    console.log("Formal employee added successfully!");
  }

  private addTraineeScreen(): void {}
}
