// script.js
const receitas = {
    "ovo leite": "Omelete", 
    "farinha leite": "Panqueca",
    "carne tomate": "Strogonoff",
    "cenoura chocolate" : " Bolo de Cenoura",
    "frango tomate" : "Strogonoff de Frango"
    // Adicione mais receitas aqui
  };
  
  function buscarReceita() {
    const ingrediente1 = document.getElementById('ingrediente1').value.toLowerCase();
    const ingrediente2 = document.getElementById('ingrediente2').value.toLowerCase();
    const chave = `${ingrediente1} ${ingrediente2}`;
  
    const resultado = document.getElementById('resultado');
    if (receitas[chave]) {
      resultado.textContent = `Sugestão: ${receitas[chave]}
        `;
    } else {
      resultado.textContent = "Não encontramos uma receita para esses ingredientes. Tente novamente.";
    }
  }