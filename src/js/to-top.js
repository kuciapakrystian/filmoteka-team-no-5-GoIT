const scrollTopButton = document.querySelector('#scroll-top-button');

const onScroll = event => {
  const scrollPosition = event.target.scrollingElement.scrollTop;

  scrollTopButton.classList.toggle('visible', scrollPosition > 0);
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

document.addEventListener('scroll', onScroll);
scrollTopButton.addEventListener('click', scrollToTop);