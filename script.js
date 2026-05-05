// Cria um ARRAY para armazenar os usuários
let usuarios = [];
// Função para cadastrar um usuário
function cadastrarUsuario() {
    // Solicita os dados do usuário
    let nome = prompt("Digite o nome: ")
    let idade = prompt("Digite a idade: ")
    let email = prompt("Digite o email: ")
    let cidade = prompt("Digite a cidade: ")
    let telefone = prompt("Digite o telefone: ")

    // Cria um OBJETO 
    let usuario = {
        nome: nome,
        idade: idade,
        email: email,
        cidade: cidade,
        telefone: telefone
    }
    // Adiciona o objeto no ARRAY
    usuarios.push(usuario)
    // Mensagem de confirmação
    alert("Usuário cadastrado!")
}

// Função para listar os usuários
function listarUsuarios() {
    // Seleciona a área de exibição
    let div = document.getElementById("lista")
    // Limpa a área de exibição
    div.innerHTML = ""
    // Percorre o array de usuários
    for (let i = 0; i < usuarios.length; i++) {
        // Cria um parágrafo para cada usuário
        let p = document.createElement("p")
        // Mostra todas as informações 
        p.textContent =
        "Nome: " + usuarios[i].nome +
        " | Idade: " + usuarios[i].idade +
        " | Email: " + usuarios[i].email +
        " | Cidade: " + usuarios[i].cidade +
        " | Telefone: " + usuarios[i].telefone
        // Adiciona o parágrafo na tela
        div.appendChild(p)

    }
}
