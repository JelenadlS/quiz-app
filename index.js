import Card from './js/Card.js';
import Create from './js/Create.js';

const allCardElements = document.querySelectorAll('[data-js="card"]');
const allCreateElements = document.querySelectorAll('[data-js="create"]');

allCardElements.forEach((cardElement) => {
  Card(cardElement);
});

allCreateElements.forEach((createElement) => {
  Create(createElement);
});
