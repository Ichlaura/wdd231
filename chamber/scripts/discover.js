async function loadBusinessCards() {
  try {
    const response = await fetch("data/members.json");
    if (!response.ok) throw new Error("Network response was not ok");

    const businesses = await response.json();
    const container = document.querySelector(".card-grid");

    businesses.forEach(biz => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${biz.image}" alt="${biz.name}">
        <h3>${biz.name}</h3>
        <p>${biz.description}</p>
        <a href="#" class="card-btn">Contact</a>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading business data:", error);
  }
}

loadBusinessCards();

