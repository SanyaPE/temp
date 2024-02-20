function parseRoute() {
  const pathName = window.location.pathname;
  const path = pathName === '/index.html' ? '/' : pathName;
  return path;
}

export { parseRoute };
