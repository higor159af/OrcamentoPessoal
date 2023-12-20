export class Despesa {
  // recupera valores inseridos nos campos
  constructor(year, month, day, type, description, value) {
    this.year = year;
    this.month = month;
    this.day = day;
    this.type = type;
    this.description = description;
    this.value = value;
  }

  validarDados() {
    // verifica se campos estao vazio
    for (let i in this) {
      if (this[i] === "" || this[i] === undefined || this[i] === null) {
        return false;
      }
    }
    return true;
  }
}
