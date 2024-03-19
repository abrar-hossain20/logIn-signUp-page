document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('des_form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        window.location.href = 'description.html';
    });
});