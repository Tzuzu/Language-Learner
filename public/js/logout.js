const logout = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
<<<<<<< HEAD
        headers: { 'Content-Type': 'application/json' },
=======
        headers: { 'Content-Type': 'application/json' }
>>>>>>> b080c34bcce0cd915712186d33ae367e3254e982
    });

    if (response.ok) {
        document.location.replace('/login');
    } else {
        alert(response.statusText);
    }
};

<<<<<<< HEAD
document.querySelector('#logout').addEventListener('click', logout);
=======
document.querySelector('#logout').addEventListener('click', logout);
>>>>>>> b080c34bcce0cd915712186d33ae367e3254e982
