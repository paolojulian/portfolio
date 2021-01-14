export const openModal = (key) => {
  const modal = document.getElementById(key);
  const wrapper = modal.querySelector('.wrapper');
  const modalCard = modal.querySelector('.modal-card');
  modal.showModal();
  document.body.classList.add('overflow-hidden')
  wrapper.classList.remove('opacity-0');
  wrapper.classList.add('opacity-100');
  modalCard.classList.remove('scale-50');
}

export const closeModal = (key) => {
  const modal = document.getElementById(key);
  const wrapper = modal.querySelector('.wrapper');
  const modalCard = modal.querySelector('.modal-card');
  wrapper.classList.remove('opacity-100');
  wrapper.classList.add('opacity-0');
  modalCard.classList.add('scale-50');
  document.body.classList.remove('overflow-hidden')
  setTimeout(() => {
    modal.close();
  }, 100)
}