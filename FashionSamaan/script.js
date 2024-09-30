// Elements for modals and buttons
const aboutUsModal = document.getElementById('about-us-modal');
const contactUsModal = document.getElementById('contact-us-modal');
const aboutUsLink = document.getElementById('about-us-link');
const contactUsLink = document.getElementById('contact-us-link');
const backFromAbout = document.getElementById('back-from-about');
const backFromContact = document.getElementById('back-from-contact');

// Show the About Us modal when clicked
aboutUsLink.addEventListener('click', () => {
  aboutUsModal.classList.remove('hidden');
});

// Show the Contact Us modal when clicked
contactUsLink.addEventListener('click', () => {
  contactUsModal.classList.remove('hidden');
});

// Back button for About Us
backFromAbout.addEventListener('click', () => {
  aboutUsModal.classList.add('hidden');
});

// Back button for Contact Us
backFromContact.addEventListener('click', () => {
  contactUsModal.classList.add('hidden');
});

// Handle Contact Form Submission (this could send an email using a backend service like SMTP)
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Message sent successfully to fashionsamaan2@gmail.com!");
  contactUsModal.classList.add('hidden');
});
