/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollPosition = window.scrollY;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 58; // Adjust for fixed header
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (scrollPosition > sectionTop && scrollPosition <= sectionTop + sectionHeight) {
            navLink.classList.add('active-link');
        } else {
            navLink.classList.remove('active-link');
        }
    });
};

// Add an event listener to detect scroll events
window.addEventListener('scroll', scrollActive);

window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

document.querySelector(".button").addEventListener("click", function() {
    // Path to your PDF file
    const pdfPath = "Akash_Soft_dev_Resume.pdf"; // Replace with the actual file path or hosted URL

    // Create an anchor element
    const link = document.createElement("a");
    link.href = pdfPath; // Set the href attribute to the PDF file path
    link.download = "Akash_Soft_dev_Resume.pdf"; // Desired file name for download
    link.click(); // Trigger the download

    console.log("PDF resume download triggered!");
});
//contact form
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Capture form inputs
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Validate inputs
    if (name && email && message) {
        // Simulate message sending
        const messageStatus = document.getElementById("messageStatus");
        messageStatus.innerHTML = `
            <p>Thank you, ${name}! Your message has been received.</p>
        `;
        messageStatus.style.color = "green";

        console.log("Message sent:");
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

        // Clear the form
        document.getElementById("contactForm").reset();
    } else {
        // Handle errors
        const messageStatus = document.getElementById("messageStatus");
        messageStatus.innerHTML = "<p>Please fill out all fields.</p>";
        messageStatus.style.color = "red";
    }
});

 // Get all image containers
const workImages = document.querySelectorAll('.work__img');

workImages.forEach(image => {
  const hoverText = image.querySelector('.hover-text');

  image.addEventListener('mouseenter', () => {
    hoverText.style.opacity = '1';
  });

  image.addEventListener('mouseleave', () => {
    hoverText.style.opacity = '0';
  });
});// Dark mode toggle functionality
const themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});

// Apply theme on page load based on local storage
window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
});
