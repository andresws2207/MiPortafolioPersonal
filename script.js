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

// ============================================================
// ANIMACIÓN DE APARICIÓN AL HACER SCROLL (FADE-IN)
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Si el elemento es visible en la pantalla
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        // Dejamos de observarlo para que la animación solo ocurra una vez
        observer.unobserve(entry.target); 
      }
    });
  });

  // Seleccionamos todas las secciones para animarlas
  const elementosOcultos = document.querySelectorAll('section');

  elementosOcultos.forEach(elemento => {
    // Ocultamos los elementos por defecto por código
    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(30px)";
    elemento.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    
    // Le decimos al observador que vigile este elemento
    observer.observe(elemento);
  });

  // LÓGICA DEL BOTÓN TROLL
  const btnTroll = document.getElementById('btn-troll');
  let clickCount = 0;

  if (btnTroll) {
    btnTroll.addEventListener('click', function() {
      clickCount++;
      if (clickCount >= 3) {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
      } else {
        // Al darle clic, se mueve de manera aleatoria por la pantalla sin crear scroll
        const windowWidth = document.documentElement.clientWidth;
        const windowHeight = document.documentElement.clientHeight;
        
        // Mover el botón al <body> para que su posición fixed funcione realmente frente al 'transform' del section
        if (btnTroll.parentElement !== document.body) {
          document.body.appendChild(btnTroll);
        }
        
        const randomX = Math.max(0, Math.random() * (windowWidth - btnTroll.offsetWidth));
        const randomY = Math.max(0, Math.random() * (windowHeight - btnTroll.offsetHeight));
        
        btnTroll.style.position = 'fixed';
        btnTroll.style.margin = '0';
        btnTroll.style.left = randomX + 'px';
        btnTroll.style.top = randomY + 'px';
        btnTroll.style.bottom = 'auto';
        btnTroll.style.right = 'auto';
        btnTroll.style.transform = 'none'; // Quitar el transform original para no interferir
      }
    });
  }
});

// --- EASTER EGG: CÓDIGO KONAMI (PERSONA 3) ---
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiPosition = 0;

document.addEventListener('keydown', (e) => {
  // Convertimos a minúscula por si el usuario tiene Bloq Mayús activado
  let key = e.key;
  if (key === 'B' || key === 'A') {
    key = key.toLowerCase();
  }

  // Comparamos la tecla apretada con la posición actual de la secuencia secreta
  if (key === konamiCode[konamiPosition]) {
    konamiPosition++; // Avanzamos al siguiente paso
    
    // Si llegamos al final del arreglo, ¡completaron el código!
    if (konamiPosition === konamiCode.length) {
      activarPersona3();
      konamiPosition = 0; // Reiniciamos por si lo quieren volver a hacer
    }
  } else {
    // Si se equivocan de tecla, se rompe la cadena y vuelve a empezar
    konamiPosition = 0;
    
    // Pequeño truco: Si se equivocó pero apretó la Flecha Arriba (inicio del código), cuenta como primer paso
    if (key === konamiCode[0]) {
      konamiPosition = 1;
    }
  }
});

function activarPersona3() {
  console.log("🔥 ¡Has activado el secreto de Persona 3! 🔥");
  
  // 1. Reproducir sonido (¡Asegúrate de poner este archivo en tu carpeta assets!)
  const sonido = new Audio('assets/sonido-p3.mp3');
  sonido.volume = 0.8;
  
  // Damos play al archivo. Los navegadores web permiten audio automático si el usuario está pulsando teclas
  sonido.play().catch(error => {
    console.log("No se pudo cargar el audio. ¿Seguro que pusiste el archivo mp3?", error);
    alert("¡Invocación P3 activada! (Recuerda añadir el archivo de sonido en assets/sonido-p3.mp3)");
  });

  // 2. Efecto visual intenso tipo disparo/Evoker (Invertimos los colores de la pantalla un segundo)
  document.body.style.transition = "filter 0.2s ease-out";
  document.body.style.filter = "invert(100%) hue-rotate(180deg) contrast(150%)";
  
  // Regresarlo a la normalidad después de un corto tiempo
  setTimeout(() => {
    document.body.style.filter = "none";
    setTimeout(() => {
      // Limpiamos el 'transition' para no afectar otras animaciones futuras de la base
      document.body.style.transition = "";
    }, 200);
  }, 300); // 300 milisegundos de destello mental
}
