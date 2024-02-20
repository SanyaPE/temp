export function renderPage(page) {
  const main = document.querySelector('.main');
  main.innerHTML = '';
  main.insertAdjacentHTML('beforeend', page);
}
