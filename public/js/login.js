const loginFormHandler = async (event) => {
  event.preventDefault();
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
  if (email && password) {
    try {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        console.log(response);
        alert('Logged In');
        document.location.replace('/');
      } else {
        console.log(response);
        alert(response.statusText);
      }
    } catch (error) {
      console.log(error);
      alert('An error occurred during login.');
    }
  }
};

document.querySelector('#login-form').addEventListener('submit', loginFormHandler);