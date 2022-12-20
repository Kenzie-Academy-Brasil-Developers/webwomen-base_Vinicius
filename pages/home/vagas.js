const sectionContainer = document.querySelector(".section__container");

let contId = 0;

function criarVagas(vagas) {
  vagas.forEach((vagaAtual) => {
    const divVaga = document.createElement("div");
    const h3Titulo = document.createElement("h3");
    const divVagaLocal = document.createElement("div");
    const spanInstituicao = document.createElement("span");
    const spanLocal = document.createElement("span");
    const pDescricao = document.createElement("p");
    const divModalidadeBotao = document.createElement("div");
    const spanModalidade = document.createElement("span");
    const botaoCandidatar = document.createElement("button");

    h3Titulo.innerText = vagaAtual.title;
    spanInstituicao.innerText = vagaAtual.enterprise;
    spanLocal.innerHTMLText = vagaAtual.location;
    pDescricao.innerText = vagaAtual.descrition;
    spanModalidade.innerText = vagaAtual.modalities[0];
    botaoCandidatar.innerText = "Candidatar";
    botaoCandidatar.id = `id_${contId}`;

    contId++;

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

        vagasSelecionadas(vagaAtual);
      } else if (botaoCandidatar.innerText === "Remover candidatura") {
        const divVagaSeleciondada = document.querySelector(
          `#vaga_${vagaAtual.id}`
        );

        divVagaSeleciondada.remove();

        let index = vagaObj.findIndex((elt) => elt.id === vagaAtual.id);

        vagaObj.splice(index, 1);

        let storageGet = JSON.parse(localStorage.getItem("Vaga"));

        let filtro = storageGet.filter((elemento) => {
          if (vagaAtual.id != elemento.id) {
            return true;
          } else {
            return false;
          }
        });

        localStorage.setItem("Vaga", JSON.stringify(filtro));

        botaoCandidatar.innerText = "Candidatar";

        cont--;
        if (cont == 0) {
          pNenhumaVaga.style.display = "flex";

          localStorage.setItem("Vaga", JSON.stringify([]));
        }
      }
    });
  });
}

criarVagas(jobsData);
