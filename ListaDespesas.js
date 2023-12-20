import { Bd } from "./Bd.js";

export function carregaListaDespesas(despesas = [], filtro = false) {
  let bd = new Bd();
  // let despesas = [];
  if (despesas.length == 0 && filtro == false) {
    despesas = bd.retornaTodosRegistros();
  }

  // console.log(despesas);

  let listaDespesas = document.getElementById("listaDespesas");
  listaDespesas.innerText = "";

  //Faz um de X para Y com o Type
  despesas.forEach((d) => {
    // console.log(d);
    let typeList = "";

    switch (parseInt(d.type)) {
      case 1:
        typeList = "Alimentação";
        break;
      case 2:
        typeList = "Educação";
        break;
      case 3:
        typeList = "Lazer";
        break;
      case 4:
        typeList = "Saúde";
      default:
        typeList = "Transporte";
    }

    if (d.month.length == 1) {
      d.month = "0" + d.month;
    }

    //Insere linha na tabela
    let linha = listaDespesas.insertRow();
    //Insere colunas na tabela
    linha.insertCell(0).innerText = `${d.day}/${d.month}/${d.year}`;
    linha.insertCell(1).innerText = typeList;
    linha.insertCell(2).innerText = d.description;
    linha.insertCell(3).innerText = d.value;
    // criacao de btn remover despesa
    let btn = document.createElement("button");
    btn.className = "btn btn-danger removeDespesa";
    btn.innerHTML = '<i class="fas fa-times"</i>';
    btn.id = d.id
    linha.insertCell(4).append(btn);

    console.log(d);
  });

  // let tdData = document.createElement('td')
  // let tdType = document.createElement('td')
  // let tdDescription = document.createElement('td')
  // let tdValue = document.createElement('td')

  // listaDespesas.appendChild(listDespesatr)
  // listDespesatr.appendChild(tdData)
  // listDespesatr.appendChild(tdType)
  // listDespesatr.appendChild(tdDescription)
  // listDespesatr.appendChild(tdValue)
}
