// ============================================================
// ANIMACIÓN DE BURBUJAS (FONDO)
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const numberOfBubbles = 12; // Cantidad de burbujas flotantes

  for (let i = 0; i < numberOfBubbles; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    // Tamaño aleatorio entre 20px y 80px
    const size = Math.random() * 60 + 20 + 'px';
    bubble.style.width = size;
    bubble.style.height = size;

    // Posición horizontal aleatoria (0% a 100% de la pantalla)
    bubble.style.left = Math.random() * 100 + 'vw';

    // Duración y retraso aleatorios para que varíen las velocidades
    const duration = Math.random() * 10 + 10; // Entre 10s y 20s en subir
    const delay = Math.random() * 5; // Retraso al iniciar

    bubble.style.animationDuration = duration + 's';
    bubble.style.animationDelay = delay + 's';

    // Añadir la burbuja al fondo de la página
    body.appendChild(bubble);
  }
});
