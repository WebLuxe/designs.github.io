let bars = document.querySelector("#bar");
bars.addEventListener("click", () => {
  document.querySelector("header nav ul").classList.toggle("active");
  bars.classList.toggle("activeBar");
});

// Smooth scroll to section on link click
document.querySelectorAll('nav ul li a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector("header nav ul").classList.remove("active"); // Close navigation
    bars.classList.remove("activeBar"); // Remove active class from bar icon

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
// Select the elements you want to animate using querySelectorAll
const contentElements = document.querySelectorAll("section");

// Create an intersection observer instance
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add a class to trigger the animation
      entry.target.classList.add("visible");
      observer.unobserve(entry.target); // Stop observing once it's visible
    }
  });
});

// Observe each content element separately
contentElements.forEach((element) => {
  observer.observe(element); // Observe each section element
});

// Get all toggle buttons
const toggleBtns = document.querySelectorAll(".toggle-btn");

// Add click event listener to each toggle button
toggleBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;

    // Toggle the 'show' class on the answer to expand/collapse
    if (answer.classList.contains("show")) {
      answer.classList.remove("show");
    } else {
      // Close any open answers
      toggleBtns.forEach((otherBtn) => {
        if (otherBtn !== btn) {
          otherBtn.nextElementSibling.classList.remove("show");
        }
      });
      answer.classList.add("show");
    }
  });
});

const contactBtn = document.getElementById("contact-btn");

// Add a click event listener to the button
contactBtn.addEventListener("click", () => {
  // Scroll smoothly to the contact section
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

const arrowUp = document.querySelector(".arrow-up");
arrowUp.addEventListener("click", () => {
  document.getElementById("home").scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".home button").addEventListener("click", () => {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});
