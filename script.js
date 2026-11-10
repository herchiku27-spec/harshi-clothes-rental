// IMPORTANT: Replace this with your WhatsApp number, including country code, digits only.
// Sri Lanka example format: 94771234567 (do not include +, spaces or dashes).
const WHATSAPP_NUMBER = "947XXXXXXXX";

document.getElementById("year").textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("#nav");
menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    const selected = button.dataset.filter;
    document.querySelectorAll(".costume-card").forEach(card => {
      card.hidden = selected !== "all" && card.dataset.category !== selected;
    });
  });
});

document.getElementById("enquiry-form").addEventListener("submit", event => {
  event.preventDefault();
  if (WHATSAPP_NUMBER.includes("X")) {
    alert("Please add your WhatsApp number in script.js first. See the setup guide.");
    return;
  }
  const data = new FormData(event.currentTarget);
  const message = [
    "Hello Harshi Clothes Rental!",
    `Name: ${data.get("name")}`,
    `Phone: ${data.get("phone")}`,
    `Costume: ${data.get("costume")}`,
    `Event date: ${data.get("date") || "Not specified"}`,
    `Message: ${data.get("message") || "No additional details"}`
  ].join("\n");
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
});
