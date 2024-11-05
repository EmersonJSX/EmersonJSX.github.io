// Marcar o tempo de início
const startTime = performance.now();

// Quando a página terminar de carregar, calcular o tempo total
window.addEventListener("load", () => {
  const endTime = performance.now();
  const loadTime = (endTime - startTime).toFixed(2); // Tempo em milissegundos
  console.log(`A página carregou em ${loadTime} milissegundos.`);
});

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
