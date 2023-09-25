function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  

  document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileNav = document.getElementById("mobile-nav");
  
    // Add an event listener to toggle the mobile navigation when the menu icon is clicked
    menuToggle.addEventListener("click", function () {
      mobileNav.classList.toggle("active");
      // You can add this line to toggle the style of the menu icon when it's active
      document.getElementById("menu-icon").classList.toggle("active");
    });
  });


// script.js
document.addEventListener('DOMContentLoaded', function () {
  // Get all the navigation links
  const navLinks = document.querySelectorAll('.nav-links li a');

  // Function to remove "active" class from all links
  function removeActiveClass() {
      navLinks.forEach((link) => {
          link.classList.remove('active');
      });
  }

  // Add click event listeners to the navigation links
  navLinks.forEach((link) => {
      link.addEventListener('click', function (event) {
          // Prevent the default behavior of the link
          event.preventDefault();

          // Remove "active" class from all links
          removeActiveClass();

          // Add "active" class to the clicked link
          link.classList.add('active');

          // Scroll to the corresponding section
          const targetId = link.getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetId);
          if (targetSection) {
              targetSection.scrollIntoView({ behavior: 'smooth' });
          }
      });
  });
});
