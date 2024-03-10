const body = document.querySelector('body');
const toggle = document.querySelector('#theme-switch-toggle');



toggle.addEventListener('change', () => {
  if (body.classList.contains('dark-theme')) {
    body.classList.remove('dark-theme');
     
  } else {
    body.classList.add('dark-theme');
     
  }
});

export { body, toggle};