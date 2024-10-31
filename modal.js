
/*********************************************************Edit Nav ****************/

// DOM Elements
const myTopnav = document.getElementById("myTopnav");
const icon = document.querySelector(".icon")

// fonction EditNav qui donne la classe .responive a l'élément
function editNav() {

  if (myTopnav.className === "topnav") {
    myTopnav.className += " responsive";
  } else {
    myTopnav.className = "topnav";
  }
}

//Attribution de la fonction à l'élément icon
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

// Fonction launchModal qui ouvre la modale
function launchModal() {
  modalbg.style.display = "block";
}

// Ajout de la fonctionnalité aux boutons associés
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Fonction closeModal qui ferme la modale
function closeModal() {
  modalbg.style.display = "none";
}

// Ajout de la fonctionnalité au bouton (x) et au bouton "fermer"
closeBtn.addEventListener("click", closeModal);
closeCross.addEventListener("click", closeModal);


/************ Form validation ************/

//DOM Elements
const myForm = document.getElementById("myForm");
const divMerci = document.querySelector(".merci");


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





