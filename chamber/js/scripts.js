// Mostrar el año actual y fecha de última modificación
document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

// Obtener elementos de botones y contenedor
const gridBtn = document.getElementById('grid-view-btn');
const listBtn = document.getElementById('list-view-btn');
const membersContainer = document.getElementById('members-container');

// Función para crear tarjeta de miembro
function createMemberCard(member) {
    const card = document.createElement('article');
    card.classList.add('member-card');
    
    card.innerHTML = `
        <img src="images/${member.image}" alt="Logo de ${member.name}" />
        <h3>${member.name}</h3>
        <p><strong>Dirección:</strong> ${member.address}</p>
        <p><strong>Teléfono:</strong> ${member.phone}</p>
        <p><strong>Descripción:</strong> ${member.description}</p>
        <p><a href="${member.website}" target="_blank" rel="noopener">Sitio Web</a></p>
    `;
    return card;
}

// Función para mostrar miembros
async function displayMembers() {
    try {
        const response = await fetch('data/members.json');
        const members = await response.json();

        // Limpiar contenido previo
        membersContainer.innerHTML = '';

        members.forEach(member => {
            const card = createMemberCard(member);
            membersContainer.appendChild(card);
        });
    } catch (error) {
        console.error('Error cargando los miembros:', error);
        membersContainer.textContent = 'Error al cargar los miembros.';
    }
}

// Cambiar vista a Grid
function setGridView() {
    membersContainer.classList.add('grid-view');
    membersContainer.classList.remove('list-view');
}

// Cambiar vista a Lista
function setListView() {
    membersContainer.classList.add('list-view');
    membersContainer.classList.remove('grid-view');
}

// Eventos para botones
gridBtn.addEventListener('click', () => {
    setGridView();
});

listBtn.addEventListener('click', () => {
    setListView();
});

// Inicializar
displayMembers();
setGridView();
