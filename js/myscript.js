

function onChangeCadastro() {
    validateFieldsCadastro()
    emailErrors();
}

function onChangeEmail() {
    validateFields();
    emailErrors();
}

function onChangePassword() {
    validateFields();
    passwordErrors();
}
function RecoverEmail() {
    recoverPassword();
}


function recoverPassword() {
    showLoading();

    firebase.auth().sendPasswordResetEmail(form.email().value).then(() => {

        alert('Email enviado com sucesso. \nVerifique seu e-mail!');
        hideLoading();
        window.location.href = "./login.html";

    }).catch(error => {
        alert(getErrorMessage(error));
        hideLoading();
        form.email().value = '';
    });
}

const form = {
    email: () => document.getElementById('email'),
    password: () => document.getElementById('password'),
    nome: () => document.getElementById('nome'),
    enterButton: () => document.getElementById('enter-button'),
    emailRequiredError: () => document.getElementById('email-required-error'),
    emailInvalidError: () => document.getElementById('email-invalid-error'),
    passwordRequiredError: () => document.getElementById('password-required-error')
}

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        window.location.href = "../views/home/html";
    }
})