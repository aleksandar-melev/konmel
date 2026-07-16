document.addEventListener("DOMContentLoaded", () => {

    initSmoothScroll();
    initStickyHeader();
    initActiveNavigation();
    initRevealAnimation();
	initBackToTop();

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

/* ==========================================================
   FOOTER
========================================================== */

footer{

    background:#1f2937;

    color:#fff;

    padding:70px 0 30px;

}

.footer-grid{

    display:grid;

    grid-template-columns:2fr 1fr 1fr;

    gap:60px;

    margin-bottom:50px;

}

.footer-logo{

    height:55px;

    margin-bottom:25px;

}

.footer-column h3{

    margin-bottom:20px;

    color:#fff;

    font-size:1.2rem;

}

.footer-column ul{

    display:flex;

    flex-direction:column;

    gap:12px;

}

.footer-column a{

    color:#fff;

    transition:.3s;

}

.footer-column a:hover{

    color:var(--primary);

}

.footer-bottom{

    border-top:1px solid rgba(255,255,255,.15);

    padding-top:25px;

    text-align:center;

}

.footer-bottom p{

    margin:0;

    color:#d1d5db;

}

/* ==========================================
   Back To Top
========================================== */

function initBackToTop(){

    const button=document.getElementById("backToTop");

    if(!button) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY>500){

            button.classList.add("show");

        }else{

            button.classList.remove("show");

        }

    });

    button.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}