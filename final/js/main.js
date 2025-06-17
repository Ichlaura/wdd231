// main.js
import { loadCourses } from './courses.js';
import { initModal } from './modal.js';

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('nav button');
  const navMenu = document.querySelector('nav ul');

  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

  // Inicializa el modal
  initModal();

  // Carga los cursos y muéstralos
  loadCourses();
});
