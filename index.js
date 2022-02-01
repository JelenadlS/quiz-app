import Card from './js/Card.js';
import Create from './js/Create.js';
import Nav from './js/Navigation.js';

const allCardElements = document.querySelectorAll('[data-js="card"]');

allCardElements.forEach((cardElement) => {
  Card(cardElement);
});

Create();
Nav();
