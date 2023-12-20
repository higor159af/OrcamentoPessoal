import { Bd } from "./Bd.js";
import { Despesa } from "./Despesa.js";
import { carregaListaDespesas } from "./listaDespesas.js";

export function pesquisaDespesa() {
  let btnPesquisa = document.getElementById("btnPesquisa");
  let bd = new Bd();
  btnPesquisa.addEventListener("click", () => {
    let year = document.getElementById("ano").value;
    let month = document.getElementById("mes").value;
    let day = document.getElementById("dia").value;
    let type = document.getElementById("tipo").value;
    let description = document.getElementById("descricao").value;
    let valor = document.getElementById("valor").value;

    let despesa = new Despesa(year, month, day, type, description, valor);

    // console.log(despesa)

    let despesas = bd.pesquisar(despesa);
    carregaListaDespesas(despesas, true)
  });
}
