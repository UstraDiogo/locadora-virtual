showLoading();
firebase.auth().onAuthStateChanged(user => {
    if (user) {
        hideLoading();
        window.location.href = "../views/home.html"
    }
})