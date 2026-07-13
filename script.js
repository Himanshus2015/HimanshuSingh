// ======================================
// DARK MODE
// ======================================

const themeButton = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeButton.textContent = "☀️";
}

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");
        themeButton.textContent = "☀️";

    } else {

        localStorage.setItem("theme", "light");
        themeButton.textContent = "🌙";

    }

});


// ======================================
// NAVBAR SHADOW
// ======================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

    } else {

        header.style.boxShadow = "none";

    }

});


// ======================================
// SCROLL ANIMATIONS
// ======================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .15

});


document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});


// ======================================
// COUNTER ANIMATION
// ======================================
/*
const counters = document.querySelectorAll(".card h3");

const speed = 40;

counters.forEach(counter => {

    const animate = () => {

        const targetText = counter.innerText;

        const target = parseInt(targetText.replace(/\D/g, ""));

        if (isNaN(target)) return;

        const current = Number(counter.dataset.count || 0);

        const increment = Math.ceil(target / speed);

        if (current < target) {

            const next = Math.min(current + increment, target);

            counter.dataset.count = next;

            if (targetText.includes("$")) {

                counter.innerText = "$" + next + "M+";

            }

            else if (targetText.includes("K")) {

                counter.innerText = next + "K+";

            }

            else if (targetText.includes("+")) {

                counter.innerText = next + "+";

            }

            else {

                counter.innerText = next;

            }

            requestAnimationFrame(animate);

        }

    };

    animate();

});
*/

// ======================================
// ACTIVE NAVIGATION
// ======================================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ======================================
// BACK TO TOP BUTTON
// ======================================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topButton";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.right = "30px";
topButton.style.bottom = "30px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.borderRadius = "50%";
topButton.style.border = "none";
topButton.style.background = "#2563eb";
topButton.style.color = "white";
topButton.style.fontSize = "20px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.boxShadow = "0 15px 30px rgba(37,99,235,.3)";
topButton.style.transition = ".3s";

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.style.display = "block";

    }

    else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ======================================
// CONSOLE MESSAGE
// ======================================

console.log(
`Welcome 👋

Designed & Built by Himanshu Singh

Senior Product Manager

GitHub:
https://github.com/Himanshus2015`
);