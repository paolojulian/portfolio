import { logSomething } from './module';
import { openModal, closeModal } from './modal';
import './navbar';
// import axios from 'axios';

logSomething('Hello World');

window.closeModal = closeModal;

// Projects
// (async () => {
// const projects = await axios.get()
const projectCards = document.querySelectorAll('.js__project__card');
projectCards.forEach((card) => {
  card.addEventListener('click', () => {
    openModal('project-info');
    // closeModal('#project-info');
  });
});
// });