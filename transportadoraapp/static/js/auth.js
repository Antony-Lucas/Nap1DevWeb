document.getElementById('login-btn').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('sign-btn').style.display = 'none';
    document.getElementById('user-btn').style.display = 'block';
});

document.getElementById('signup-btn').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('sign-btn').style.display = 'none';
    document.getElementById('user-btn').style.display = 'block';
});

document.getElementById('logout').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('sign-btn').style.display = 'block';
    document.getElementById('user-btn').style.display = 'none';
});