// validation.js

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('login-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'admin' && password === '12345') {
            navigateToMainPage();
        } else {
            alert('Invalid username or password');
        }
    });

    function navigateToMainPage() {
        window.location.href = 'main.html';
    }
});
