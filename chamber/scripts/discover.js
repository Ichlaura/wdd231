// Cargar los datos desde data/members.json y mostrarlos en tarjetas
async function loadBusinessCards() {
  try {
    const response = await fetch("data/members.json");
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const businesses = await response.json();
    const container = document.querySelector(".card-grid");

    businesses.forEach(business => {
      const card = document.createElement("div");
      card.classList.add("card");

      // Agregar imagen si está definida
      if (business.image) {
        const img = document.createElement("img");
        img.src = business.image;
        img.alt = business.name;
        img.style.width = "100%";
        img.style.borderRadius = "8px";
        img.style.marginBottom = "1rem";
        card.appendChild(img);
      }

      const title = document.createElement("h3");
      title.textContent = business.name;
      card.appendChild(title);

      const description = document.createElement("p");
      description.textContent = business.description;
      card.appendChild(description);

      container.appendChild(card);
    });

  } catch (error) {
    console.error("Error loading business data:", error);
  }
}

// Mensaje aleatorio en el sidebar
function showVisitorMessage() {
  const messages = [
    "Welcome to the heart of Togane’s business community!",
    "Discover local gems and support small businesses.",
    "Connect, explore, and grow with us in Togane.",
    "Your journey through Togane’s best starts here!"
  ];

  const sidebar = document.getElementById("visitor-info");
  const message = document.createElement("p");
  message.textContent = messages[Math.floor(Math.random() * messages.length)];
  sidebar.appendChild(message);
}

// Ejecutar al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  loadBusinessCards();
  showVisitorMessage();
});
