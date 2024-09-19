// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Modal-related functionality
    const loginModal = document.getElementById("loginModal");
    const loginBtn = document.getElementById("loginBtn");
    const closeModal = document.getElementsByClassName("close")[0];
    const loginForm = document.getElementById("loginForm");
    const loggedInUser = document.getElementById("loggedInUser");
    const usernameDisplay = document.getElementById("usernameDisplay");

    // Open modal when login button is clicked
    loginBtn.addEventListener("click", function () {
        loginModal.style.display = "block";
    });

    // Close modal when 'x' is clicked
    closeModal.addEventListener("click", function () {
        loginModal.style.display = "none";
    });

    // Close modal when clicking outside the modal content
    window.addEventListener("click", function (event) {
        if (event.target == loginModal) {
            loginModal.style.display = "none";
        }
    });

    // Check if user is already logged in
    if (localStorage.getItem("username")) {
        const username = localStorage.getItem("username");
        displayLoggedInUser(username);
    }

    // Handle login form submission
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // (Optional) Add validation or real authentication here
        if (username && password) {
            localStorage.setItem("username", username);
            displayLoggedInUser(username);
            // Close the modal
            loginModal.style.display = "none";
        }
    });

    // Display logged-in user
    function displayLoggedInUser(username) {
        usernameDisplay.textContent = username;
        loginBtn.classList.add("d-none");
        loggedInUser.classList.remove("d-none");
    }

    // Sign up form validation
    const signupForm = document.getElementById("signupForm");
    if (signupForm) {
        signupForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const signupUsername = document.getElementById("signupUsername").value;
            const signupEmail = document.getElementById("signupEmail").value;
            const signupPassword = document.getElementById("signupPassword").value;
            const signupConfirmPassword = document.getElementById("signupConfirmPassword").value;

            // Basic validation
            if (signupPassword !== signupConfirmPassword) {
                alert("Passwords do not match!");
                return;
            }

            // Save user data to localStorage (for simplicity)
            localStorage.setItem("username", signupUsername);
            localStorage.setItem("email", signupEmail);

            // Redirect to the home page after signup
            window.location.href = "index.html";
        });
    }
});

// Assuming you have a login function that validates the user
function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Validate user credentials (this is just a placeholder, replace with actual validation)
    if (email === "user@example.com" && password === "password") {
        // Store the user's name in localStorage
        localStorage.setItem("username", "John Doe");

        // Redirect to the home page after login
        window.location.href = "index.html";
    } else {
        alert("Invalid credentials!");
    }
}

// Call updateNavbar on page load
document.addEventListener("DOMContentLoaded", updateNavbar);

// Sign up form validation
const signupForm = document.getElementById("signupForm");
if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const signupUsername = document.getElementById("signupUsername").value;
        const signupEmail = document.getElementById("signupEmail").value;
        const signupPassword = document.getElementById("signupPassword").value;
        const signupConfirmPassword = document.getElementById("signupConfirmPassword").value;

        // Basic validation
        if (signupPassword !== signupConfirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // Save user data to localStorage (for simplicity)
        localStorage.setItem("username", signupUsername);
        localStorage.setItem("email", signupEmail);

        // Redirect to the home page after signup
        window.location.href = "index.html";
    });
}

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (email === storedEmail && password === storedPassword) {
        alert('Login successful!');
        window.location.href = 'index.html';
    } else {
        const alertBox = document.getElementById('alertBox');
        alertBox.classList.remove('d-none');
    }
});

function logout() {
    // Clear user data from localStorage
    localStorage.removeItem("username");
    localStorage.removeItem("email");

    // Refresh the page
    window.location.href = "index.html";
}

// Function to update the navbar with the user's name
function updateNavbar() {
    const username = localStorage.getItem("username");
    const loginItem = document.querySelector(".nav-item .btn-primary");
    const signupItem = document.querySelector(".nav-item .btn-secondary");
    const logoutItem = document.getElementById("logoutItem");

    if (username) {
        const navbar = document.querySelector(".navbar-nav");

        // Remove login and sign-up buttons
        if (loginItem) loginItem.classList.add("d-none");
        if (signupItem) signupItem.classList.add("d-none");

        // Add user's name to the navbar
        const userItem = document.createElement("li");
        userItem.className = "nav-item";
        userItem.innerHTML = `<a class="nav-link" href="#">${username}</a>`;
        navbar.appendChild(userItem);

        // Show and move logout button to the end of the navbar
        if (logoutItem) {
            logoutItem.classList.remove("d-none");
            navbar.appendChild(logoutItem);
        }
    } else {
        // Show login and sign-up buttons
        if (loginItem) loginItem.classList.remove("d-none");
        if (signupItem) signupItem.classList.remove("d-none");

        // Hide logout button
        if (logoutItem) logoutItem.classList.add("d-none");
    }
}

// Call updateNavbar on page load
document.addEventListener("DOMContentLoaded", updateNavbar);

