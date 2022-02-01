import Card from './components/Card.js';
import Create from './components/Create.js';
import Nav from './components/Nav.js';

const allCardElements = document.querySelectorAll('[data-js="card"]');

allCardElements.forEach((cardElement) => {
  Card(cardElement);
});

Create();
Nav();
