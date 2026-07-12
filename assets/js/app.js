document.addEventListener("DOMContentLoaded", () => {

    initSmoothScroll();
    initStickyHeader();
    initActiveNavigation();
    initRevealAnimation();
    initContactForm();

});

/* ==========================================
   Smooth Scroll
========================================== */

function initSmoothScroll() {

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        });

    });

}

/* ==========================================
   Sticky Header
========================================== */

function initStickyHeader() {

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            header.style.boxShadow = "0 8px 24px rgba(0,0,0,.08)";

        } else {

            header.style.boxShadow = "none";

        }

    });

}

/* ==========================================
   Active Navigation
========================================== */

function initActiveNavigation() {

    const sections = document.querySelectorAll("section[id]");

    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 120;

            if (window.scrollY >= top) {

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

}

/* ==========================================
   Reveal Animation
========================================== */

function initRevealAnimation() {

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.15

    });

    document.querySelectorAll("section").forEach(section => {

        section.classList.add("hidden");

        observer.observe(section);

    });

}

/* ==========================================
   Contact Form
========================================== */

function initContactForm() {

    const form = document.querySelector(".contact-form");

    if (!form) return;

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = form.querySelector('input[type="text"]');
        const email = form.querySelector('input[type="email"]');
        const message = form.querySelector("textarea");

        if (
            name.value.trim() === "" ||
            email.value.trim() === "" ||
            message.value.trim() === ""
        ) {

            alert("Molimo popunite sva obavezna polja.");

            return;

        }

        alert("Hvala! Vaša poruka je uspešno pripremljena za slanje.");

        form.reset();

    });

}