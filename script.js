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

// const confirmData = btn.addEventListener('click', function (e) {
//   e.preventDefault();
//   // SPRAWDZANIE CZY POLA SĄ WYPEŁNIONE////////////
//   inputBox.forEach(function (input) {
//     const inputField = input.querySelector('.cta-input');
//     const warning = input.querySelectorAll('.warning');
//     const warningEmail = input.querySelectorAll('.warning-email');
//     const errorClr = inputField.classList.contains('error');
//     const errorEmail = inputField.classList.contains('error-email');
//     const emailField = inputField.classList.contains('form__email');

//     // email field

//     const checkAdress = function (el) {
//       const email = inputEmail.value;
//       const a = email.slice(0, email.indexOf('@')).length;
//       const b = email.slice(email.indexOf('@'), email.indexOf('.')).length;
//       const c = email.slice(email.indexOf('.'), email.length).length;

//       const correctEmail = a >= 1 && b >= 3 && c >= 3;

//       console.log(`a=${a}, b=${b}, c=${c}`);

//       if (
//         // jeśli email nie zawiera '@' ani '.' i
//         (!email.includes('@', '.') && !errorEmail) ||
//         (!correctEmail && !errorEmail)
//       ) {
//         inputEmail.insertAdjacentHTML('afterend', emptyEmailMsg);
//         inputField.classList.remove('error');
//         inputField.classList.add('error-email');

//         // usuń error msg i error icon
//         warning.forEach(function (err) {
//           err.classList.add('hide');
//         });
//       } else if (correctEmail === true) {
//         warning.forEach(function (err) {
//           // usuń error msg i error icon
//           err.classList.add('hide');
//           // usuń czerwona obwódke
//           inputField.classList.remove('error-email');
//         });
//         warningEmail.forEach(function (err) {
//           // usuń error msg i error icon
//           err.classList.add('hide');
//           // usuń czerwona obwódke
//           inputField.classList.remove('error-email');
//         });
//       }
//     };

//     // other fields

//     if (inputField.value === '' && !errorClr) {
//       // dodaj HTML z ostrzeżeniem i czerwona obwódke
//       inputField.insertAdjacentHTML('afterend', emptyInputMsg);
//       inputField.classList.add('error');
//       warningEmail.forEach(function (err) {
//         // usuń error msg i error icon
//         err.classList.add('hide');
//       });

//       // /////jesli input nie jest pusty ///////////////
//     } else if (inputField.value !== '' && emailField) {
//       checkAdress();
//     } else if (inputField.value !== '') {
//       // usuń czerwona obwódke
//       inputField.classList.remove('error');

//       // usuń error msg i error icon
//       warning.forEach(function (err) {
//         err.classList.add('hide');
//       });
//     }
//   });
// });

// /////////////////////////////////////////////////////////////////////////////////
const btn = document.querySelector('.btn');
const inputEmail = document.querySelector('.form__email');

const inputBox = document.querySelectorAll('.input-box');

const checkData = function (e) {
  e.preventDefault();
  inputBox.forEach(checkInput);
};

const checkInput = function (field) {
  // selected input fields
  const inputEmail = field.querySelector('.form__email');
  const inputField = field.querySelector('.cta-input');
  const msgClr = inputField.classList.contains('error');
  // const emailClr = inputEmail.classList.contains('error-email');
  const isEmpty = inputField.value;

  // jeśli pole jest puste //////////////////////

  if (isEmpty === '' && !msgClr) {
    addError(field);
  } else if (isEmpty !== '') {
    const removeEl = function (e) {
      if (e !== inputField) {
        e.remove();
        inputField.classList.remove('error');
      }
    };

    [...inputField.parentElement.children].forEach(removeEl);
  }
};

const confirmData = btn.addEventListener('click', checkData);

const addError = function (el) {
  el.insertAdjacentHTML('beforeend', emptyInputMsg);
  const inputField = el.querySelector('.cta-input');
  inputField.classList.add('error');
};

const addEmailError = function (el) {
  inputEmail.insertAdjacentHTML('afterend', emptyEmailMsg);
  const inputEmail = el.querySelector('.form__email');
  inputEmail.classList.add('error-email');
};

const checkAdress = function (el) {
  const email = inputEmail.value;
  const a = email.slice(0, email.indexOf('@')).length;
  const b = email.slice(email.indexOf('@'), email.indexOf('.')).length;
  const c = email.slice(email.indexOf('.'), email.length).length;

  const correctEmail = a >= 1 && b >= 3 && c >= 3;

  console.log(`a=${a}, b=${b}, c=${c}`);

  if (
    // jeśli email nie zawiera '@' ani '.' i
    (!email.includes('@', '.') && !emailClr) ||
    (!correctEmail && !emailClr)
  ) {
    addEmailError();
  } else if (correctEmail === true) {
    [...inputEmail.parentElement.children].forEach(function (e) {
      if (el !== inputEmail) {
        el.remove();
        inputEmail.classList.remove('error-email');
      }
    });
  }
};
