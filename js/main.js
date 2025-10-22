// =============================
// 🌌 main.js - Mayank Portfolio
// =============================

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function() {

  // =============================
  // Navbar active link switch
  // =============================
  const navLinks = document.querySelectorAll(".navbar ul li a");
  const currentPath = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
    if(link.getAttribute("href") === currentPath){
      link.classList.add("active");
    }
  });

  // =============================
  // Smooth scroll for internal links
  // =============================
  navLinks.forEach(link => {
    if(link.hash){
      link.addEventListener("click", function(e){
        e.preventDefault();
        const target = document.querySelector(link.hash);
        if(target){
          target.scrollIntoView({behavior: "smooth"});
        }
      });
    }
  });

  // =============================
  // Optional: hero fade-in animation
  // =============================
  const hero = document.querySelector(".hero");
  if(hero){
    hero.style.opacity = 0;
    setTimeout(() => {
      hero.style.transition = "opacity 1s ease-in-out";
      hero.style.opacity = 1;
    }, 200);
  }

});

// =============================
// 🌈 Smooth Page Transitions
// =============================
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  // Add the active class to fade in
  body.classList.add("page-transition-active");

  // Handle internal navigation links
  const links = document.querySelectorAll("a[href^='']:not([target='_blank'])");
  
  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const href = link.getAttribute("href");

      // Fade out
      body.classList.remove("page-transition-active");
      body.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      body.style.opacity = "0";
      body.style.transform = "translateY(20px)";

      setTimeout(() => {
        window.location.href = href;
      }, 600); // Match the transition duration
    });
  });
});

// =============================
// 🌌 main.js - Mayank Portfolio
// =============================

// Project Data
const projects = [
  {
    title: "Weather App Project",
    summary: "Check current weather conditions of any city using OpenWeatherMap API.",
    details: `
      <h4>Features</h4>
      <ul>
        <li>Search for the weather by city name</li>
        <li>Displays temperature, pressure, humidity, and wind speed</li>
        <li>User-friendly GUI built with Tkinter</li>
      </ul>
      <h4>Tech Stack</h4>
      <p>Python, Tkinter, Requests, OpenWeatherMap API</p>
      <h4>Installation</h4>
      <p>Clone repo, install required packages, run python file</p>
    `,
    link: "https://github.com/mayankupadhyay-1260/Weather_app_prediction_usingJSON"
  },
  {
    title: "Manoveda - AI Mental Health",
    summary: "AI-powered system to assess and support mental well-being using NLP.",
    details: `
      <h4>Features</h4>
      <ul>
        <li>Sentiment Analysis Engine</li>
        <li>AI Chatbot for empathetic conversations</li>
        <li>Mood Tracker Dashboard</li>
        <li>Smart Suggestions & Coping Techniques</li>
      </ul>
      <h4>Tech Stack</h4>
      <p>HTML/CSS/JS, Python/Flask, Scikit-learn, NLTK</p>
    `,
    link: "https://github.com/mayankupadhyay-1260/Weather_app_prediction_usingJSON"
  }
];

// DOM Elements
const container = document.querySelector(".projects-grid");
const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDetails = document.getElementById("modalDetails");
const modalLink = document.getElementById("modalLink");
const closeBtn = document.querySelector(".close");

// Render Cards Dynamically
projects.forEach((proj, index) => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <h3>${proj.title}</h3>
    <p>${proj.summary}</p>
    <button class="btn view-details" data-index="${index}">View Details</button>
  `;
  container.appendChild(card);
});

// Modal Open
container.addEventListener("click", e => {
  if (e.target.classList.contains("view-details")) {
    const index = e.target.getAttribute("data-index");
    const proj = projects[index];
    modalTitle.innerHTML = proj.title;
    modalDetails.innerHTML = proj.details;
    modalLink.href = proj.link;
    modal.style.display = "block";
  }
});

// Modal Close
closeBtn.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});

// Navbar Active Link
const navLinks = document.querySelectorAll(".navbar ul li a");
const currentPath = window.location.pathname.split("/").pop();
navLinks.forEach(link => {
  if(link.getAttribute("href") === currentPath){
    link.classList.add("active");
  }
});


