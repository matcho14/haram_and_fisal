const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('menu');

  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });




  const cards = document.querySelectorAll('.card');
  const showCards = () => {
    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (cardTop < windowHeight) {
        card.classList.add('show');
      }
    });
  };
  window.addEventListener('scroll', showCards);