export function counting() {
  const textQuestion = document.querySelector('[data-js="text-question"]');
  const charactersLeftQuestion = document.querySelector(
    '[data-js="characters-question"]'
  );
  const textAnswer = document.querySelector('[data-js="text-answer"]');
  const charactersLeftAnswer = document.querySelector(
    '[data-js="characters-answer"]'
  );

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
}
