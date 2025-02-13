// FAQ Toggle
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
        const answer = button.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

// Slideshow
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
function showSlides() {
    slides.forEach(slide => slide.classList.remove('active'));
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add('active');
}
setInterval(showSlides, 2000); // Change slide every 3 seconds

// Form Submission
document.getElementById('membership-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Simulate sending a confirmation email
    alert(`Thank you for joining CodeHub, ${name}! A confirmation email has been sent to ${email}.`);

    // Reset form
    this.reset();
});
// Hardcoded credentials
const validUsers = [
    { username: "admin", password: "admin123" },
    { username: "user1", password: "pass1" },
    { username: "user2", password: "pass2" },
];

// Get elements
const loginButton = document.getElementById("loginButton");
const loginModal = document.getElementById("loginModal");
const closeModal = document.querySelector(".close");
const loginSubmit = document.getElementById("loginSubmit");
const loginFeedback = document.getElementById("loginFeedback");

// Show modal when login button is clicked
loginButton.addEventListener("click", () => {
    loginModal.style.display = "flex";
});

// Close modal when the close button is clicked
closeModal.addEventListener("click", () => {
    loginModal.style.display = "none";
    loginFeedback.textContent = ""; // Clear feedback
});

// Close modal when clicking outside the modal content
window.addEventListener("click", (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = "none";
        loginFeedback.textContent = ""; // Clear feedback
    }
});

// Handle login form submission
loginSubmit.addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check credentials
    const user = validUsers.find((user) => user.username === username && user.password === password);

    if (user) {
        loginFeedback.style.color = "green";
        loginFeedback.textContent = "Login successful!";
        setTimeout(() => {
            loginModal.style.display = "none";
        }, 1500); // Close modal after success
    } else {
        loginFeedback.style.color = "red";
        loginFeedback.textContent = "Invalid username or password.";
    }
});
// Hamburger menu toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});
const joinButtons = document.querySelectorAll(".join-btn");

    joinButtons.forEach(button => {
        button.addEventListener("click", () => {
            const formSection = document.getElementById("registration");
            formSection.scrollIntoView({ behavior: "smooth" });
        });
    });