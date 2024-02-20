export const header = (navigation, btnBurger) => {
  const nav = navigation();
  const burger = btnBurger();
  return `
    <header class="header">
        <h1>HEADER</h1>
        ${nav}
        ${burger}
    </header>
    `;
};
