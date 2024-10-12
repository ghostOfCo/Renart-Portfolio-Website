// Sélectionner tous les éléments que tu souhaites observer
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



  /////////////////////////////////////////////////////////

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