async function getPage(pageName) {
  const { page } = await import(`pages/page.${pageName}`);
  return page;
}

export async function renderPage(pageName) {
  const fragment = new DocumentFragment();
  const node = document.createElement('div');
  const page = await getPage(pageName);
  node.insertAdjacentHTML('beforeend', page);
  [...node.children].forEach((elem) => {
    fragment.append(elem);
  });
  const main = document.querySelector('.main');
  main.innerHTML = '';
  main.append(fragment);
}
