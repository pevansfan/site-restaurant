const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.header_menu');

burgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('show'); // Ajoute ou supprime la classe "show" pour afficher ou masquer les liens de navigation
});
