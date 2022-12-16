function criarRenderizacaoLocalStorage(vaga) {
    const divVagaSeleciondada = document.createElement("div");
    const divVagaSeleciondadaTitle = document.createElement("div");
    const h3Titulo = document.createElement("h3");
    const imgLixeira = document.createElement("img");
    const divVagaLocal = document.createElement("div");
    const spanInstituicao = document.createElement("span");
    const spanLocal = document.createElement("span");
  
    divVagaSeleciondada.classList.add("vaga__selecionada");
    divVagaSeleciondadaTitle.classList.add("vaga__selecionada--title");
    imgLixeira.classList.add("lixeira");
    divVagaLocal.classList.add("vaga__local");
  
    h3Titulo.innerText = vaga.title;
    imgLixeira.src = "assets/img/Button_Options.svg";
    spanInstituicao.innerText = vaga.enterprise;
    spanLocal.innerText = vaga.location;
  
    divVagaSeleciondadaTitle.append(h3Titulo, imgLixeira);
    divVagaLocal.append(spanInstituicao, spanLocal);
    divVagaSeleciondada.append(divVagaSeleciondadaTitle, divVagaLocal);
    sectionVagasSelecionadas.appendChild(divVagaSeleciondada);
  
    pNenhumaVaga.style.display = "none";
  
    cont++;

    imgLixeira.addEventListener("click", () => {
        divVagaSeleciondada.remove();
    
        let vagaRemover = JSON.parse(localStorage.getItem("Vaga"));
    
        let filtroRemover = vagaRemover.filter((elt) => elt.id !== vaga.id);
    
        localStorage.setItem("Vaga", JSON.stringify(filtroRemover));
    
        cont--;
        if (cont == 0) {
          pNenhumaVaga.style.display = "flex";
        }
      });
  }
  