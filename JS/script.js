// For User Registration:
document.getElementById('submit').addEventListener('click', function () {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var telephone = document.getElementById('telephone').value;

    // Regular expressions for validation
    var usernameRegex = /^[a-zA-Z0-9_-]{5,12}$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+-=])[A-Za-z\d!@#$%^&*()_+-=]{8,20}$/;
    var telephoneRegex = /^[6-9]\d{9}$/;

    if (!usernameRegex.test(username)) {
        document.getElementById('username').style.border = '1px solid red';
        document.getElementById('username_error').style.display = 'block';

    } else {
        document.getElementById('username').style.border = '1px solid green';
        document.getElementById('username_error').style.display = 'none';
    }

    if (!emailRegex.test(email)) {
        document.getElementById('email').style.border = '1px solid red';
        document.getElementById('email_error').style.display = 'block';

    } else {
        document.getElementById('email').style.border = '1px solid green';
        document.getElementById('email_error').style.display = 'none';
    }

    if (!passwordRegex.test(password)) {
        document.getElementById('password').style.border = '1px solid red';
        document.getElementById('password_error').style.display = 'block';

    } else {
        document.getElementById('password').style.border = '1px solid green';
        document.getElementById('password_error').style.display = 'none';
    }

    if (!telephoneRegex.test(telephone)) {
        document.getElementById('telephone').style.border = '1px solid red';
        document.getElementById('telephone_error').style.display = 'block';

    } else {
        document.getElementById('telephone').style.border = '1px solid green';
        document.getElementById('telephone_error').style.display = 'none';
    }

});