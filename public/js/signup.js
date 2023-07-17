const signupFormHandler = async (event) => {
    event.preventDefault();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    const username = document.querySelector('#username').value.trim();
    console.log(username, email, password);
    if (username && email && password) {
        try {
            const response = await fetch('/api/user', {
                method: 'POST',
                body: JSON.stringify({ username, email, password }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                alert('Sign Up Successful');
                document.location.replace('/');
            } else {
                console.log(response);
                alert(response.statusText);
            }
        } catch (error) {
            console.log(error);
            alert('An error occurred during sign up.');
        }
    }
};

document
    .querySelector('#sign-up')
    .addEventListener('submit', signupFormHandler);
