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

///////////////////////////////////////////////////////

const liteLeftElements = document.querySelectorAll('.lite-left-hidden-element');
const liteRightElements = document.querySelectorAll('.lite-right-hidden-element');
const liteBottomElements = document.querySelectorAll('.lite-bottom-hidden-element');
const liteTopElements = document.querySelectorAll('.lite-top-hidden-element');

// Créer un nouvel observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(!entry.isIntersecting){
        entry.target.classList.remove('visible');
    }

    // Si l'élément est visible dans le viewport  
    if (entry.isIntersecting) {
      // Ajouter la classe 'visible' pour déclencher l'animation
      entry.target.classList.add('visible');
      
      // Optionnel: arrêter d'observer l'élément après l'animation
      //observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1 // L'élément doit être au moins 10% visible avant d'être déclenché
});

liteLeftElements.forEach(element => {
    observer.observe(element);
  }
  );

  liteRightElements.forEach(element => {
    observer.observe(element);
  });


  const bottom_observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(!entry.isIntersecting){
          entry.target.classList.remove('bottom-visible');
      }
  
      // Si l'élément est visible dans le viewport  
      if (entry.isIntersecting) {
        // Ajouter la classe 'visible' pour déclencher l'animation
        entry.target.classList.add('bottom-visible');
        
        // Optionnel: arrêter d'observer l'élément après l'animation
        //observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.01 // L'élément doit être au moins 10% visible avant d'être déclenché
  });

  liteBottomElements.forEach(element => {
    bottom_observer.observe(element);
  });

  liteTopElements.forEach(element => {
    bottom_observer.observe(element);
  });

