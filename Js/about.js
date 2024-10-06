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