function logout() {
    firebase.auth().signOut().then(() => {
        window.location.href = "../views/login.html"
    }).catch(() => {
        alert("Erro ao fazer logout");
    })
}