(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    body: document.querySelector('body'),
  };
  refs.modal.addEventListener('click', toggleModal);
  refs.openModalBtn.addEventListener('click', toggleModal);

  function toggleModal(e) {
    if (Object.values(refs).includes(e.target)) {
      refs.modal.classList.toggle('is-hidden');
      onBodyToggle();
    }
  }

  window.addEventListener('keydown', closeModalByEscape);

  function closeModalByEscape(e) {
    if (e.code === 'Escape' && !refs.modal.classList.value.includes('is-hidden')) {
      refs.modal.classList.toggle('is-hidden');
      onBodyToggle();
    }
  }

  function onBodyToggle() {
    refs.body.classList.toggle('team-open');
  }
})();

