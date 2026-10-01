export default class Employee {
  private name!: string;
  private cpf!: string;
  private admission!: Date;
  private status!: boolean;

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getCpf(): string {
    return this.cpf;
  }

  public setCpf(cpf: string): void {
    this.cpf = cpf;
  }

  public getAdmission(): Date {
    return this.admission;
  }

  public setAdmission(admission: Date): void {
    this.admission = admission;
  }

  public getStatus(): boolean {
    return this.status;
  }

  public setStatus(status: boolean): void {
    this.status = status;
  }
}
