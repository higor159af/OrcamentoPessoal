import { Bd } from "./Bd.js";
import { Despesa } from "./Despesa.js";
import { pesquisaDespesa } from "./PesquisaDespesa.js";
import { removeDespesas } from "./RemoveDespesa.js";
import { carregaListaDespesas } from "./listaDespesas.js";

let year = document.getElementById("ano");
let month = document.getElementById("mes");
let day = document.getElementById("dia");
let type = document.getElementById("tipo");
let description = document.getElementById("descricao");
let valor = document.getElementById("valor");
let btnCadastrar = document.getElementById("btn");

// se existir ID btn cria objeto com dados inseridos nos campos
if (btnCadastrar) {
  btnCadastrar.addEventListener("click", () => {
    let despesa = new Despesa(
      year.value,
      month.value,
      day.value,
      type.value,
      description.value,
      valor.value

    );
    // console.log(despesa);

    // cria uma nova instancia de objeto Bd/Banco de Dados
    let bd = new Bd();

    let titleModal = document.getElementById("textmodal");
    let descriptionModal = document.getElementById("descriptionModal");
    let btnModal = document.getElementById("btnBack");

    // Validação de Dados
    if (despesa.validarDados()) {
      //Grava Dados
      bd.gravar(despesa);

      titleModal.innerText = "Registros Gravados";
      titleModal.className = "modal-title text-success";
      descriptionModal.innerText = "Registros gravados com sucesso.";
      btnModal.innerText = "Voltar";
      btnModal.className = "btn btn-success";
      $("#modalRegistroGravacao").modal("show");

      // Limpa Dados após gravacao
      year.value = "";
      month.value = "";
      day.value = "";
      type.value = "";
      description.value = "";
      valor.value = "";
      // console.log("Dados Corretos");
    } else {
      // Alerta campo em branco
      titleModal.innerText = "Erro nos registros";
      titleModal.className = "modal-title text-danger";
      descriptionModal.innerText = "Existem campos obrigatorios em branco.";
      btnModal.innerText = "Voltar e corrigir";
      btnModal.className = "btn btn-danger";
      // console.log("Dados invalidos");
      $("#modalRegistroGravacao").modal("show");
    }

    // gravar(despesa);
  });
}

// Pagina Consulta
let pageConsulta = document.getElementById("pageConsulta");
// verifica existencia de ID pageConsulta
if (pageConsulta) {
  window.addEventListener("load", () => {
    carregaListaDespesas()
    removeDespesas()
  });

  pesquisaDespesa();
}
