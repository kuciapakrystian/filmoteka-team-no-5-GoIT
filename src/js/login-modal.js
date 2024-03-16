export default (() => {
  const refs = {
    openModalBtn: document.querySelector('.login-open'),
    closeModalBtn: document.querySelector('.login-close'),
    modal: document.querySelector('.login-modal'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
