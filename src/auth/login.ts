document.getElementById('loginForm')!.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    // Validar com os dados fixos: Leonardo Silva e 9
    if (username === 'Leonardo Silva' && password === '9') {
        alert('Login bem-sucedido!');
        window.location.href = '../index.html'; // Redireciona para a página principal
    } else {
        alert('Usuário ou senha inválidos!');
    }
});