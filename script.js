document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('loginModal');
    const loginButton = document.getElementById('loginButton');
    const closeButton = document.querySelector('.close-button');
    const registerButton = document.getElementById('registerButton');
    const loginSubmitButton = document.getElementById('loginSubmitButton');
    const errorMessage = document.getElementById('errorMessage');

    let registeredUser = {
        email: '',
        password: ''
    };

    loginButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    registerButton.addEventListener('click', () => {
        const registerEmail = document.getElementById('registerEmail').value;
        const registerPassword = document.getElementById('registerPassword').value;

        if (registerEmail && registerPassword) {
            registeredUser.email = registerEmail;
            registeredUser.password = registerPassword;
            alert('Registro exitoso');
            document.getElementById('registerEmail').value = '';
            document.getElementById('registerPassword').value = '';
        } else {
            alert('Por favor, complete todos los campos de registro.');
        }
    });

    loginSubmitButton.addEventListener('click', () => {
        const loginEmail = document.getElementById('loginEmail').value;
        const loginPassword = document.getElementById('loginPassword').value;

        if (loginEmail === registeredUser.email && loginPassword === registeredUser.password) {
            alert('Inicio de sesión exitoso');
            modal.style.display = 'none';
            errorMessage.style.display = 'none';
            document.getElementById('loginEmail').value = '';
            document.getElementById('loginPassword').value = '';
        } else {
            errorMessage.style.display = 'block';
        }
    });
});
