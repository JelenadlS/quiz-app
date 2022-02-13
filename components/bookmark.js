export function bookmark() {
  const BookmarkElement = document.querySelector('[data-js="bookmark"]');
  const ButtonToggle = document.querySelector('[data-js="button-toggle" ]');

  ButtonToggle.addEventListener('click', () => {
    BookmarkElement.classList.toggle('card__bookmark--active');
  });
}
