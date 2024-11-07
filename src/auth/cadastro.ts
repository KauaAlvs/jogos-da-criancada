interface Cliente {
    nome: string;
    idade: number;
}

// Função para cadastrar um novo cliente e salvá-lo no localStorage
function cadastrarCliente(cliente: Cliente): void {
    // Recupera a lista de clientes do localStorage ou cria uma nova lista
    const clientes: Cliente[] = JSON.parse(localStorage.getItem('clientes') || '[]');

    // Adiciona o novo cliente à lista
    clientes.push(cliente);

    // Salva a lista atualizada no localStorage
    localStorage.setItem('clientes', JSON.stringify(clientes));

    alert('Cadastrado com sucesso!');
}

// Função para listar todos os clientes cadastrados
function listarClientes(): Cliente[] {
    // Retorna a lista de clientes armazenada no localStorage, ou uma lista vazia se não houver clientes
    return JSON.parse(localStorage.getItem('clientes') || '[]');
}

// Evento de submissão do formulário de cadastro
document.getElementById('formCadastro')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = (document.getElementById('nome') as HTMLInputElement).value;
    const idade = parseInt((document.getElementById('idade') as HTMLInputElement).value, 10);

    const cliente: Cliente = { nome, idade };

    // Chama a função para cadastrar o cliente
    cadastrarCliente(cliente);
});