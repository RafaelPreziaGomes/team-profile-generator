import Employee from "./Employee.js";

export default class Manager extends Employee {
  constructor(name, id, email, office) {
    super(name, id, email);
    this.office = office;
  }

  getName() {
    return this.name;
  }

  getID() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getOffice() {
    return this.office;
  }

  getRole() {
    return "Manager";
  }
}
