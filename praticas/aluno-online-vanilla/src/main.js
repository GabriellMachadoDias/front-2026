import './style.css'

const cabecalho = document

const form = document.getElementById('loginForm');
const matriculaInput = document.getElementById('matricula');
const senhaInput = document.getElementById('senha');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    document.getElementById('error-matricula').textContent = "";
    document.getElementById('error-senha').textContent = "";

    let isValido = true;

    if (!matriculaInput.value.trim()) {
        document.getElementById('error-matricula').textContent = "O campo matrícula é obrigatório.";
        isValido = false;
    }

    if (!senhaInput.value.trim()) {
        document.getElementById('error-senha').textContent = "O campo senha é obrigatório.";
        isValido = false;
    }

    if (isValido) {
        window.location.href = "dashboard.html"; 
    }
});