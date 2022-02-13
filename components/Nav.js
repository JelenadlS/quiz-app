export default function Nav() {
  const allNavIcons = document.querySelectorAll('[data-nav]');
  const allPages = document.querySelectorAll('[data-page]');
  const allTitles = document.querySelectorAll('[data-title]');

  allNavIcons.forEach((clickedIcon) => {
    clickedIcon.addEventListener('click', (event) => {
      allPages.forEach((page) => {
        page.classList.add('hide');
      });
      allNavIcons.forEach((NavIcon) => {
        NavIcon.classList.remove('Nav__icon--active');
      });
      allTitles.forEach((title) => {
        title.classList.add('hide');
      });
      const iconAttribute = event.target.getAttribute('data-nav');
      const associatedIcon = document.querySelector(
        `[data-nav="${iconAttribute}"]`
      );
      const associatedPage = document.querySelector(
        `[data-page="${iconAttribute}"]`
      );
      const associatedTitle = document.querySelector(
        `[data-title="${iconAttribute}"]`
      );
      associatedTitle.classList.remove('hide');
      associatedPage.classList.remove('hide');
      associatedIcon.classList.add('Nav__icon--active');
    });
  });
}
