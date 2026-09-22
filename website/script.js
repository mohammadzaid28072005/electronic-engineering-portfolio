const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.project-card');

filters.forEach((button) => {
  button.addEventListener('click', () => {
    const selected = button.dataset.filter;
    filters.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle('active', isActive);
      item.setAttribute('aria-pressed', String(isActive));
    });
    cards.forEach((card) => {
      const matches = selected === 'all' || card.dataset.category.split(' ').includes(selected);
      card.classList.toggle('hidden', !matches);
    });
  });
});
