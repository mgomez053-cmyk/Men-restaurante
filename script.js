const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

const filtros = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".card[data-category]");

filtros.forEach((boton) => {
  boton.addEventListener("click", () => {
    filtros.forEach((b) => b.classList.remove("active"));
    boton.classList.add("active");

    const categoria = boton.dataset.category;

    cards.forEach((card) => {
      if (categoria === "todos" || card.dataset.category === categoria) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

const promoBtn = document.getElementById("promoBtn");
const promos = [
  "Ordena un plato fuerte y recibe una bebida gratis.",
  "Postre al 50% en pedidos mayores a $300 MXN.",
  "Los martes hay 2x1 en tacos de arrachera.",
  "Agua fresca gratis en tu primera visita."
];
let promoIndex = 0;

if (promoBtn) {
  promoBtn.addEventListener("click", () => {
    promoIndex = (promoIndex + 1) % promos.length;
    document.querySelector(".promo p").textContent = promos[promoIndex];
  });
}

const pedidoForm = document.getElementById("pedidoForm");
const resultado = document.getElementById("resultadoPedido");

if (pedidoForm && resultado) {
  pedidoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const platillo = document.getElementById("platillo").value;
    const bebida = document.getElementById("bebida").value;
    const comentarios = document.getElementById("comentarios").value;

    resultado.style.display = "block";
    resultado.innerHTML = `
      <h3>Pedido confirmado</h3>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Platillo:</strong> ${platillo}</p>
      <p><strong>Bebida:</strong> ${bebida}</p>
      <p><strong>Comentarios:</strong> ${comentarios || "Sin comentarios"}</p>
    `;

    pedidoForm.reset();
  });
}
