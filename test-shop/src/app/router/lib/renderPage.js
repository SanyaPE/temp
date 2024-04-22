export async function renderPage(page) {
  const fragment = new DocumentFragment();
  const node = document.createElement('div');
  node.insertAdjacentHTML('beforeend', page);
  [...node.children].forEach((elem) => {
    fragment.append(elem);
  });
  const main = document.querySelector('.main');
  main.innerHTML = '';
  main.append(fragment);
}
