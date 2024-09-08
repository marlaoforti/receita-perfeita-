function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa){

        section.innerHTML = `"<p class="item-resultado" > Nada foi encotrado. Você precisa digitar algo</p>"`
        return

    }
    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados HTML
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {

        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        ingredientes = dado.ingredientes.toLowerCase()

        if (titulo.includes(campoPesquisa) 
        || descricao.includes(campoPesquisa) 
        || tags.includes(campoPesquisa)
        || ingredientes.includes(campoPesquisa)) {

            // Cria uma nova div para cada resultado, formatando o HTML com template literals
        resultados += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <p class="descricao-meta">${dado.ingredientes}</p>
            <p class="descricao-meta">${dado. modoDePreparo}</p>
            <a href=${dado.link} target="blank">Video da receita</a>


            
        </div>
    `;

        }
              
    }
    if (!resultados){
        resultados = `"<p class="item-resultado"> Nada foi encotrado</p>"`
    }


    // Atualiza o conteúdo HTML da seção com os resultados construídos
    section.innerHTML = resultados;
}





