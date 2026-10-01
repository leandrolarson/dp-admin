import Database from "../databases/Database";
import FormalEmployee from "../model/FormalEmployee";
import Trainee from "../model/Trainee";
import MainScreen from "../view/MainScreen";

export default class MainController {
  public database: Database = new Database();

  constructor() {
    new MainScreen(this);
  }

  public getFormalEmployee(): FormalEmployee {
    return new FormalEmployee();
  }

  public getAllFormalEmployees(): FormalEmployee[] {
    return this.database.formalEmployees;
  }
}
