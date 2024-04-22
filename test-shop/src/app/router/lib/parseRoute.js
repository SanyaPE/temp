function parseRoute() {
  const pathName = window.location.pathname;
  console.dir(window.location);
  const path = pathName === '/index.html' ? '/' : pathName;
  return path;
}

export { parseRoute };
