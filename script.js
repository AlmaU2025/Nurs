
function showMessage(service) {
  alert('Вы выбрали услугу: ' + service);
}


window.addEventListener('scroll', function() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < window.innerHeight - 100) {
          card.classList.add('fade-in');
      }
  });
});
