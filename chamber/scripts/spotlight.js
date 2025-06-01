fetch("data/members.json")
  .then(res => {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
  })
  .then(data => {
    const container = document.querySelector(".spotlight-cards");
    if (!container) {
      console.error("Container .spotlight-cards not found");
      return;
    }

    // Filtra membresías 2 y 3
    const members = data.filter(member => member.membership === 2 || member.membership === 3);
    // Mezcla y toma 3
    const shuffled = members.sort(() => 0.5 - Math.random()).slice(0, 3);

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
