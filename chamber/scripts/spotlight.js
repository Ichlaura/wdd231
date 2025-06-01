fetch("data/members.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("spotlights");
    const members = data.members.filter(member => member.membership === 2 || member.membership === 3);
    const shuffled = members.sort(() => 0.5 - Math.random()).slice(0, 3);

    shuffled.forEach(member => {
      const card = document.createElement("div");
      card.classList.add("spotlight-card");
      card.innerHTML = `
        <h3>${member.name}</h3>
        <img src="${member.image}" alt="${member.name}" />
        <p><strong>Phone:</strong> ${member.phone}</p>
        <p><strong>Address:</strong> ${member.address}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
        <p><em>Membership: ${member.membership === 3 ? "Gold" : "Silver"}</em></p>
      `;
      container.appendChild(card);
    });
  })
  .catch(err => console.error("Error loading spotlight members:", err));
