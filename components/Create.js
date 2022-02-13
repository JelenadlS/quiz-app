export default function Create() {
  const textQuestion = document.querySelector('[data-js="text-question"]');
  const charactersLeftQuestion = document.querySelector(
    '[data-js="characters-question"]'
  );
  const textAnswer = document.querySelector('[data-js="text-answer"]');
  const charactersLeftAnswer = document.querySelector(
    '[data-js="characters-answer"]'
  );
  const cardsContainer = document.querySelector('[data-js=cards]');
  const form = document.querySelector('[data-js=form]');

  let cards = [];

  textQuestion.addEventListener('input', () => {
    const textLength = textQuestion.value.length;
    charactersLeftQuestion.value = 150 - textLength;
    if (charactersLeftQuestion.value === '1') {
      charactersLeftQuestion.value =
        charactersLeftQuestion.value + ' character remaining';
    } else {
      charactersLeftQuestion.value =
        charactersLeftQuestion.value + ' characters remaining';
    }
  });
  textAnswer.addEventListener('input', () => {
    const textLength = textAnswer.value.length;
    charactersLeftAnswer.value = 400 - textLength;
    if (charactersLeftAnswer.value === '1') {
      charactersLeftAnswer.value =
        charactersLeftAnswer.value + ' character remaining';
    } else {
      charactersLeftAnswer.value =
        charactersLeftAnswer.value + ' characters remaining';
    }
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const questionElement = form.elements.question;
    const answerElement = form.elements.answer;
    const tagsElement = form.elements.tags;

    const newCard = {
      question: questionElement.value,
      answer: answerElement.value,
      tags: tagsElement.value
        .split(',')
        .map((tag) => tag.trim())
        .filter((tag) => tag.length),
    };

    cards = [newCard, ...cards];
    renderCards();

    form.reset();
  });

  function renderCards() {
    cardsContainer.ariaBusy = 'true';
    cardsContainer.innerHTML = '';
    cards.forEach((card, index) => {
      const cardElement = document.createElement('li');
      cardElement.className = 'card';
      cardElement.innerHTML = `
        <p class="center pdb-10">${card.question}</p>
        <button 
        class="card__bookmark${
          card.isBookmarked ? ' card__bookmark--active' : ''
        }"
        aria-label="Bookmark"
        aria-pressed="${card.isBookmarked ? 'true' : 'false'}"
        data-js="bookmark">
      </button>
      <button
      data-js="card-button"
      aria-controls="answer${index}"
      aria-expanded="false"
      class="card__answer card__answer--pointer"
    >Show answer</button>
    <p id="answer${index}" data-js="answer" hidden class="center mgt-10">${
        card.answer
      }</p>
        <ul role="list" class="card__tags no-bul">
          ${card.tags
            .map((tag) => `<li class="inline card__tags--style">${tag}</li>`)
            .join('')}
        </ul>
      `;
      cardsContainer.append(cardElement);

      const bookmarkElement = cardElement.querySelector('[data-js=bookmark]');

      bookmarkElement.addEventListener('click', () => {
        card.isBookmarked = !card.isBookmarked;
        bookmarkElement.classList.toggle('card__bookmark--active');
        bookmarkElement.setAttribute('aria-pressed', card.isBookmarked);
      });

      const answerButton = cardElement.querySelector('[data-js=card-button]');
      const answerElement = cardElement.querySelector('[data-js=answer]');

      answerButton.addEventListener('click', () => {
        answerElement.toggleAttribute('hidden');
        const oldExpandedState = answerButton.getAttribute('aria-expanded');
        const newExpandedState = oldExpandedState === 'true' ? 'false' : 'true';
        answerButton.setAttribute('aria-expanded', newExpandedState);
      });
    });
    cardsContainer.ariaBusy = 'false';
  }
}
