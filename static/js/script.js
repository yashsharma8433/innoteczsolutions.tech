'use strict';



/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const elemArr = [navCloseBtn, overlay, navOpenBtn];

for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

/**
 * toggle navbar & overlay when click any navbar-link
 */

const navbarLinks = document.querySelectorAll("[data-navbar-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}





/**
 * header & go-top-btn active
 * when window scroll down to 400px
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

// ------------------------------------------------------------------------------------------------- 


document.getElementById('quote-form').addEventListener('submit', function(event) {
  event.preventDefault(); 

  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  var submitButton = document.getElementById('submit-btn');
  var url = '/email?email=' + encodeURIComponent(email) + '&msg=' + encodeURIComponent(message);
  submitButton.disabled = true;
  submitButton.textContent = 'Sending...';
  fetch(url, {
    method: 'GET'
  })
  .then(function(response) {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text(); // Expecting text response instead of JSON
  })
  .then(function(data) {
    // console.log('Data sent successfully:', data);
    alert('Data sent successfully');
    submitButton.textContent = 'Sent';
  })
  .catch(function(error) {
    console.error('Error sending data:', error);
    alert('Error sending data');
    submitButton.textContent = 'Send';
    submitButton.disabled = false;
  });
});
