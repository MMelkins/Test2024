// Button Click Events
function showFirstContent() {
  document.getElementById("content-area").innerHTML = "Content 1";
}

function showSecondContent() {
  document.getElementById("content-area").innerHTML = "This is the content for Button 2.";
}

function showThirdContent() {
  document.getElementById("content-area").innerHTML = "This is the content for Button 3.";
}

// Image Carousel
let slideIndex = 0;

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 1) { slideIndex = slides.length }
  showSlides();
}

function nextSlide() {
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  showSlides();
}

// Dynamic Content Loading
let contentCount = 3; // Initial number of content items

function loadMoreContent() {
  for (let i = 0; i < 2; i++) { // Load 2 more items
    contentCount++;
    const newContent = document.createElement("p");
    newContent.textContent = `Dynamic content item ${contentCount}`;
    document.getElementById("content-area").appendChild(newContent);
  }
}

// Form Submission with Validation
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  // Basic Validation (Add more as needed)
  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // If validation passes, submit the form (you can use AJAX or a similar method)
  console.log("Form submitted:", name, email, phone, message);
});

function validateEmail(email) {
  // Regular expression for email validation
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Text Animation (Example: Fade In)
window.addEventListener("load", () => {
  const title = document.querySelector("h1");
  title.style.opacity = "0";
  setTimeout(() => {
    title.style.transition = "opacity 1s ease";
    title.style.opacity = "1";
  }, 100);
});