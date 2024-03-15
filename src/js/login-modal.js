const modalLoginBtn = document.querySelector('.login-img-container');
const modalLogin = document.querySelector('.login-container');
const closeLogin = document.querySelector('.close-modal-login');

// const links = document.querySelectorAll('a');

// links.forEach(link => {
//   link.addEventListener('click', e => {
//     e.preventDefault();
//   });
// });

modalLoginBtn.addEventListener('click', e => {
  e.preventDefault();
  modalLogin.classList.add('login-active');
});

closeLogin.addEventListener('click', e => {
  e.preventDefault();
  modalLogin.classList.remove('login-active');
});
