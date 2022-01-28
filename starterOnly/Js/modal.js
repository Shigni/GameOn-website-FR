function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll('.close');
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal
function launchModal() {
  modalbg.style.display = "block";
}
// Close modal
function closeModal() {
  modalbg.style.display = 'none';
}
closeBtn[0].addEventListener('click', closeModal);

const modalSubmit = document.getElementsByClassName('container-confirmation-submit');
const closeModalSubmit = document.getElementsByClassName('close-modal-submit');
const closeBtnConfirmation = document.getElementById('close-btn-confirmation');
const modalForm = document.getElementById('form');

// Display confirmation
function displayModalSubmit() {
    const modalBody = document.querySelector('.modal-body')
    modalForm.style.display = 'none';
    let div = document.createElement('div')
    div.className = ('modal-confirmation')
    div.innerHTML = '<p>Nous avons bien pris en compte votre inscription<br><br>à bientôt !</p>';
    modalBody.appendChild(div);
}

