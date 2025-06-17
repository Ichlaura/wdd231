// modal.js

const modal = document.createElement('div');
modal.className = 'modal';
modal.setAttribute('role', 'dialog');
modal.setAttribute('aria-modal', 'true');
modal.setAttribute('aria-hidden', 'true');

const modalContent = document.createElement('div');
modalContent.className = 'modal-content';
modalContent.setAttribute('tabindex', '0');

modal.appendChild(modalContent);
document.body.appendChild(modal);

let currentCourseId = null;

export function initModal() {
  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
      closeModal();
    }
  });
}

export async function openModal(id) {
  currentCourseId = id;
  try {
    const res = await fetch('./data/courses.json');
    if (!res.ok) throw new Error('No se pudo cargar el curso');
    const courses = await res.json();
    const course = courses.find(c => c.id === id);

    if (!course) {
      modalContent.innerHTML = '<p>Curso no encontrado.</p>';
    } else {
      modalContent.innerHTML = `
        <h2>${course.name}</h2>
        <p><strong>Idioma:</strong> ${course.language}</p>
        <p><strong>Nivel:</strong> ${course.level}</p>
        <p><strong>Duración:</strong> ${course.duration} semanas</p>
        <p><strong>Descripción:</strong> ${course.description}</p>
        <button id="close-modal-btn">Cerrar</button>
      `;

      document.getElementById('close-modal-btn').focus();
      document.getElementById('close-modal-btn').addEventListener('click', closeModal);
    }

    showModal();
  } catch (error) {
    modalContent.innerHTML = `<p>Error al cargar datos del curso.</p>`;
    showModal();
  }
}

function showModal() {
  modal.style.display = 'flex';
  modal.setAttribute('aria-hidden', 'false');
  modalContent.focus();
}

function closeModal() {
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
}
