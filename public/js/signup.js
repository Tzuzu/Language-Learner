const signupFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#floatingInput').value.trim();
  const password = document.querySelector('#floatingPassword').value.trim();
  const confirmPassword = document.querySelector('#floatingPassword2').value.trim();

  if (email && password && confirmPassword) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector('#sign-up').addEventListener('submit', signupFormHandler);
