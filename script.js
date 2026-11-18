
/* =========================
   LUCCA v1.0 - JAVASCRIPT
========================= */

// Navegación entre apartados
document.addEventListener("DOMContentLoaded", () => {

  const links = document.querySelectorAll(".nav a");

  // Marcar el apartado seleccionado
  function updateActiveLink() {
    const currentHash = window.location.hash;

    links.forEach(link => {
      link.classList.remove("active");

      const href = link.getAttribute("href");

      if (
        href === currentHash ||
        (href === "index.html" && !currentHash) ||
        (href === "index.html#" && !currentHash)
      ) {
        link.classList.add("active");
      }
    });
  }

  // Actualizar navegación al cambiar de apartado
  links.forEach(link => {
    link.addEventListener("click", () => {
      links.forEach(item => item.classList.remove("active"));
      link.classList.add("active");
    });
  });

  window.addEventListener("hashchange", updateActiveLink);

  updateActiveLink();

  // Mensaje de bienvenida en consola
  console.log("LUCCA v1.0 iniciado correctamente.");
});

// Función para regresar al inicio
function goHome() {
  window.location.href = "index.html";
}

// Función para abrir el apartado Proxy
function openLuccaProxy() {
  window.location.href = "proxy.html";
}

