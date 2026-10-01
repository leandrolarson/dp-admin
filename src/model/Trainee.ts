import Employee from "./Employee";

export default class Trainee extends Employee {
  private stipend!: number;
  private educationalInstitution!: string;

  public getStipend(): number {
    return this.stipend;
  }

  public setStipend(stipend: number): void {
    this.stipend = stipend;
  }

  public getEducationalInstitution(): string {
    return this.educationalInstitution;
  }

  public setEducationalInstitution(educationalInstitution: string): void {
    this.educationalInstitution = educationalInstitution;
  }
}
