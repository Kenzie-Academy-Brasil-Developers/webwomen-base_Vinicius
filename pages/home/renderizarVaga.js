function criarRenderizacaoLocalStorage(vagaLocalStorage) {
  const botaoId = document.querySelector(`#id_${vagaLocalStorage.id}`);

  const divVagaSeleciondada = document.createElement("div");
  const divVagaSeleciondadaTitle = document.createElement("div");
  const h3Titulo = document.createElement("h3");
  const imgLixeira = document.createElement("img");
  const divVagaLocal = document.createElement("div");
  const spanInstituicao = document.createElement("span");
  const spanLocal = document.createElement("span");

  divVagaSeleciondada.id = `vaga_${vagaLocalStorage.id}`;
  divVagaSeleciondada.classList.add("vaga__selecionada");
  divVagaSeleciondadaTitle.classList.add("vaga__selecionada--title");
  imgLixeira.classList.add("lixeira");
  divVagaLocal.classList.add("vaga__local");

  h3Titulo.innerText = vagaLocalStorage.title;
  imgLixeira.src = "assets/img/Button_Options.svg";
  spanInstituicao.innerText = vagaLocalStorage.enterprise;
  spanLocal.innerText = vagaLocalStorage.location;

  divVagaSeleciondadaTitle.append(h3Titulo, imgLixeira);
  divVagaLocal.append(spanInstituicao, spanLocal);
  divVagaSeleciondada.append(divVagaSeleciondadaTitle, divVagaLocal);
  sectionVagasSelecionadas.appendChild(divVagaSeleciondada);

  pNenhumaVaga.style.display = "none";

  cont++;

  if (botaoId.id[3] == vagaLocalStorage.id) {
    botaoId.innerText = "Remover candidatura";
  }
}
