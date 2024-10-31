
/*********************************************************Edit Nav ****************/

// DOM Elements
const myTopnav = document.getElementById("myTopnav");
const icon = document.querySelector(".icon")

// function
function editNav() {

  if (myTopnav.className === "topnav") {
    myTopnav.className += " responsive";
  } else {
    myTopnav.className = "topnav";
  }
}

icon.addEventListener('click', () => {
  editNav()
})

/************************************************Launch Modal *************** */

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


// Validation du formulaire

function validateForm(event) {
  event.preventDefault();
  let isFormValid = true;

  // Parametrage des messages d'erreur

  formData.forEach((element) => {
    // recuperation de l'input de chaque élément
    const input = element.querySelector("input, select, textarea");

    // si l'input est vide, ou s'il n'est pas valide...
    if (!input.checkValidity()) {
      // ...alors on met l'attribut qui permet au message d'erreur d'être visible à "true" dans l'élément.
      // et isFormValid vaut false
      element.setAttribute("data-error-visible", "true");
      isFormValid = false;
    }
    // dans le cas contraire, on retire l'attribut.
    else {
      element.removeAttribute("data-error-visible");
    }
  });

  // Affichage de messages d'erreur.
  // Si isFormValid est bien à "true", la div de confirmation d'envoi du formuaire apparaît et le formulaire disparaît. 
  if (isFormValid) {
    divMerci.style.display = "flex";
    myForm.style.display = "none";
  }
}

// Application de la fonction validateForm() à l'évènement de soumission du formulaire, et suppression de son comportement par defaut.
myForm.addEventListener("submit", (event) => {
  event.preventDefault();
  validateForm(event)
})





