const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const quantity = document.getElementById('quantity');
const birthdate = document.getElementById('birthdate');
const allLocations = document.getElementById('allLocations');
const locations = document.querySelectorAll('#allLocations .checkbox-input');
const checkbox1 = document.getElementById('checkbox1');
const input = document.getElementsByClassName('text-control');
const form = document.getElementById('form');
const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;
// Check names
function checkFirstName() {
    if (firstName.value.trim().length < 2 || first.value.trim() === '' || !firstName.value.match(regex)) {
        firstName.parentElement.setAttribute('data-error-visible', 'true');
        firstName.style.border = '2px solid #e54858';
        return false;
    }
    first.parentElement.setAttribute('data-error-visible', 'false');
    return true;
}
function checkLastName() {
    if (lastName.value.trim().length < 2 || last.value.trim() === "" || !lastName.value.match(regex)) {
        lastName.parentElement.setAttribute('data-error-visible', 'true');
        lastName.style.border = '2px solid #e54858';
        return false;
    }
    last.parentElement.setAttribute('data-error-visible', 'false');
    return true;
}
// Check mail
function checkEmail() {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.value.trim().match(re)) {
        email.parentElement.setAttribute('data-error-visible', 'false');
        return true;
    }
    email.parentElement.setAttribute('data-error-visible', 'true');
    email.style.border = '2px solid #e54858';
    return false;
}
// Check birthdate

function checkBirth() {
    if (birthdate.value.trim().length !== 10) {
        birthdate.parentElement.setAttribute('data-error-visible', 'true');
        birthdate.style.border = '2px solid #e54858';
        return false;
    }
    birthdate.parentElement.setAttribute('data-error-visible', 'false');
    return true;
}
// Check number 
function checkTournaments() {
    if (quantity.value.trim().length === 0 || isNaN(quantity.value.trim()) === true || quantity.value.trim() < 0) {
        quantity.parentElement.setAttribute('data-error-visible', 'true');
        quantity.style.border = '2px solid #e54858';
        return false;
    }
    quantity.parentElement.setAttribute('data-error-visible', 'false');
    return true;
}
// Check loc
function checkLocations() {
    allLocations.setAttribute('data-error-visible', 'true');
    for (let i = 0; i < locations.length; i++) {
        if (locations[i].checked) {
            allLocations.setAttribute('data-error-visible', 'false');
            return true;
        }
    }
    return false;
}
// Check conditions
function checkCheckBox() {
    if (checkbox1.checked === false) {
        checkbox1.parentElement.setAttribute('data-error-visible', 'true');
        return false;
    }
    checkbox1.parentElement.setAttribute('data-error-visible', 'false');
    return true;
}

// Event form
function validation(element, method, event) {
    element.addEventListener(event, method);
}
validation(firstName, checkFirstName, 'submit');
validation(lastName, checkLastName, 'submit');
validation(email, checkEmail, 'submit');
validation(birthdate, checkBirth, 'submit');
validation(quantity, checkTournaments, 'submit');
validation(allLocations, checkLocations, 'submit');
validation(checkbox1, checkCheckBox, 'submit');

function forAllValidation() {
    checkFirstName()
    checkLastName()
    checkEmail()
    checkBirth()
    checkTournaments()
    checkLocations()
    checkCheckBox()
}

function formValidation() {
    if (checkFirstName() === true &&
        checkLastName() === true &&
        checkEmail() === true &&
        checkBirth() === true &&
        checkTournaments() === true &&
        checkLocations() === true &&
        checkCheckBox() === true) {
        return true;
    }
    return false;
}

// Send
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (formValidation() == true) {
        displayModalSubmit();
        document.querySelector('form').reset();
        firstName.style.border = 'none';
        lastName.style.border = 'none';
        email.style.border = 'none';
        birthdate.style.border = 'none';
        quantity.style.border = 'none';
        allLocations.style.border = 'none';
        checkbox1.style.border = 'none';
    } else {
        forAllValidation();
    }
});