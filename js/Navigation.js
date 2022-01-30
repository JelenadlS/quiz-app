export default function Nav() {
  const homeButton = document.querySelector('[data-js="home-button"]');
  const homeContent = document.querySelector('[data-js="home-content"]');
  const createButton = document.querySelector('[data-js="create-button"]');
  const createContent = document.querySelector('[data-js="create-content"]');
  const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
  const bookmarkContent = document.querySelector(
    '[data-js="bookmark-content"]'
  );
  const profileButton = document.querySelector('[data-js="profile-button"]');
  const profileContent = document.querySelector('[data-js="profile-content"]');

  homeButton.addEventListener('click', () => {
    homeContent.classList.remove('hide');
    createContent.classList.add('hide');
    bookmarkContent.classList.add('hide');
    profileContent.classList.add('hide');
  });

  createButton.addEventListener('click', () => {
    createContent.classList.remove('hide');
    homeContent.classList.add('hide');
    bookmarkContent.classList.add('hide');
    profileContent.classList.add('hide');
  });

  bookmarkButton.addEventListener('click', () => {
    bookmarkContent.classList.remove('hide');
    homeContent.classList.add('hide');
    createContent.classList.add('hide');
    profileContent.classList.add('hide');
  });

  profileButton.addEventListener('click', () => {
    profileContent.classList.remove('hide');
    homeContent.classList.add('hide');
    createContent.classList.add('hide');
    bookmarkContent.classList.add('hide');
  });
}
