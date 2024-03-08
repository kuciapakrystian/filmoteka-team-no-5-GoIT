const libraryBodyContainer = document.getElementById('library-body-container');
const homeBodyContainer = document.getElementById('home-body-container');
const homePage = document.querySelector('.page-home');
const libraryPage = document.querySelector('.page-library');

libraryBodyContainer.classList.add('hidden');

const link = document.querySelector('a');
document.addEventListener('DOMContentLoaded', function () {
  // Pobierz wszystkie linki, które mają klasę js-library lub page-home
  const links = document.querySelectorAll('.js-library, .page-home');

  // Dodaj nasłuchiwanie zdarzenia kliknięcia dla każdego linku
  links.forEach(function (link) {
    link.addEventListener('click', function (event) {
      // Zapobiegnij domyślnemu zachowaniu przeglądarki (przeładowaniu strony)
      event.preventDefault();

      // Pobierz identyfikator strony do wyświetlenia na podstawie klasy linku
      const pageId = this.classList.contains('js-library')
        ? 'library-body-container'
        : 'home-body-container';

      // Wywołaj funkcję showPage(), przekazując identyfikator strony
      showPage(pageId);
    });
  });
});

function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(function (page) {
    // Ukryj wszystkie strony, które nie są aktualnie wyświetlane
    if (page.id !== pageId) {
      page.classList.add('hidden');
    }
  });

  const selectedPage = document.getElementById(pageId);
  selectedPage.classList.remove('hidden');

  // Ukryj library-body-container, jeśli home-body-container jest aktywny
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
