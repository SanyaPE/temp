const body = document.querySelector('body');
body.addEventListener('click', (e) => toggle(e));

export default function toggle(e) {
    const navItems = document.querySelectorAll('.nav__item');
    const target = e.target.closest('.nav__item');
    if (target) {
        navItems.forEach(item => item.classList.remove('active'))
        target.classList.add('active')

    }
}
