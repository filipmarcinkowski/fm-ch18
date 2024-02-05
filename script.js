'use strict';

const warningIcon = `<img src="./images/icon-error.svg" class="input__error-icon warning-icon" alt="error icon"/>`;
const emptyInputMsg = `${warningIcon} <p class="input__error-msg warning"> (...) cannot be empty</p>`;
const emptyEmailMsg = `${warningIcon} <p class="input__error-msg warning-email" > Looks like this is not an email</p> `;

// //////////////////////////////////////////////////////////
// const warningMsg = document.createElement('p');
// const emailWarningMsg = document.createElement('p');

// warningMsg.classList.add('input__error-msg', 'warning');
// emailWarningMsg.classList.add('input__error-msg', 'warning');

// warningMsg.innerHTML = `(...) cannot be empty`;
// emailWarningMsg.innerHTML = `Looks like this is not an email`;

// ////////////////////////////////////////////////////////////////////////

// /////////////////////////////////////////////////////////////////////////////////
const btn = document.querySelector('.btn');
const inputEmail = document.querySelector('.form__email');

const inputBox = document.querySelectorAll('.input-box');
const emailClr = inputEmail.classList.contains('error-email');

const checkData = function (e) {
  e.preventDefault();
  inputBox.forEach(checkInput);
};

const checkInput = function (field) {
  // selected input fields
  const inputField = field.querySelector('.cta-input');

  const msgClr = inputField.classList.contains('error');
  const isEmpty = inputField.value;
  const isEmail = inputEmail.value;

  // ///////////////////////////////////////////

  const removeEl = function (e) {
    if (e !== inputField) {
      e.remove();
      inputField.classList.remove('error');
      inputField.classList.remove('error-email');
    }
  };
  // jeśli pole jest puste //////////////////////

  if (isEmpty === '' && !msgClr) {
    addError(field);

    // pole nie jest puste
  } else if (isEmpty === '' && inputField.classList.contains('error-email')) {
    [...inputEmail.parentElement.children].forEach(function (e) {
      if (e !== inputEmail) {
        e.remove();
        inputEmail.classList.remove('error-email');
        inputEmail.classList.remove('error');
      }
    });
    addError(field);
  } else if (isEmpty !== '') {
    // usuń error msg i class='error'
    [...inputField.parentElement.children].forEach(removeEl);
    checkAdress();
  }
};

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

const checkAdress = function (el) {
  const email = inputEmail.value;

  const a = email.slice(0, email.indexOf('@')).length;
  const b = email.slice(email.indexOf('@'), email.indexOf('.')).length;
  const c = email.slice(email.indexOf('.'), email.length).length;

  const correctOrderEmail = a >= 1 && b >= 3 && c >= 3;
  const correctEmail = email.includes('@', '.') && correctOrderEmail;

  console.log(`a=${a}, b=${b}, c=${c}`);

  if (correctEmail) {
    // usuń class ='error' i 'error-email' oraz error msg
    [...inputEmail.parentElement.children].forEach(function (e) {
      if (e !== inputEmail) {
        e.remove();
        inputEmail.classList.remove('error');
        inputEmail.classList.remove('error-email');
      }
    });
    console.log('dobry adress');
  } else if (!correctEmail && !emailClr) {
    addEmailError();
    console.log('zły adress');
  }
};

const confirmData = btn.addEventListener('click', checkData);
