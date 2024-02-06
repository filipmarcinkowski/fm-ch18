'use strict';

const btn = document.querySelector('.btn');
const inputEmail = document.querySelector('.form__email');
const inputBox = document.querySelectorAll('.input-box');
const emailClr = inputEmail.classList.contains('error-email');

const x = function () {
  const atributeText = inputBox.forEach(function (field) {
    const atribute = field
      .querySelector('.cta-input')
      .getAttribute('placeholder');

    console.log(atribute);
  });
  return atributeText;
};

x();

const warningIcon = `<img src="./images/icon-error.svg" class="input__error-icon warning-icon" alt="error icon"/>`;
const emptyEmailMsg = `${warningIcon} <p class="input__error-msg warning-email" > Looks like this is not an email</p> `;
const emptyInputMsg = `${warningIcon} <p class="input__error-msg warning"> ${x()} cannot be empty</p>`;

const checkData = function (e) {
  e.preventDefault();
  inputBox.forEach(checkInput);
};

const checkInput = function (field) {
  // selected input fields
  const inputField = field.querySelector('.cta-input');
  const msgClr = inputField.classList.contains('error');
  const isEmpty = inputField.value;

  const atribute = field
    .querySelector('.cta-input')
    .getAttribute('placeholder');

  console.log(atribute);

  // ///////////////////////////////////////////
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

  // /////////////////////////////////////////////

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

// const emptyInputMsg = function () {
//   const insertHTML = `${warningIcon} <p class="input__error-msg warning"> ${atribute} cannot be empty</p>`;
//   const atribute = inputBox.forEach(function (el) {
//     console.log(el);
//     const x = el.querySelector('.cta-input').getAttribute('placeholder');
//     console.log(x);
//   });
//   el.insertAdjacentHTML('beforeend', insertHTML);
// };

// //////////////////////////////////////////////

const addError = function (el) {
  el.insertAdjacentHTML('beforeend', emptyInputMsg);
  // emptyInputMsg();
  const inputField = el.querySelector('.cta-input');
  inputField.classList.add('error');
};

const addEmailError = function () {
  inputEmail.classList.add('error-email');
  inputEmail.insertAdjacentHTML('afterend', emptyEmailMsg);
};
// //////////////////////////////////////////////

const confirmData = btn.addEventListener('click', checkData);
