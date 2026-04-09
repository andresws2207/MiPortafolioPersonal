document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const numberOfBubbles = 12;

  for (let i = 0; i < numberOfBubbles; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    const size = Math.random() * 60 + 20 + 'px';
    bubble.style.width = size;
    bubble.style.height = size;

    bubble.style.left = Math.random() * 100 + 'vw';

    const duration = Math.random() * 10 + 10;
    const delay = Math.random() * 5;

    bubble.style.animationDuration = duration + 's';
    bubble.style.animationDelay = delay + 's';

    body.appendChild(bubble);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target); 
      }
    });
  });

  const elementosOcultos = document.querySelectorAll('section');

  elementosOcultos.forEach(elemento => {
    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(30px)";
    elemento.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    
    observer.observe(elemento);
  });

  const btnTroll = document.getElementById('btn-troll');
  let clickCount = 0;

  if (btnTroll) {
    btnTroll.addEventListener('click', function() {
      clickCount++;
      if (clickCount >= 3) {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
      } else {
        const windowWidth = document.documentElement.clientWidth;
        const windowHeight = document.documentElement.clientHeight;
        
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
        btnTroll.style.transform = 'none';
      }
    });
  }
});

const secretCode = ['6', '7'];
let codePosition = 0;

window.addEventListener('keydown', (e) => {
  let key = e.key;
  
  if (key === secretCode[codePosition]) {
    codePosition++;
    
    if (codePosition === secretCode.length) {
      activarPersona3();
      codePosition = 0;
    }
  } else {
    codePosition = 0;
    
    if (key === secretCode[0]) {
      codePosition = 1;
    }
  }
});

function activarPersona3() {
  console.log(" Has activado el secreto de Persona 3 ");
  
  const sonido = new Audio('assets/sonido-p3.mp3');
  sonido.volume = 0.8;
  
  sonido.play().catch(error => {
    console.log("No se pudo cargar el audio", error);
    alert("¡Invocación P3 activada!");
  });

  document.body.style.transition = "filter 0.2s ease-out";
  document.body.style.filter = "invert(100%) hue-rotate(180deg) contrast(150%)";
  
  setTimeout(() => {
    document.body.style.filter = "none";
    setTimeout(() => {
      document.body.style.transition = "";
    }, 200);
  }, 300);
}
