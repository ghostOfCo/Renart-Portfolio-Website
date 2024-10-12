  /////////////////////////////////////////////////////////

  const stack = document.querySelector('.stack');
  const nav = document.querySelector('nav');
  const divForm = document.querySelector('.div-form');
  const mapContact = document.querySelector('.map-contact');
  const foot = document.querySelector('.foot');

  stack.addEventListener('click', () => {
    stack.classList.toggle('active');
    nav.classList.toggle('active');
    divForm.classList.toggle('back');
    mapContact.classList.toggle('back');
    foot.classList.toggle('back');
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

  ////////////////////////////////////////////////////////////
  function initMap() {
    const location = { lat: 6.130419, lng: 1.215829 }; // Coordonnées de l'emplacement (ici, Lomé)
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: location,
      disableDefaultUI: true, // Désactiver les contrôles par défaut pour un effet plus épuré
  });

  }

  //////////////////////////////////////////////////////////////////////////////


  const Form = document.querySelector('form');

  window.onload = () => {
    divForm.classList.add('unroll');
    showFormTout = setTimeout(() => {
      Form.classList.add('unroll');
    }, 500)
  };