'use strict';

const btn = document.querySelector('.btn');
const inputEmail = document.querySelector('.form__email');
const inputBox = document.querySelectorAll('.input-box');
const emailClr = inputEmail.classList.contains('error-email');

const warningIcon = `<img src="./images/icon-error.svg" class="input__error-icon warning-icon" alt="error icon"/>`;
const emptyEmailMsg = `${warningIcon} <p class="input__error-msg warning-email" > Looks like this is not an email</p> `;
let emptyInputMsg;

// //////////////////////////////////////////////

const addError = function (el) {
  el.insertAdjacentHTML('beforeend', emptyInputMsg);
  const inputField = el.querySelector('.cta-input');
  inputField.classList.add('error');
};

const addEmailError = function () {
  inputEmail.insertAdjacentHTML('afterend', emptyEmailMsg);
  inputEmail.classList.add('error-email');
};
// //////////////////////////////////////////////

const checkData = function (e) {
  e.preventDefault();
  inputBox.forEach(checkInput);
};

const checkInput = function (field) {
  // selected input fields
  const inputField = field.querySelector('.cta-input');
  const atribute = inputField.getAttribute('placeholder');
  const msgClr = inputField.classList.contains('error');
  const isEmpty = inputField.value;

  emptyInputMsg = `${warningIcon} <p class="input__error-msg warning"> ${atribute} cannot be empty</p>`;

  const removeErrors = function () {
    [...inputField.parentElement.children].forEach(removeEl);
  };

  const removeEl = function (e) {
    if (e !== inputField) {
      e.remove();
      inputField.classList.remove('error');
      inputField.classList.remove('error-email');
    }
  };

  // conditions /////////////////////////////////

  if (isEmpty === '' && inputField.classList.contains('error-email')) {
    [...inputField.parentElement.children].forEach(removeEl);
    addError(field);
  } else if (isEmpty === '' && !msgClr) {
    addError(field);
  } else if (isEmpty !== '') {
    [...inputField.parentElement.children].forEach(removeEl);
    checkAdress();
  }
};

const checkAdress = function (el) {
  const email = inputEmail.value;

  const a = email.slice(0, email.indexOf('@')).length;
  const b = email.slice(email.indexOf('@'), email.indexOf('.')).length;
  const c = email.slice(email.indexOf('.'), email.length).length;

  const correctOrderEmail = a >= 1 && b >= 3 && c >= 3;
  const correctEmail = email.includes('@', '.') && correctOrderEmail;

  if (correctEmail) {
    [...inputEmail.parentElement.children].forEach(function (e) {
      if (e !== inputEmail) {
        e.remove();
        inputEmail.classList.remove('error');
        inputEmail.classList.remove('error-email');
      }
    });
  } else if (!correctEmail && !emailClr) {
    addEmailError();
  }
};

const confirmData = btn.addEventListener('click', checkData);
