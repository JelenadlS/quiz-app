export default function Nav() {
  const allNavIcons = document.querySelectorAll('[data-nav]');
  const allPages = document.querySelectorAll('[data-page]');

  allNavIcons.forEach((clickedIcon) => {
    clickedIcon.addEventListener('click', (event) => {
      allPages.forEach((otherPages) => {
        otherPages.classList.add('hide');
      });
      const iconAttribute = event.target.getAttribute('data-nav');
      const associatedPage = document.querySelector(
        `[data-page="${iconAttribute}"]`
      );
      associatedPage.classList.remove('hide');
    });
  });
}
