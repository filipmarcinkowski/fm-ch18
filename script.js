'use strict';

const inputBox = document.querySelectorAll('.input-box');
const inputEmail = document.querySelector('.form__email');
const btn = document.querySelector('.btn');

const warningIcon = `<img src="./images/icon-error.svg" class="input__error-icon warning" alt="error icon"/>`;
const emptyInputMsg = `${warningIcon} <p class="input__error-msg warning"> (...) cannot be empty</p>`;
const emptyEmailMsg = `${warningIcon} <p class="input__error-msg warning-email" > Looks like this is not an email</p> `;

// //////////////////////////////////////////////////////////
const warningMsg = document.createElement('p');
const emailWarningMsg = document.createElement('p');

warningMsg.classList.add('input__error-msg', 'warning');
emailWarningMsg.classList.add('input__error-msg', 'warning');

warningMsg.innerHTML = `(...) cannot be empty`;
emailWarningMsg.innerHTML = `Looks like this is not an email`;

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

const checkData = function (e) {
  e.preventDefault();
  // console.log('hello');
  inputBox.forEach(checkInput);
};

const checkInput = function (field) {
  console.log('hello - 2');

  // selected input fields

  const inputField = field.querySelector('.cta-input');
  const isEmpty = inputField.value;

  if (isEmpty === '') {
    console.log('hello-3');

    addError(field);
    // field.appendChild(warningMsg);
  } else if (isEmpty !== '') {
    // const warning = field.querySelector('.input__error-msg');
    // warning.remove();
  }
};

const confirmData = btn.addEventListener('click', checkData);

const addError = function (el) {
  el.insertAdjacentHTML('afterend', emptyInputMsg);
};
