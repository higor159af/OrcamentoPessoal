import { Bd } from "./Bd.js";

export function removeDespesas() {
  let bd = new Bd();
  let btnremove = document.querySelectorAll(".removeDespesa");
  btnremove.forEach((d) => {
    d.addEventListener("click", () => {
      bd.remover(d.id);

      let titleModal = document.getElementById("textmodal");
      let descriptionModal = document.getElementById("descriptionModal");
      let btnModal = document.getElementById("btnBack");

      titleModal.innerText = "Registro Exluído";
      titleModal.className = "modal-title text-success";
      descriptionModal.innerText = "Registro excluído com sucesso.";
      btnModal.innerText = "Voltar";
      btnModal.className = "btn btn-success";
      $("#modaldeleteGravacao").modal("show");
      btnModal.addEventListener("click", () => {
        location.reload();
      });
    });
  });
}
