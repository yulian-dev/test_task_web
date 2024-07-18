const loginButton = document.getElementById('login');
const registerButton = document.getElementById('register');
const emailInput = document.getElementById('email-phone');
const passwordInput = document.getElementById('password');
const cancelButton = document.getElementById('cancel');

const isValidEmail = (email) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}

cancelButton.addEventListener('click', () => {
    const authBlock = document.querySelector('.authorization');
    authBlock.innerHTML = '<h2>Ну ладно, пака!</h2>';
})

emailInput.addEventListener('blur', (e) => {
    if (e.target.value === '') {
        emailInput.classList.remove('invalid');
    } else if (!isValidEmail(e.target.value)) {
        emailInput.classList.add('invalid');
    } else {
        emailInput.classList.remove('invalid');
    }
});

emailInput.addEventListener('focus', () => {
    emailInput.classList.remove('invalid');
});

loginButton.addEventListener('click', () => {
    if (emailInput.value && passwordInput.value) {
        if (isValidEmail(emailInput.value)) {
            alert('Вы успешно вошли в систему');
        } else {
            alert('Ошибка: неверный формат email');
        }
    } else {
        alert('Ошибка: неверный ввод');
    }
});

const updateAuthorizationBlock = (message) => {
    const authBlock = document.getElementById('authorization');
    authBlock.innerHTML = `<h2>${message}</h2>`;
}

cancelButton.addEventListener('click', () => {
    updateAuthorizationBlock('Ну ладно, пака!');
});

registerButton.addEventListener('click', () => {
    updateAuthorizationBlock('Ура, у нас теперь новый участник команды!');
});