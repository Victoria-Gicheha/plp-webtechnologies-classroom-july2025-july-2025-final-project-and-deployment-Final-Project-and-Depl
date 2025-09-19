document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-links a");

  links.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });

  // Smooth scroll if internal links (not mandatory now)
  links.forEach(link => {
    if (link.hash && document.querySelector(link.hash)) {
      link.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(link.hash);
        target.scrollIntoView({ behavior: "smooth" });
      });
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  // Highlight active link
  const links = document.querySelectorAll(".nav-links a");
  links.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });

  // Contact form demo submission
  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("Thank you for contacting Torrie’s Cake Kulture! We’ll get back to you soon.");
      form.reset();
    });
  }
});
