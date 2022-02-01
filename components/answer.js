export function answers() {
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
}
