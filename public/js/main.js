var signupBtn = document.getElementById("signup-button")

signupBtn.addEventListener("click", signupRedirect);

function signupRedirect() {
    window.location.href = "/signup"
}