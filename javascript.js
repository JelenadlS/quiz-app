const BookmarkElement = document.querySelector('[data-js="bookmark"]');
const ButtonToggle = document.querySelector('[data-js="button-toggle" ]');

ButtonToggle.addEventListener('click', () => {
  BookmarkElement.classList.toggle('card__bookmark--active');
});

const answerButton = document.querySelector('[data-js="show-answer"]');
const hideButton = document.querySelector('[data-js="hide-answer"]');

answerButton.addEventListener('click', () => {
  hideButton.classList.toggle('hide');
  if (answerButton.textContent === 'Hide answer') {
    answerButton.textContent = 'Show answer';
  } else {
    answerButton.textContent = 'Hide answer';
  }
});
