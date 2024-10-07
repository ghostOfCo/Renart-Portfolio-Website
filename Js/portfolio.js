const stack = document.querySelector('.stack');
const nav = document.querySelector('nav');

stack.addEventListener('click', () => {
  stack.classList.toggle('active');
  nav.classList.toggle('active');
})

///////////////////////////////////////////////////

const nav_links = document.querySelectorAll('.nav_links');

nav_links.forEach(link => {
  link.addEventListener('click', ()=> {
    nav_links.forEach(navlink => {
      navlink.classList.remove('actif');
    })
    link.classList.add('actif');
  })
})

////////////////////////////////////////////////////////

// Initialisation des variables
let currentIndex = 1;
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);

// Fonction pour faire défiler les images
function moveSlides() {
  track.style.transition = 'transform 0.5s ease';
  track.style.transform = `translateX(-${currentIndex * 25}%)`;

  slides.forEach((slide, index) => {
    if (index === currentIndex + 1) {
      // slide.classList.add('small');
      slide.classList.remove('small');
      slide.classList.add('large');
      slide.style.zIndex++;
      if(currentIndex + 1 === slides.length){
        slide.classList.remove('small');
        slide.classList.add('large');
        slide.style.zIndex++;
      }
    } else {
      slide.classList.remove('large');
      slide.classList.add('small');
      slide.style.zIndex--;
    }
  });

  currentIndex++;
  if (currentIndex === slides.length - 1) {
    setTimeout(() => {
      // track.style.transition = 'none';
      track.style.transform = 'translateX(0)';
      currentIndex = -1;
    }, 3000);
  }
}

// Déclencher le défilement des images toutes les 3 secondes
setInterval(moveSlides, 3000);
