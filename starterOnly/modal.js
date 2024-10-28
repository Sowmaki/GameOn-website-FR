function editNav() {
  const myTopnav = document.getElementById("myTopnav");
  if (myTopnav.className === "topnav") {
    myTopnav.className += " responsive";
  } else {
    myTopnav.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelector(".btn-close");
const closeCross = document.querySelector(".close");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
closeBtn.addEventListener("click", closeModal);
closeCross.addEventListener("click", closeModal);

// close modal event
function closeModal() {
  modalbg.style.display = "none";
}

/************ Form validation ************/

//DOM Elements
const myForm = document.getElementById("myForm");
const divMerci = document.querySelector(".merci")


// Form validation

function validateForm(event) {
  event.preventDefault();
  let isFormValid = true;

  // Error messages

  formData.forEach((element) => {
    const input = element.querySelector("input, select, textarea");
    if (!input.checkValidity()) {
      element.setAttribute("data-error-visible", "true");
      isFormValid = false;
    } else {
      element.removeAttribute("data-error-visible");
    }
  });

  // Form validation message

  if (isFormValid) {
    divMerci.style.display = "flex";
    myForm.style.display = "none";
  }
}

myForm.addEventListener("submit", (event) => {
  event.preventDefault();
  validateForm(event)
})





