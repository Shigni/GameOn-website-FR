const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll('.close');
const closeValidationBtn = document.getElementById('closeValidationBtn')
const modalSubmit = document.getElementById('modal-confirmation');
const modalForm = document.getElementById('form');


function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal
function launchModal() {
  birthdate.parentElement.setAttribute('data-error-visible', 'false');
  modalForm.style.display = 'block';
  modalbg.style.display = 'block';
  modalSubmit.style.display = 'none'; 
}
// Close modal
function closeModal() {
  modalbg.style.display = 'none';
}
closeBtn[0].addEventListener('click', closeModal);
closeValidationBtn.addEventListener('click', closeModal);

// Display confirmation
function displayModalSubmit() {
    modalForm.style.display = 'none';
    modalSubmit.style.display = 'flex';   
}

