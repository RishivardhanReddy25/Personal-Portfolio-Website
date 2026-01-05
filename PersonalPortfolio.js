new Typed(".typing", {
    strings: ["Front End Developer", "UI/UX Designer", "Web Enthusiast"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

function toggleMode() {
    document.body.classList.toggle("light-mode");
    document.body.classList.toggle("dark-mode");

    const button = document.querySelector(".mode-button, .mode-btn");
    if (document.body.classList.contains("light-mode")) {
        button.innerText = "☀️";
    } else {
        button.innerText = "🌙";
    }
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
        .scrollIntoView({ behavior: 'smooth' });
    });
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";
    
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
    alert("Please fill all fields");
    return;
    }

    alert("Message sent successfully!");
    this.reset();
});