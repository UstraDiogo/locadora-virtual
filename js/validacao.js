function login() { //Valida se o e-mail e senha estão corretos no firebase

    firebase.auth().signInWithEmailAndPassword(form.email().value, form.password().value).then(response => {
        window.location.href = "../views/home.html"
    }).catch(error => {
        alert(getErrorMessage(error));
    });
}

function getErrorMessage(error) {
    if (error.code == "auth/user-not-found") {
        return "E-mail não encontrado!";
    }
    if (error.code == "auth/wrong-password") {
        return "Senha incorreta!";
    }
    if (error.code == "auth/missing-email") {
        return "Obrigatório digitar o um e-mail!"
    } if (error.code == "auth/invalid-email") {
        return "E-mail invalido."

    }
    else {
        return error.message;
    }

}

function validateFields() {
    const emailValid = isEmailValid();
    const passwordValid = isPasswordValid();
    form.enterButton().disabled = !emailValid || !passwordValid;

}

function validateFieldsCadastro() {
    const emailValid = isEmailValid();
    const passwordValid = isPasswordValid();
    const nome = isNomeValid();
    form.enterButton().disabled = !nome || !emailValid || !passwordValid;

}

function emailErrors() {
    const email = form.email().value;

    form.emailRequiredError().style.display = email ? "none" : "block";

    form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";

}

function passwordErrors() {
    const password = form.password().value;
    if (!password) {
        form.passwordRequiredError().style.display = "block";
    } else {
        form.passwordRequiredError().style.display = "none";
    }
}

function isEmailValid() {
    const email = form.email().value;
    if (!email) {
        return false;
    }
    return validateEmail(email);
}

function isPasswordValid() {
    const password = form.password().value;
    if (!password) {
        return false;
    }
    return true;
}

function isNomeValid() {
    const nome = form.nome().value;
    if (!nome) {
        return false;
    }
    return true;
}

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}