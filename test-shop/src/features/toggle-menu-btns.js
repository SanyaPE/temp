export function toggleMenuBtns() {
  const navItems = document.querySelectorAll('.nav__item');
  navItems.forEach((navItem) => {
    navItem.addEventListener('click', (e) => {
      navItems.forEach((item) => {
        if (item === navItem) item.classList.add('active');
        else item.classList.remove('active');
      });
      e.preventDefault();
    });
  });
}
