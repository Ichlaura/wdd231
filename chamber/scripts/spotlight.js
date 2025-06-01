fetch("../data/members.json")
  .then(res => res.json())
  .then(data => {
    const container = document.querySelector(".spotlight-cards");
    // Filtra solo membresías oro (3) y plata (2)
    const members = data.filter(member => member.membership === 2 || member.membership === 3);
    // Mezcla aleatoriamente y selecciona 3 para mostrar
    const shuffled = members.sort(() => 0.5 - Math.random()).slice(0, 3);

    // Crea y añade las tarjetas al contenedor
    shuffled.forEach(member => {
      const card = document.createElement("div");
      card.classList.add("spotlight-card");
      card.innerHTML = `
        <h3>${member.name}</h3>
        <img src="images/${member.image}" alt="${member.name}" />
        <p><strong>Phone:</strong> ${member.phone}</p>
        <p><strong>Address:</strong> ${member.address}</p>
        <a href="${member.website}" target="_blank" rel="noopener noreferrer">Visit Website</a>
        <p><em>Membership: ${member.membership === 3 ? "Gold" : "Silver"}</em></p>
        <p>${member.description}</p>
      `;
      container.appendChild(card);
    });
  })
  .catch(err => console.error("Error loading spotlight members:", err));
