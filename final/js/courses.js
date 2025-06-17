// courses.js

const coursesContainer = document.getElementById('courses-container');
const coursesUrl = './data/courses.json'; // Aquí pondremos el archivo JSON

export async function loadCourses() {
  try {
    const res = await fetch(coursesUrl);
    if (!res.ok) throw new Error('Error cargando cursos');
    const courses = await res.json();

    displayCourses(courses);
    saveUserPreference('coursesLoaded', true);
  } catch (error) {
    console.error(error);
    coursesContainer.innerHTML = '<p>Hubo un error cargando los cursos.</p>';
  }
}

function displayCourses(courses) {
  coursesContainer.innerHTML = ''; // limpia antes

  courses.slice(0, 15).forEach(course => {
    const card = document.createElement('div');
    card.classList.add('course-card');
    card.setAttribute('tabindex', '0');
    card.innerHTML = `
      <h3>${course.name}</h3>
      <p><strong>Idioma:</strong> ${course.language}</p>
      <p><strong>Nivel:</strong> ${course.level}</p>
      <p><strong>Duración:</strong> ${course.duration} semanas</p>
      <button class="details-btn" data-id="${course.id}">Detalles</button>
    `;
    coursesContainer.appendChild(card);
  });

  attachDetailsListeners();
}

function attachDetailsListeners() {
  const buttons = document.querySelectorAll('.details-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', e => {
      const id = e.target.getAttribute('data-id');
      openModal(id);
    });
  });
}

function saveUserPreference(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Export para abrir modal desde aquí
import { openModal } from './modal.js';
export { openModal };
