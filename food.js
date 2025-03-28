
document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("loginBtn");
    const loginModal = new bootstrap.Modal(document.getElementById("loginModal"));
    const loginForm = document.getElementById("loginForm");

    // Show login modal when button is clicked
    loginBtn.addEventListener("click", function () {
        loginModal.show();
    });

    // Handle form submission
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        
        alert(`Welcome, ${username}! Your email is ${email}.`);
        
        loginModal.hide();
    });
});

