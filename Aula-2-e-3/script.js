// CÓDIGO QUE CRIEI ANTERIORMENTE - funcionou, mas o código orientado pela professora é melhor (mais limpo e fluído).

// function adicionarTarefa() {
//   let inputTarefa = document.getElementById("inputTarefa");
//   let tarefa = inputTarefa.value;

//   let mensagem = "Tarefa adicionada com sucesso!";
//   document.getElementById("mensagem").textContent = mensagem;

//   let listaTarefas = document.getElementById("listaTarefas");
//   let novaTarefa = document.createElement("li");

//   if (tarefa.trim() === "") {
//     mensagem = "Por favor, insira uma tarefa válida.";
//     document.getElementById("mensagem").textContent = mensagem;
//   } else {
//     novaTarefa.textContent = tarefa;
//     listaTarefas.appendChild(novaTarefa);
//   }
//   inputTarefa.value = "";
// }

function adicionarTarefa() {
  //Recebe o valor do input, inserida pelo usuário
  const inputTarefa = document.getElementById("inputTarefa");
  //e atribui a uma variável
  let tarefa = inputTarefa.value.trim();

  //mesma coisa com o <p> da mensagem
  const mensagem = document.getElementById("mensagem");

  //Valida se a tarefa é válida (não vazia)
  if (tarefa == "") {
    //erro
    let mensagemErro = "Por favor, insira uma tarefa válida.";
    mensagem.textContent = mensagemErro;
    mensagem.style.color = "#A34743";
  } else {
    //cria um novo item de lista e adiciona à lista de tarefas
    const listaTarefas = document.getElementById("listaTarefas");
    let novaTarefa = document.createElement("li");
    novaTarefa.textContent = tarefa;
    listaTarefas.appendChild(novaTarefa);

    //mensagem de confirmação
    let mensagemSucesso = "Tarefa adicionada com sucesso!";
    mensagem.textContent = mensagemSucesso;
    mensagem.style.color = "#28A745";
  }

  // Limpa o campo de entrada
  inputTarefa.value = "";
}
