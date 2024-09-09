const baseUrl = 'http://localhost:3000/api';

function addPerson(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const cpf = document.getElementById('cpf').value.trim();
    const phone = document.getElementById('phone').value.trim();

    if (!name || !cpf || !phone) {
        showMessage('Por favor, preencha todos os campos', false);
        return;
    }

    fetch(`${baseUrl}/persons`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, cpf, phone }),
    })
    .then(response => {
        if (!response.ok) throw new Error('Falha ao adicionar cadastro');
        return response.json();
    })
    .then(() => {
        showMessage('Cadastro realizado com sucesso!', true);
        document.getElementById('addForm').reset();
    })
    .catch(error => {
        console.error('Error:', error);
        showMessage('Falha ao adicionar cadastro', false);
    });
}

function showMessage(message, success) {
    const messageElement = document.querySelector('.message');

    if (messageElement) {
        messageElement.textContent = message;
        messageElement.style.display = 'block';
        messageElement.className = `message ${success ? 'success-message' : 'error-message'}`;
        setTimeout(() => {
            messageElement.style.display = 'none';
        }, 3000);
    }
}

// Event Listener - Adicionar cadastro
document.getElementById('addForm').addEventListener('submit', addPerson);
