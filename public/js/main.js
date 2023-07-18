var signupBtn = document.getElementById("signup-button")
var loginBtn = document.getElementById("login-button")

signupBtn.addEventListener("click", signupRedirect);
loginBtn.addEventListener("click", loginRedirect);

function signupRedirect() {
    window.location.href = "/signup"
}

function loginRedirect() {
    window.location.href = "/login"
}