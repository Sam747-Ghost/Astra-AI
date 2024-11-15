const loginButton = document.getElementById('login-button');
const mainContainer = document.getElementById('main-container');
const loginContainer = document.getElementById('login-container');

loginButton.addEventListener('click', () => {
    const password = document.getElementById('password').value;
    if (password === 'samarth') { // Change 'yourpassword' to your desired password
        loginContainer.style.opacity = 0;
        loginContainer.style.visibility = 'hidden';
        mainContainer.style.display = 'flex';
        setTimeout(() => {
            mainContainer.classList.add('show-main');
        }, 1000); // Match the CSS transition duration
    } else {
        alert("Incorrect password. Please try again.");
    }
});

window.addEventListener('load', () => {
    mainContainer.classList.add('transition');
});
