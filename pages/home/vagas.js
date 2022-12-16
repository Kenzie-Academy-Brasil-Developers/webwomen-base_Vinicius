const sectionContainer = document.querySelector(".section__container");

function criarVagas(array) {
  array.forEach((elt) => {
    const divVaga = document.createElement("div");
    const h3Titulo = document.createElement("h3");
    const divVagaLocal = document.createElement("div");
    const spanInstituicao = document.createElement("span");
    const spanLocal = document.createElement("span");
    const pDescricao = document.createElement("p");
    const divModalidadeBotao = document.createElement("div");
    const spanModalidade = document.createElement("span");
    const botaoCandidatar = document.createElement("button");

    h3Titulo.innerText = elt.title;
    spanInstituicao.innerText = elt.enterprise;
    spanLocal.innerHTMLText = elt.location;
    pDescricao.innerText = elt.descrition;
    spanModalidade.innerText = elt.modalities[0];
    botaoCandidatar.innerText = "Candidatar";

    divVaga.classList = "vaga";
    divVagaLocal.classList = "vaga__local";
    pDescricao.classList = "descricao";
    divModalidadeBotao.classList = "modalidade--botao";
    spanModalidade.classList = "modalidade";
    botaoCandidatar.classList = "botao__candidatar";

    divVagaLocal.append(spanInstituicao, spanLocal);
    divModalidadeBotao.append(spanModalidade, botaoCandidatar);
    divVaga.append(h3Titulo, divVagaLocal, pDescricao, divModalidadeBotao);
    sectionContainer.appendChild(divVaga);

    botaoCandidatar.addEventListener("click", () => {
      if (botaoCandidatar.innerText === "Candidatar") {
        botaoCandidatar.innerText = "Remover candidatura";
        vagasSelecionadas(elt);
      } else  if(botaoCandidatar.innerText === "Remover candidatura"){
        const divVagaSeleciondada = document.querySelector(`#vaga_${elt.id}`) 

        divVagaSeleciondada.remove();

        let filtroRemover = vagaObj.filter((vaga) => vagaObj.splice(vaga, 1));

        localStorage.setItem("Vaga", JSON.stringify(filtroRemover));

        botaoCandidatar.innerText = "Candidatar";

        cont--;
        if (cont == 0) {
          pNenhumaVaga.style.display = "flex";
        }
      }
    });
  });
}

criarVagas(jobsData);
