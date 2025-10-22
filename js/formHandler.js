// =============================
// ✉ Form Handler JS
// =============================

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  if(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = form.querySelector('input[name="name"]').value.trim();
      const email = form.querySelector('input[name="email"]').value.trim();
      const message = form.querySelector('textarea[name="message"]').value.trim();

      if(!name || !email || !message){
        alert("Please fill out all fields.");
        return;
      }

      // Optional: add more email validation here

      // Simulate form submission
      alert("Thanks! Your message has been sent.");
      form.reset();
    });
  }
});
