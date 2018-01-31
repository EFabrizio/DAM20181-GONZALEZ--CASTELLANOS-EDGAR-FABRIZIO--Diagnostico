function validar() {
    var un = document.loginform.user.value;
    var pw = document.loginform.pwd.value;
    var username = "admin";
    var password = "admin";
    if ((un == username) && (pw == password)) {
        window.location = 'login.html';
        return false;
    }else {
        alert ("Usuario o contraseña incorrecto.");
    }
}