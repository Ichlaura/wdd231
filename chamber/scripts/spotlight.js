fetch("data/members.json")
  .then(res => res.json())
  .then(data => {
    // Filtra miembros con membresía 2 o 3 (silver y gold)
    const members = data.filter(member => member.membership === 2 || member.membership === 3);
    // Mezcla aleatoriamente y toma 3
    const shuffled = members.sort(() => 0.5 - Math.random()).slice(0, 3);

    // Contenedor correcto donde poner las cards
    const container = document.querySelector("#spotlights .spotlight-cards");

    shuffled.forEach(member => {
      const card = document.createElement("div");
      card.classList.add("spotlight-card");
      card.innerHTML = `
        <img src="images/${member.image}" alt="${member.name}" />
        <h3>${member.name}</h3>
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
