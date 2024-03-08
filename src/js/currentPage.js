const libraryBodyContainer = document.getElementById('library-body-container');
const homeBodyContainer = document.getElementById('home-body-container');
const homePage = document.querySelector('.page-home');
const libraryPage = document.querySelector('.page-library');

libraryBodyContainer.classList.add('hidden');

const link = document.querySelector('a');
document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.js-library, .page-home');

  links.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();

      const pageId = this.classList.contains('js-library')
        ? 'library-body-container'
        : 'home-body-container';

      showPage(pageId);
    });
  });
});

function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(function (page) {
    if (page.id !== pageId) {
      page.classList.add('hidden');
    }
  });

  const selectedPage = document.getElementById(pageId);
  selectedPage.classList.remove('hidden');

  const libraryBodyContainer = document.getElementById('library-body-container');
  const homeBodyContainer = document.getElementById('home-body-container');

  if (pageId === 'home-body-container') {
    libraryBodyContainer.classList.add('hidden');
    homeBodyContainer.classList.remove('hidden');
  } else {
    homeBodyContainer.classList.add('hidden');
    libraryBodyContainer.classList.remove('hidden');
  }
}
