document.addEventListener("DOMContentLoaded", () => {
  // Load member data from JSON file
  fetch("data/members.json")
    .then((response) => response.json())
    .then((data) => displayMembers(data.members))
    .catch((error) => console.error("Error loading members:", error));

  // Track visits using localStorage
  const sidebar = document.getElementById("visitor-info");
  const lastVisit = localStorage.getItem("lastVisit");
  const currentVisit = Date.now();

  if (lastVisit) {
    const daysElapsed = Math.floor((currentVisit - lastVisit) / (1000 * 60 * 60 * 24));
    sidebar.innerHTML = `<p>Welcome back! It's been <strong>${daysElapsed}</strong> day(s) since your last visit.</p>`;
  } else {
    sidebar.innerHTML = `<p>Welcome! This is your first visit.</p>`;
  }

  localStorage.setItem("lastVisit", currentVisit);
});

function displayMembers(members) {
  const container = document.querySelector(".card-grid");
  if (!container) {
    console.error("Card container not found.");
    return;
  }

  if (!Array.isArray(members) || members.length === 0) {
    container.innerHTML = "<p>No members found.</p>";
    return;
  }

  members.forEach((member) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = member.image || "images/placeholder.png";
    img.alt = `${member.name} logo`;

    const name = document.createElement("h3");
    name.textContent = member.name;

    const address = document.createElement("p");
    address.textContent = member.address || "No address provided";

    const phone = document.createElement("p");
    phone.textContent = member.phone || "No phone number";

    const website = document.createElement("a");
    website.href = member.website || "#";
    website.target = "_blank";
    website.textContent = "Visit Website";

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);

    container.appendChild(card);
  });
}

