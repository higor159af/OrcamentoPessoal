import { carregaListaDespesas } from "./listaDespesas.js";

export class Bd {
  constructor() {
    // criamos um campo id no localStorage
    let id = localStorage.getItem("id");
    // verifica se o id inicial é nulo e seta como 0
    if (id === null) {
      localStorage.setItem("id", 0);
    }
  }

  //atribui proximo id
  getNextId() {
    let proximoId = parseInt(localStorage.getItem("id"));
    return proximoId + 1;
  }

  // grava os dados com o novo id e converte para JSON no LOcalStorage
  gravar(d) {
    let id = this.getNextId();

    localStorage.setItem(id, JSON.stringify(d));
    localStorage.setItem("id", id);
    // localStorage.removeItem('despesa', JSON.stringify(d))
  }

  pesquisar(despesa) {
    let despesasFiltradas = [];
    despesasFiltradas = this.retornaTodosRegistros();
    if (despesa.year != "") {
      despesasFiltradas = despesasFiltradas.filter(
        (d) => d.year == despesa.year
      );
    }
    if (despesa.month != "") {
      despesasFiltradas = despesasFiltradas.filter(
        (d) => d.month == despesa.month
      );
    }
    if (despesa.day != "") {
      despesasFiltradas = despesasFiltradas.filter((d) => d.day == despesa.day);
    }
    if (despesa.type != "") {
      despesasFiltradas = despesasFiltradas.filter(
        (d) => d.type == despesa.type
      );
    }
    if (despesa.description != "") {
      despesasFiltradas = despesasFiltradas.filter(
        (d) => d.description == despesa.description
      );
    }
    if (despesa.value != "") {
      despesasFiltradas = despesasFiltradas.filter(
        (d) => d.value == despesa.value
      );
    }

    return despesasFiltradas;
  }

  // Verifica o ultimo id e trnaforma JSOn em Objeto literal
  retornaTodosRegistros() {
    // console.log("retorna todos registros ok");
    let despesas = [];
    let id = localStorage.id;

    for (let index = 1; index <= id; index++) {
      let despesa = JSON.parse(localStorage.getItem(index));
      // console.log(index, despesa);
      if (despesa === null) {
        continue;
      }
      despesa.id = index;
      // adiciona os dados no array
      despesas.push(despesa);
    }
    return despesas;
  }

  remover(id) {
    localStorage.removeItem(id)
  }
}
