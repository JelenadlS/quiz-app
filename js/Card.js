export default function Card(cardElement) {
  const BookmarkElement = cardElement.querySelector('[data-js="bookmark"]');
  const ButtonToggle = cardElement.querySelector('[data-js="button-toggle"]');

  ButtonToggle.addEventListener('click', () => {
    BookmarkElement.classList.toggle('card__bookmark--active');
  });

  const answerButton = cardElement.querySelector('[data-js="show-answer"]');
  const hideButton = cardElement.querySelector('[data-js="hide-answer"]');

  answerButton.addEventListener('click', () => {
    hideButton.classList.toggle('hide');
    if (answerButton.textContent === 'Hide answer') {
      answerButton.textContent = 'Show answer';
    } else {
      answerButton.textContent = 'Hide answer';
    }
  });
}
